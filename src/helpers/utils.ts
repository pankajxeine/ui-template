import { isInteger, isUndefined } from "lodash";
import chain from "lodash/chain";
import cloneDeep from "lodash/cloneDeep";
import find from "lodash/find";
import forEach from "lodash/forEach";
import get from "lodash/get";
import groupBy from "lodash/groupBy";
import invert from "lodash/invert";
import isArray from "lodash/isArray";
import isEmpty from "lodash/isEmpty";
import isNumber from "lodash/isNumber";
import isObject from "lodash/isObject";
import omit from "lodash/omit";
import set from "lodash/set";
import trim from "lodash/trim";
import moment from "moment-timezone";
import numeral from "numeral";
import APPCONFIG from "config/appConfig";
import store from "store";
import PERMISSION_RULES from "constants/permissionRules";
import PACKAGEFEATUREKEYS from "constants/packageFeatureKeys";
import WIZARD_PAGES, { WIZARD_PAGES_KEY } from "constants/wizard_pages";
import { Decrypt } from "./crypto";
import { formatCurrencyWrapper } from "./helper";
import Storage from "./storage";
const _ = {
  find,
  get,
  isEmpty,
  isUndefined,
  forEach,
  trim,
  invert,
  groupBy,
  isNumber,
  isArray,
  isInteger,
  chain,
  set,
  cloneDeep,
  omit,
  isObject,
};

/**
 * get header
 * @returns {object}
 */
export const getHeaders = () => {
  return {
    Accept: "application/json, text/plain, */*",
    Authorization: `Token ${Storage.loadToken()}`,
    store_id: Storage.loadStore(),
    "x-domain": window.location.hostname,
    "x-industry": Storage.loadDomainIndustry(),
    "Content-Type": "application/json",
  };
};

export const requireAll = (requireContext: any) => {
  return requireContext.keys().map(requireContext);
}


/**
 * check for the module permission
 *
 * @param {boolean} role
 * @param {array} privileges
 * @param {string} moduleKey
 * @param {array} companyModules
 * @param {string} action
 * @returns {boolean}
 */
export const checkModulePermission = (
  role: string,
  privileges: any[],
  moduleKey: string,
  companyModules: any[],
  action = "FULL"
): boolean => {
  const overridePermissionCheck = JSON.parse(
    //@ts-ignore
    process.env.REACT_APP_OVERRIDE_ROLE_PERMISSION
  );

  if (
    role === "Organization" ||
    moduleKey == "" ||
    overridePermissionCheck === true
  ) {
    return true;
  }

  // const companyModules = _.get(state, "company.modules", []);
  const module = _.find(companyModules, { module_key: moduleKey });

  const moduleAccess = _.find(privileges, {
    module_id: _.get(module, "id", 0),
  });
  const permission = _.get(moduleAccess, "permission", "");

  if (action === "FULL" && permission === PERMISSION_RULES.FULL) {
    return true;
  }
  if (action === "delete" && permission === PERMISSION_RULES.FULL) {
    return true;
  }
  if (
    (action === "edit" || action === "add") &&
    (permission === PERMISSION_RULES.FULL ||
      permission === PERMISSION_RULES.ADD_UPDATE_ONLY)
  ) {
    return true;
  }
  if (
    action === "view" &&
    (permission === PERMISSION_RULES.FULL ||
      permission === PERMISSION_RULES.ADD_UPDATE_ONLY ||
      permission === PERMISSION_RULES.VIEW_ONLY)
  ) {
    return true;
  }
  return false;
};

/**
 * 
 * @param role 
 * @param privileges 
 * @param moduleKey 
 * @param companyModules 
 * @param action 
 * @returns 
 */
export const checkModulePermissionCRM = (
  role: string,
  privileges: any[],
  moduleKey: string,
  companyModules: any[],
  action = "FULL"
) => {
  //@ts-ignore
  if (role && moduleKey && companyModules[role]) {
    if (role === "Corporate") {
      return true;
    } else {
      //@ts-ignore
      if (companyModules[role].includes(moduleKey)) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

/**
 * format the pone number
 *
 * @param {string} number
 * @returns {string}
 */
export const formatPhone = (number: string) => {
  /** format: (999) 999-9999 */

  if (!_.isEmpty(number)) {
    let phone = number.replace(/\D/g, "");
    phone = `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
    return phone;
  } else {
    return number;
  }
};

/**
 * format number
 *
 * @param {string} value
 * @param {string} datatype
 * @returns {number}
 */
export const formatNumber = (value: any, datatype = "0,0") => {
  const state = store.getState();
  const crr_state = _.get(state, "company.companyBasicDetails.currency", {
    symbol_left: "",
    symbol_right: "",
  });
  switch (datatype) {
    case "percentage":
      if (value === undefined || value === null || value === "") {
        return "N/A";
      }
      return numeral(value / 100).format(`${APPCONFIG.PERCENT_FORMAT}%`);
    case "currency":
      return formatCurrency(value);

    case "currencyInput":
      if (value === undefined || value === null || value === "") {
        value = APPCONFIG.DECIMAL_DEFAULT_VALUE;
      }
      return (
        crr_state.symbol_left +
        numeral(value).format(APPCONFIG.MONETORY_FORMAT) +
        crr_state.symbol_right
      );
    default:
      if (value === undefined || value === null || value === "") {
        return "N/A";
      }
      return numeral(value).format(`${APPCONFIG.PERCENT_FORMAT}`);
  }
};

/**
 * format the date
 *
 * @param {date} date
 * @param {string} dateFormat
 * @param {string} timezone
 * @param {boolean} dateOnly
 * @returns {date}
 */
export const formatDate = (
  date: any,
  dateFormat = "MM-DD-YYYY",
  timezone = "America/New_York",
  dateOnly = false
) => {
  const state = store.getState();

  dateFormat = _.get(
    state,
    "company.companyBasicDetails.date_format.date_format",
    "MM-DD-YYYY"
  );
  timezone = _.get(
    state,
    "company.companyBasicDetails.timezone.name",
    "America/New_York"
  );
  if (!_.isEmpty(date)) {
    date = dateOnly ? moment(date) : moment(date).tz(timezone);
    date = date.format(dateFormat);

    return date;
  } else {
    return date;
  }
};

/**
 * format date in crm
 *
 * @param {date} date
 * @param {string} dateFormat
 * @param {string} timezone
 * @param {boolean} dateOnly
 * @returns
 */
export const formatDateCRM = (
  date: any,
  dateFormat = "MM-DD-YYYY",
  timezone: string,
  dateOnly: boolean = false
) => {
  const state = store.getState();
  dateFormat = _.get(
    state,
    "company.companyDetails.date_format.date_format",
    "MM-DD-YYYY"
  );
  timezone = _.get(state, "company.companyDetails.timezone.name", false);
  if (!timezone) {
    timezone = moment.tz.guess();
  }

  if (!_.isEmpty(date)) {
    date = dateOnly ? moment(date) : moment(date).tz(timezone);
    date = date.format(dateFormat);
    return date;
  } else {
    return date;
  }
};

/**
 * convert date to timezone
 *
 * @param {date} custdate
 * @returns {date}
 */
export const convertDateToTimeZoneCRM = (custdate: any) => {
  console.log("object", custdate);
  custdate = moment.isMoment(custdate) ? custdate : moment.utc(custdate);
  const state = store.getState();
  let timezone = _.get(
    state,
    "company.companyDetails.timezone.name",
    "America/New_York"
  );
  return custdate.tz(timezone);
  //return moment(_date);
};

/**
 * date ago
 *
 * @param {date} date
 * @param {string} dateFormat
 * @param {string} timezone
 * @param {boolean} dateOnly
 * @returns {date}
 */
export const dayAgo = (
  date: any,
  dateFormat = "MM-DD-YYYY",
  timezone: string,
  dateOnly = false
) => {
  return moment().diff(moment(date), "days");
};

export const formatTimeCRM = (
  date: any,
  timeFormat = "hh:mm A",
  timezone: string,
  dateOnly = false
) => {
  // const state = store.getState();
  // timeFormat = _.get(
  //   state,
  //   "company.companyDetails.date_format.date_format",
  //   "HH:mm:ss"
  // );
  if (!timezone) {
    timezone = moment.tz.guess();
  }

  if (!_.isEmpty(date)) {
    // date = moment(date, "HH:mm:ss");
    date = dateOnly ? moment(date) : moment(date).tz(timezone);
    // console.log("date ===>", date);
    date = date.format(timeFormat);
    return date;
  } else {
    return date;
  }
};

/**
 * format the time
 *
 * @param {date} date
 * @param {string} timeFormat
 * @param {string} timezone
 * @param {boolean} dateOnly
 * @returns
 */
export const formatTime = (
  date: any,
  timeFormat = "hh:mm A",
  timezone: string,
  dateOnly = false
) => {
  const state = store.getState();
  timezone = _.get(
    state,
    "company.companyBasicDetails.timezone.name",
    "America/New_York"
  );
  if (!_.isEmpty(date)) {
    date = dateOnly ? moment(date) : moment(date).tz(timezone);
    date = date.format(timeFormat);
    return date;
  } else {
    return date;
  }
};

/**
 * Convert date to timezone
 * @param {date} custdate
 * @returns {date}
 */
export const convertDateToTimeZone = (custdate: any) => {
  console.log("object", custdate);
  custdate = moment.isMoment(custdate) ? custdate : moment.utc(custdate);
  const state = store.getState();
  let timezone = _.get(
    state,
    "company.companyBasicDetails.timezone.name",
    "America/New_York"
  );
  return custdate.tz(timezone);
  //return moment(_date);
};

/**
 * convert to UTC date
 *
 * @param {string} custdate
 * @param {string} dateFormat
 * @returns {date}
 */
export const convertToUTCDate = (custdate = "", dateFormat = "MM-DD-YYYY") => {
  const mydate = moment(custdate, dateFormat);
  if (mydate.isValid()) {
    return mydate
      //@ts-ignore
      .add(mydate.utcOffset(mydate._offset || 0), "m")
      .utc()
      .format();
  } else {
    return custdate;
  }
};

/**
 * convert date to UTC
 *
 * @param {date} date
 * @param {string} duration
 * @returns {date}
 */
export const convertStartDateToUTC = (date: any, duration: any = "day") => {
  const state = store.getState();
  let timezone = _.get(
    state,
    "company.companyBasicDetails.timezone.name",
    "America/New_York"
  );
  return moment
    .tz(date, timezone)
    .startOf(duration)
    .utc()
    .format();
};
/**
 * convert end date to utc
 *
 * @param {date} date
 * @param {string} duration
 * @returns {date}
 */
export const convertEndDateToUTC = (date: any, duration: any = "day") => {
  const state = store.getState();
  let timezone = _.get(
    state,
    "company.companyBasicDetails.timezone.name",
    "America/New_York"
  );
  return moment
    .tz(date, timezone)
    .endOf(duration)
    .utc()
    .format();
};

/**
 * convert start date to utc crm
 *
 * @param {date} date
 * @param {string} duration
 * @returns {date}
 */
export const convertStartDateToUTCCRM = (date: any, duration: any = "day") => {
  const state = store.getState();
  let timezone = _.get(
    state,
    "company.companyDetails.timezone.name",
    "America/New_York"
  );
  return moment
    .tz(date, timezone)
    .startOf(duration)
    .utc()
    .format();
};

/**
 * convert end date to utc crm
 *
 * @param {date} date
 * @param {string} duration
 * @returns {date}
 */
export const convertEndDateToUTCCRM = (date: any, duration: any = "day") => {
  const state = store.getState();
  let timezone = _.get(
    state,
    "company.companyDetails.timezone.name",
    "America/New_York"
  );
  return moment
    .tz(date, timezone)
    .endOf(duration)
    .utc()
    .format();
};

/**
 * create query params
 *
 * @param {object} payload
 * @returns {string}
 */
export const createQuery = async (payload: any) => {
  let queryString = "";
  if (payload.pageSize > 0) {
    queryString += `page=${payload.page}&page_size=${payload.pageSize}`;
  }

  if (
    payload.sortedInfo &&
    !_.isUndefined(payload.sortedInfo) &&
    !_.isEmpty(payload.sortedInfo) &&
    !_.isEmpty(payload.sortedInfo?.column)
  ) {
    let field = _.get(payload, "sortedInfo.column.sort_field", "root");
    let tableNameString = "";
    let fieldArray = field.split(".");
    fieldArray.forEach((tableName: string) => {
      tableNameString += `[${tableName}]`;
    });
    const sortField =
      payload.sortedInfo.order === "descend"
        ? `-${payload.sortedInfo.field}`
        : payload.sortedInfo.field;
    queryString += `&order_by${tableNameString}=${sortField}`;
  }
  let _filters = {
    root: [],
  };
  //let _opertorFilters = [];
  // let obj = { or: [] };
  let obj = {};
  if (!_.isEmpty(payload.filters)) {
    (payload.filters || []).forEach((e: any) => {
      let str = e.field_name;
      let name = str.substr(str.indexOf(".") + 1); //for removing issue related to same name
      let op = _.get(e, "operator", "");

      let temp = {
        t: e.field_type,
        n: name,
        v:
          e.field_type === "date"
            ? (op !== "OR" ? op : "") +
            (e.date_format
              ? moment.tz(e.field_value, e.date_format, e.timezone || "CST")
              : moment(e.field_value)
            )
              .startOf("date")
              .utc()
              .format()
            : e.field_value,
      };

      if (e.field_type === "datetime" || e.field_type === "number") {
        let val = e.field_value === null ? null : e.field_value;
        temp = {
          t: e.field_type,
          n: name,
          v: (op !== "OR" ? op : "") + val,
        };
      }
      if (op === "OR") {
        let p_field_op = _.get(e, "sort_field", "root");
        //@ts-ignore
        if (_.isEmpty(obj[p_field_op]) || _.isUndefined(obj[p_field_op])) {
          //@ts-ignore
          obj[p_field_op] = [{ ...temp }];
        } else {
          //@ts-ignore
          obj[p_field_op].push(temp);
        }
      } else {
        let p_field = _.get(e, "sort_field", "root");
        if (p_field === "root") {
          //@ts-ignore
          _filters["root"].push(temp);
        } else {
          //@ts-ignore
          if (_.isUndefined(_filters[p_field])) {
            //@ts-ignore
            _filters[p_field] = { root: [] };
          }
          //@ts-ignore
          _filters[p_field]["root"].push(temp);
        }
      }
    });
    if (!_.isEmpty(obj)) {
      _.forEach(obj, (value, key) => {
        if (key === "root") {
          if (_.isEmpty(_filters[key]) || _.isUndefined(_filters[key])) {
            _filters[key] = [];
          }
          //@ts-ignore
          _filters[key].push({ or: value });
        } else {
          //@ts-ignore
          if (_.isEmpty(_filters[key]) || _.isUndefined(_filters[key])) {
            //@ts-ignore
            _filters[key] = { root: [] };
          }
          //@ts-ignore
          _filters[key]["root"].push({ or: value });
        }
      });
    }

    // if (!_.isEmpty(obj.or)) {
    //   _filters["root"].push(obj);
    // }
    let formattedFilter = {};
    _.forEach(_filters, (val, key) => {
      //@ts-ignore
      let filterArray = key === "root" ? val : val.root;
      //@ts-ignore
      let groupedFilters: any[] = [];
      _.forEach(_.groupBy(filterArray, "n"), (group_value, group_key) => {
        if (group_key === "undefined" || group_value.length === 1) {
          groupedFilters.push(...group_value);
        } else {
          groupedFilters.push({ and: [...group_value] });
        }
      });
      //@ts-ignore
      formattedFilter[key] =
        key === "root" ? groupedFilters : { root: groupedFilters };
    });
    let filter_string = "";
    _.forEach(formattedFilter, (val: any, key) => {
      const tableArray = key.split(".");
      const tableKey = tableArray.join("][");
      if (
        _.isEmpty(payload.not_required) ||
        !payload.not_required.includes(key)
      ) {
        //        filter_string += `required[${tableKey}]=true&`;
        let req_string = "";
        tableArray.forEach((v) => {
          req_string = `[${v}]`;
          if (!filter_string.includes(`required${req_string}=true`)) {
            filter_string += `required${req_string}=true&`;
          }
        });
      }
      filter_string +=
        key === "root"
          ? `filters[${tableKey}]=` +
          encodeURIComponent(JSON.stringify(val)) +
          "&"
          : `filters[${tableKey}]=` +
          encodeURIComponent(JSON.stringify(val.root)) +
          "&";
    });
    queryString += `&` + filter_string;
  }
  if (payload.fetch) {
    let temp = "";
    (payload.fetch || []).forEach((e: any) => {
      if (e.field_type === "date") {
        e.field_value = moment(e.field_value).format("YYYY-MM-DD");
      }

      if (e.field_value !== null && !_.isEmpty(e.field_value)) {
        temp += e.field_key
          ? `&fetch[${e.field_key}][${e.field_name}]`
          : `&fetch[${e.field_name}]`;
        temp += `=${e.field_value}`;
      }
    });
    queryString += temp;
  }
  queryString =
    queryString.replace(/&$/, "") + "&" + _.get(payload, "fields", "");
  return _.trim(queryString, "&");
};

/**
 * get image url
 *
 * @param {string} url
 * @param {string} dir
 * @returns {string}
 */
export const getImageUrl = (url: string, dir = "") => {
  const state = store.getState();
  const subAssets = _.get(state, "company.subDetails.assets_link", "");
  const subDetails = _.get(state, "company.subDetails", "");
  const companyDetails = _.get(state, "company.companyBasicDetails", "");
  const companyAssetslink = _.get(
    state,
    "company.companyBasicDetails.assets_link",
    ""
  );

  let s3FolderPath = "";
  let publicPath: string = "";
  if (process.env.REACT_APP_AWS_DIRECTORY === undefined) {
    if (subAssets) {
      const s3Data = Decrypt(subAssets);
      s3FolderPath =
        subDetails.env_key +
        "/" +
        subDetails.industryCode +
        "/" +
        s3Data.assets_folder_name +
        "/";
      publicPath = s3Data.assets_public_url;
    } else if (companyAssetslink) {
      const s3FolderData = Decrypt(companyAssetslink);
      var newStr = companyDetails.s3_path.substring(1);
      s3FolderPath = newStr + "/";
      publicPath = s3FolderData.assets_public_url;
    }
  } else {
    s3FolderPath = process.env.REACT_APP_AWS_DIRECTORY;
    //@ts-ignore
    publicPath = process.env.REACT_APP_AWS_PUBLIC_URL;
  }

  if (_.isEmpty(url)) return null;
  var DIRECTORY = s3FolderPath + (_.isEmpty(dir) ? "" : `${dir}`);

  var PUBLIC_URL = publicPath + `/${DIRECTORY}/`;
  return PUBLIC_URL + url;
};

/**
 * currency number
 *
 * @param {string} value
 * @returns
 */
export const parseCurrencyNumber = (value: any) => {
  // const state = store.getState();
  // const crr_state = _.get(state, "company.companyBasicDetails.currency", {
  //   symbol_left: "",
  //   symbol_right: "",
  // });
  let parsedValue = value;
  parsedValue = filterAmount(parsedValue);
  // if (value.includes(`${crr_state.symbol_left}`)) {
  //   parsedValue = parsedValue.replace(`${crr_state.symbol_left}`, "");
  // }
  // if (value.includes(`${crr_state.symbol_right}`)) {
  //   parsedValue = parsedValue.replace(`${crr_state.symbol_right}`, "");
  // }
  return parsedValue;
};

/**
 * get minimum value
 *
 * @returns {float}
 */
export const getMinimumValue = () => {
  // APPCONFIG.DECIMAL_POINTS
  let temp = (0).toFixed(APPCONFIG.DECIMAL_POINTS - 1) + "1";
  // let x = parseFloat(temp);
  return parseFloat(temp);
};

/**
 * Check custom setting
 *
 * @param {object} customSettings
 * @param {string} key
 * @returns {boolean}
 */
export const checkCustomSetting = (customSettings: any, key: string) => {
  const obj = _.find(customSettings, { setting_key: key });
  const status = _.get(obj, "status", "OFF") === "ON" ? true : false;
  return status;
};

/**
 * check option setting
 *
 * @param {object} customSettings
 * @param {string} key
 * @returns {boolean}
 */
export const checkOptionSetting = (customSettings: any, key: string) => {
  const obj = _.find(customSettings, { setting_key: key });
  const value = _.get(obj, "value", "");
  //@ts-ignore
  const selected = _.invert(value)[true];
  return selected;
};

// export const checkPackageFeaturePermission = (
//   moduleKey,
//   blockKey,
//   fieldKey
// ) => {
//   const state = store.getState();
//   const role = _.get(state, "auth.user.role.name", "");

//   const overridePermissionCheck = JSON.parse(
//     process.env.REACT_APP_OVERRIDE_ROLE_PERMISSION
//   );
//   if (
//     role === "Organization" ||
//     moduleKey == "" ||
//     overridePermissionCheck === true
//   ) {
//     return true;
//   }

//   const packageModulesPermissionObj = _.get(
//     state,
//     "company.package_modules",
//     []
//   );
//   const module = _.get(packageModulesPermissionObj, moduleKey, null);
//   if (_.isEmpty(module)) return false; // If module not found then can't access it's fileds

//   const blocks = _.get(module, "blocks", null);
//   const block = _.get(blocks, blockKey, null);
//   if (_.isEmpty(block)) return false; // If block not found then can't access it's fileds

//   const fields = _.get(block, "fields", null);
//   const field = _.get(fields, fieldKey, null);
//   if (_.isEmpty(field)) return false; // If field not found then can't access it because that field desabled for the package

//   return true;
// };

/**
 * Access package module
 *
 * @param {string} moduleKey
 * @returns {boolean}
 */
export const canAccessPackageModule = (moduleKey: string) => {
  const state = store.getState();
  const role = _.get(state, "auth.user.role.name", "");

  const overridePermissionCheck = JSON.parse(
    //@ts-ignore
    process.env.REACT_APP_OVERRIDE_ROLE_PERMISSION
  );
  if (
    role === "Organization" ||
    moduleKey == "" ||
    overridePermissionCheck === true
  ) {
    return true;
  }

  const packageModulesPermissionObj = _.get(
    state,
    "company.package_modules",
    []
  );
  const subDetails = _.get(state, "company.subDetails", []);

  // const module = _.get(packageModulesPermissionObj, moduleKey, null);
  const module = !_.isUndefined(packageModulesPermissionObj[moduleKey])
    ? packageModulesPermissionObj[moduleKey]
    : null;

  let moduleAccess = "None";

  if (_.isEmpty(module)) {
    return false; // If module not found then can't access it's fileds
  } else {
    let permission_based_on = _.get(subDetails, "permission_based_on", "Role");
    // check permission based on if it user based permission then apply user level permissions otherwise apply role level permissions
    if (permission_based_on.toLowerCase() === "user") {
      //&& !_.isEmpty(user_features_permissions)
      const user_features_permissions = _.get(
        state,
        "auth.user.user_features_permissions",
        ""
      );
      moduleAccess = _.find(user_features_permissions, {
        feature_id: _.get(module, "id", 0),
      });
    } else {
      // if user level permission not exist then check permission role template wise
      const privileges = _.get(state, "auth.privileges", []);

      moduleAccess = _.find(privileges, {
        module_id: _.get(module, "id", 0),
      });
    }

    const permission: string = _.get(moduleAccess, "permission", "");

    if (
      permission === "Full" ||
      permission === "View Only" ||
      permission === "Add & Update Only"
    ) {
      return true;
    } else {
      return false;
    }
  }
};

/**
 * check field permission
 *
 * @param {string} moduleKey
 * @param {string} blockKey
 * @param {string} fieldKey
 * @returns {boolean}
 */
export const checkFieldPermission = (moduleKey: string, blockKey: string, fieldKey: string) => {
  const state = store.getState();
  const role = _.get(state, "auth.user.role.name", "");

  const overridePermissionCheck = JSON.parse(
    //@ts-ignore
    process.env.REACT_APP_OVERRIDE_ROLE_PERMISSION
  );

  if (
    role === "Organization" ||
    moduleKey == "" ||
    overridePermissionCheck === true
  ) {
    return true;
  }

  const packageModulesPermission = _.get(state, "company.package_modules", []);
  // const module = _.get(packageModulesPermission, moduleKey, null);
  const module = !_.isUndefined(packageModulesPermission[moduleKey])
    ? packageModulesPermission[moduleKey]
    : null;

  if (_.isEmpty(module)) return false;

  const subDetails = _.get(state, "company.subDetails", []);

  let permission_based_on = _.get(subDetails, "permission_based_on", "Role");
  let moduleAccess = "None";
  // check permission based on if it user based permission then apply user level permissions otherwise apply role level permissions
  if (permission_based_on.toLowerCase() === "user") {
    //&& !_.isEmpty(user_features_permissions)
    const user_features_permissions = _.get(
      state,
      "auth.user.user_features_permissions",
      ""
    );
    moduleAccess = _.find(user_features_permissions, {
      feature_id: _.get(module, "id", 0),
    });
  } else {
    // if user level permission not exist then check permission role template wise
    const privileges = _.get(state, "auth.privileges", []);

    moduleAccess = _.find(privileges, {
      module_id: _.get(module, "id", 0),
    });
  }

  const permission = _.get(moduleAccess, "permission", "");

  // if module permission None or not found then field permission is None
  if (permission === "" || permission === "None") {
    return false;
  }

  const blocks = _.get(module, "blocks", null);
  const block = _.get(blocks, blockKey, null);
  if (_.isEmpty(block)) return false; // If block not found then can't access it's fileds

  const fields = _.get(block, "fields", null);
  const field = _.get(fields, fieldKey, null);

  if (_.isEmpty(field)) return false; // If field not found then can't access it because that field desabled for the package

  // field exist mean allow access to this field
  return true;
};

/**
 * check export field permission
 *
 * @param {string} moduleKey
 * @param {string} fieldKey
 * @returns {boolean}
 */
export const checkExportFieldPermission = (moduleKey: string, fieldKey: string) => {
  const state = store.getState();
  const role = _.get(state, "auth.user.role.name", "");

  const overridePermissionCheck = JSON.parse(
    //@ts-ignore
    process.env.REACT_APP_OVERRIDE_ROLE_PERMISSION
  );

  if (
    role === "Organization" ||
    moduleKey == "" ||
    overridePermissionCheck === true
  ) {
    return true;
  }

  const packageModulesPermission = _.get(state, "company.package_modules", []);

  const module = !_.isUndefined(packageModulesPermission[moduleKey])
    ? packageModulesPermission[moduleKey]
    : null;

  if (_.isEmpty(module)) return false;

  const subDetails = _.get(state, "company.subDetails", []);

  let permission_based_on = _.get(subDetails, "permission_based_on", "Role");
  let moduleAccess = "None";

  // check permission based on if it user based permission then apply user level permissions otherwise apply role level permissions
  if (permission_based_on.toLowerCase() === "user") {
    const user_features_permissions = _.get(
      state,
      "auth.user.user_features_permissions",
      ""
    );
    moduleAccess = _.find(user_features_permissions, {
      feature_id: _.get(module, "id", 0),
    });
  } else {
    // if user level permission not exist then check permission role template wise
    const privileges = _.get(state, "auth.privileges", []);

    moduleAccess = _.find(privileges, {
      module_id: _.get(module, "id", 0),
    });
  }

  const permission = _.get(moduleAccess, "permission", "");

  // if module permission None or not found then field permission is None
  if (permission === "" || permission === "None") {
    return false;
  }

  const blocks = _.get(module, "blocks", null);
  let fields = {};
  if (!_.isEmpty(blocks)) {
    for (const block in blocks) {
      fields = { ...fields, ...blocks[block]?.fields };
    }
  }

  const field = _.get(fields, fieldKey, null);
  if (_.isEmpty(field)) return false; // If field not found then can't access it because that field desabled for the package

  // field exist mean allow access to this field
  return true;
};

/**
 * check package module permission
 *
 * @param {string} moduleKey
 * @param {string} action
 * @returns {boolean}
 */
export const checkPackageModulePermission = (
  moduleKey: string,
  action: string = "DEFAULT_FULL"
) => {
  const overridePermissionCheck = JSON.parse(
    //@ts-ignore
    process.env.REACT_APP_OVERRIDE_ROLE_PERMISSION
  );
  const state = store.getState();
  const role = _.get(state, "auth.user.role.name", "");

  if (
    role === "Organization" ||
    moduleKey == "" ||
    overridePermissionCheck === true
  ) {
    return true;
  }

  const packageModulesPermissionObj = _.get(
    state,
    "company.package_modules",
    []
  );

  // const module = _.get(packageModulesPermissionObj, moduleKey, null);
  const module = !_.isUndefined(packageModulesPermissionObj[moduleKey])
    ? packageModulesPermissionObj[moduleKey]
    : null;

  if (_.isEmpty(module)) {
    return false; // If module not found then can't access it
  }

  const privileges = _.get(state, "auth.privileges", []);
  const user_features_permissions = _.get(
    state,
    "auth.user.user_features_permissions",
    ""
  );

  let moduleAccess = "None";

  const subDetails = _.get(state, "company.subDetails", []);
  let permission_based_on = _.get(subDetails, "permission_based_on", "Role");
  // check if user level permission exist, if it is then check user level permission for module
  if (permission_based_on.toLowerCase() === "user") {
    // !_.isEmpty(user_features_permissions)
    moduleAccess = _.find(user_features_permissions, {
      feature_id: _.get(module, "id", 0),
    });
  } else {
    // if user level permission not exist then check permission role template wise
    moduleAccess = _.find(privileges, {
      module_id: _.get(module, "id", 0),
    });
  }

  const permission = _.get(moduleAccess, "permission", "");

  if (
    action === "DEFAULT_FULL" &&
    (permission === PERMISSION_RULES.FULL ||
      permission === PERMISSION_RULES.ADD_UPDATE_ONLY ||
      permission === PERMISSION_RULES.VIEW_ONLY)
  ) {
    return true;
  }
  if (action.toLowerCase() === "full" && permission === PERMISSION_RULES.FULL) {
    return true;
  }
  if (
    action.toLowerCase() === "delete" &&
    permission === PERMISSION_RULES.FULL
  ) {
    return true;
  }
  if (
    (action.toLowerCase() === "edit" || action.toLowerCase() === "add") &&
    (permission === PERMISSION_RULES.FULL ||
      permission === PERMISSION_RULES.ADD_UPDATE_ONLY)
  ) {
    return true;
  }
  if (
    action.toLowerCase() === "view" &&
    (permission === PERMISSION_RULES.FULL ||
      permission === PERMISSION_RULES.ADD_UPDATE_ONLY ||
      permission === PERMISSION_RULES.VIEW_ONLY)
  ) {
    return true;
  }
  return false;
};

/**
 * Array to string
 *
 * @param {object} obj
 * @param {any} path
 * @param {string} key
 * @returns {any}
 */
export const arrayToString = (obj: any, path: string, key: string) => {
  if (!_.isEmpty(obj)) {
    let localObj: any[] = [];
    (obj || []).forEach((el: any) => {
      let p = _.get(el, path, "");
      p = !_.isEmpty(p) ? p.trim() : "";
      if (!_.isEmpty(p)) {
        localObj.push(p);
      }
    });
    if (!_.isEmpty(localObj)) {
      localObj = localObj.filter((v, i, a) => a.indexOf(v) === i);
      return localObj.join(", ");
    }
  }
  return null;
};

/**
 * format currency
 *
 * @param {string} value
 * @param {string} symbol
 * @returns {string}
 */
export const formatCurrency = (value: any, symbol = null) => {
  return formatCurrencyWrapper(value, symbol);
};

/**
 * check block permission
 *
 * @param {string} moduleKey
 * @param {string} blockKey
 * @returns {boolean}
 */
export const checkBlockPermission = (moduleKey: string, blockKey: string) => {
  const state = store.getState();
  const role = _.get(state, "auth.user.role.name", "");

  const overridePermissionCheck = JSON.parse(
    //@ts-ignore
    process.env.REACT_APP_OVERRIDE_ROLE_PERMISSION
  );

  if (
    role === "Organization" ||
    moduleKey == "" ||
    overridePermissionCheck === true
  ) {
    return true;
  }

  const packageModulesPermission = _.get(state, "company.package_modules", []);
  // const module = _.get(packageModulesPermission, moduleKey, null);
  const module = !_.isUndefined(packageModulesPermission[moduleKey])
    ? packageModulesPermission[moduleKey]
    : null;

  if (_.isEmpty(module)) return false;

  const subDetails = _.get(state, "company.subDetails", []);

  let permission_based_on = _.get(subDetails, "permission_based_on", "Role");
  let moduleAccess = "None";
  // check permission based on if it user based permission then apply user level permissions otherwise apply role level permissions
  if (permission_based_on.toLowerCase() === "user") {
    //&& !_.isEmpty(user_features_permissions)
    const user_features_permissions = _.get(
      state,
      "auth.user.user_features_permissions",
      ""
    );
    moduleAccess = _.find(user_features_permissions, {
      feature_id: _.get(module, "id", 0),
    });
  } else {
    // if user level permission not exist then check permission role template wise
    const privileges = _.get(state, "auth.privileges", []);

    moduleAccess = _.find(privileges, {
      module_id: _.get(module, "id", 0),
    });
  }

  const permission = _.get(moduleAccess, "permission", "");

  // if module permission None or not found then field permission is None
  if (permission === "" || permission === "None") {
    return false;
  }

  const blocks = _.get(module, "blocks", null);
  const block = _.get(blocks, blockKey, null);
  if (_.isEmpty(block)) return false; // If block not found then can't access it's fileds

  // block exist mean allow access to this field
  return true;
};

/**
 * retail sell price
 *
 * @param {float} price
 * @param {float} costPrice
 * @returns {boolean}
 */
export const calculateRetailSellPrice = (price: number, costPrice: number) => {
  let cost = costPrice > 0 ? costPrice : 0;
  let retail_sell_price = cost * 1.5;

  if (price >= retail_sell_price) {
    return true;
  } else {
    return false;
  }
};

/**
 * get currency symbol
 *
 * @returns {string}
 */
export const getCurrencySymbol = () => {
  const state = store.getState();
  const crr_state = _.get(state, "company.companyBasicDetails.currency", {
    symbol_left: "",
    symbol_right: "",
  });
  let symbol = "$";
  if (!_.isEmpty(crr_state) && !_.isUndefined(crr_state)) {
    symbol = !_.isEmpty(crr_state.symbol_left) ? crr_state.symbol_left : symbol;
    symbol = !_.isEmpty(crr_state.symbol_right)
      ? crr_state.symbol_right
      : symbol;
  }
  return symbol;
};

/**
 * Filter amount
 * @param {string} value
 * @returns {string}
 */
export const filterAmount = (value: any) => {
  if (!_.isEmpty(value)) {
    /* eslint-disable */
    value = value.replace(/[^0-9\.]+/g, "");
    if (value == ".") {
      return "0.";
    }
    /* eslint-enable */
    return isNaN(value) ? numeral(0).format(APPCONFIG.MONETORY_FORMAT) : value;
  }
  return isNaN(parseFloat(value))
    ? numeral(0).format(APPCONFIG.MONETORY_FORMAT)
    : parseFloat(value);
};

/**
 * unique number generate
 *
 * @param {integer} length
 * @returns {number}
 */
export const uniqueNumberGenerator = (length = 10) => {
  let d = new Date().valueOf();
  let n = d.toString();
  let result = "";
  let p = 0;
  let chars = "0123456789";

  for (let i = length; i > 0; --i) {
    result +=
      i & 1 && n.charAt(p)
        ? n.charAt(p)
        : chars[Math.floor(Math.random() * chars.length)];
    if (i & 1) p++;
  }
  return result;
};

/**
 * parse query string
 *
 * @param {string} queryString
 * @returns {string}
 */
export const parseQueryString = (queryString: string) => {
  var query = {};
  var pairs = (queryString[0] === "?"
    ? queryString.substr(1)
    : queryString
  ).split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    //@ts-ignore
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
};

/**
 * parse dashboard date query string
 *
 * @param {string} queryString
 * @param {object} payload
 * @returns {string}
 */
export const parseDashboardDateQueryString = async (queryString: string, payload: any) => {
  console.log("payload :>> ", payload);
  const from = payload.from;
  const to = payload.to;
  queryString += _.isEmpty(queryString)
    ? `fetch[duration][from]=${from}`
    : `&fetch[duration][from]=${to}`;
  queryString += `&fetch[duration][to]=${to}`;
  return queryString;
};

/**
 * sortig week days
 *
 * @param {array} unsortedDays
 * @returns {array}
 */
export const sortWeekDays = (unsortedDays: string[]) => {
  let daysSort = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let sortedDays: string[] = [];
  daysSort.forEach((value) => {
    if (unsortedDays.includes(value)) {
      sortedDays.push(value);
    }
  });
  return sortedDays;
};

/**
 * Truncate the string into word limit
 *
 * @param  String string to be truncated
 * @param  Integer number of words to be displayed (Default is 40)
 * @return Truncate string if string exceeded total string's word limit
 */
export const wordsLimit = (str: string, limit: number) => {
  if (!_.isEmpty(str)) {
    const tmpLimit = _.isInteger(limit) ? limit : 40;
    const totalWords = str.split("").length;

    if (totalWords > tmpLimit) {
      return (
        str
          .split(" ")
          .splice(0, tmpLimit)
          .join(" ") + "..."
      );
    }
    return str;
  }

  return str;
};

/**
 * Get Section key by Page key
 *
 * @param  String pageKey
 * @return Section key
 */
export const getSectionKeyByPageKey = (pageKey = "") => {
  let tmpPageKey = "";

  _.forEach(WIZARD_PAGES, (pages: any, key: string) => {
    const page = _.find(pages, { page_key: pageKey });
    // Find page key
    if (!_.isEmpty(page)) {
      tmpPageKey = key;
      //return false;
    }
  });

  return tmpPageKey;
};

/**
 * get wizard video content
 *
 * @param {string} pageKey
 * @returns {object}
 */
export const getWizardVideoContent = (pageKey = "") => {
  const state = store.getState();
  const wizardContents = _.get(
    state,
    "company.companyBasicDetails.wizard_contents",
    []
  );
  return _.find(wizardContents, { page_key: pageKey });
};

/**
 * Get the wizard page object based on page key.
 *
 * @param  String Page key
 * @param  String Which page Object to be return i.e. current | next | previous
 * @param  Object vary
 * @return Object with page details
 */
export const getWizardPageObject = (
  pageKey = "",
  getPage = "current",
  options: any = {}
) => {
  // Options explained
  // - checkEndOfSection -> Set next page as table of content, mainly use for permission based internal pages, only occurred if next page is blank

  const state = store.getState();

  // Get permission updated wizard pages
  const updatedWizardPages = _.get(
    state,
    "setupWizard.WIZARD_PAGES",
    WIZARD_PAGES
  );

  let pageObject = {};

  // Get the section
  const currentSection = getSectionKeyByPageKey(pageKey);
  let nextPreviousPage = pageKey; // getPage = "current"

  // Get page current, next or previous
  if (getPage === "next") {
    nextPreviousPage = _.get(
      updatedWizardPages,
      `${currentSection}.${pageKey}.settings.next_page`,
      ""
    );
  } else if (getPage === "previous") {
    nextPreviousPage = _.get(
      updatedWizardPages,
      `${currentSection}.${pageKey}.settings.previous_page`,
      ""
    );
  }

  // Get page Object
  const currentPageObject = _.get(
    updatedWizardPages,
    `${currentSection}.${pageKey}`,
    {}
  );

  if (!_.isEmpty(currentPageObject)) {
    const currentSection = getSectionKeyByPageKey(nextPreviousPage);

    const nextPage = _.get(
      updatedWizardPages,
      `${currentSection}.${nextPreviousPage}.settings.next_page`,
      ""
    );

    // Update page object
    pageObject = {
      currentSection: currentSection,
      currentPage: nextPreviousPage,
      nextPage: nextPage,
      previousPage: _.get(
        updatedWizardPages,
        `${currentSection}.${nextPreviousPage}.settings.previous_page`,
        ""
      ),
    };

    // Update the object and notify section ended
    if (nextPage === "" && (options.checkEndOfSection || false) === true) {
      pageObject = {
        currentSection: WIZARD_PAGES_KEY.HOME,
        currentPage: WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE,
        nextPage: "",
        previousPage: WIZARD_PAGES_KEY.SETUP_GUIDE_PAGE,
        markSectionAsCompleted: true,
      };
    }
  }

  return pageObject;
};

/**
 * get wizard permission
 *
 * @returns {boolean}
 */
export const getWizardPermissions = () => {
  let wizardPages = WIZARD_PAGES;

  // Set Product access key based on industry
  let productModuleKey = PACKAGEFEATUREKEYS.product.key;
  let productPricingBlockKey =
    PACKAGEFEATUREKEYS.product.block_keys.product_pricing.key;
  let productPricingFieldKey =
    PACKAGEFEATUREKEYS.product.block_keys.product_pricing.field_keys.list_price;
  const industry = Storage.loadDomainIndustry();
  if (industry === "food") {
    productModuleKey = PACKAGEFEATUREKEYS.food_products.key;
    productPricingBlockKey =
      PACKAGEFEATUREKEYS.food_products.block_keys.food_product_pricing.key;
    productPricingFieldKey =
      PACKAGEFEATUREKEYS.food_products.block_keys.food_product_pricing
        .field_keys.food_product_list_price;
  } else if (industry === "service") {
    productModuleKey = PACKAGEFEATUREKEYS.service_products.key;
    productPricingBlockKey =
      PACKAGEFEATUREKEYS.service_products.block_keys.service_product_pricing
        .key;
    productPricingFieldKey =
      PACKAGEFEATUREKEYS.service_products.block_keys.service_product_pricing
        .field_keys.service_product_list_price;
  }

  let tmpPages = _.cloneDeep(wizardPages);
  wizardPages = _.set(
    tmpPages,
    "home.table_of_contents_page.settings.setup_modules[6].module_key",
    productModuleKey
  );

  // User/Employee Setup permissions - - - -  - - - - - - - - - STARTS - - - - - - - - - - - - - - - -
  const userSetupActualPages = 3;
  let userEmployeeModuleKey = PACKAGEFEATUREKEYS.users.key;
  let userSetupTotalPages = userSetupActualPages;

  if (industry === "service") {
    userEmployeeModuleKey = PACKAGEFEATUREKEYS.employees.key;

    // Update the key of User
    let tmpPages = _.cloneDeep(wizardPages);
    wizardPages = _.set(
      tmpPages,
      "home.table_of_contents_page.settings.setup_modules[4].module_key",
      userEmployeeModuleKey
    );
  }
  const userSetupAccess = checkPackageModulePermission(
    userEmployeeModuleKey,
    "edit"
  );
  if (userSetupAccess === false) {
    wizardPages = _.omit(wizardPages, [
      `${WIZARD_PAGES_KEY.USER_SETUP}.${WIZARD_PAGES_KEY.USER_EDIT}`,
    ]);
    userSetupTotalPages = userSetupTotalPages - 1;
  }

  // Remove from wizard pages
  if (userSetupActualPages !== userSetupTotalPages) {
    wizardPages = updateWizardPermissionSection(
      wizardPages,
      WIZARD_PAGES_KEY.USER_SETUP,
      userSetupTotalPages
    );
  }
  // User Setup permissions - - - -  - - - - - - - - - ENDS - - - - - - - - - - - - - - - - -

  // Category Setup permissions - - - -  - - - - - - - - - STARTS - - - - - - - - - - - - - - - -
  const categorySetupActualPages = 3;
  let categorySetupTotalPages = categorySetupActualPages;
  const categorySetupAccess = checkPackageModulePermission(
    PACKAGEFEATUREKEYS.category.key,
    "edit"
  );
  if (categorySetupAccess === false) {
    wizardPages = _.omit(wizardPages, [
      `${WIZARD_PAGES_KEY.CATEGORY_SETUP}.${WIZARD_PAGES_KEY.CATEGORY_EDIT}`,
    ]);
    categorySetupTotalPages = categorySetupTotalPages - 1;
  }

  // Remove from wizard pages
  if (categorySetupActualPages !== categorySetupTotalPages) {
    wizardPages = updateWizardPermissionSection(
      wizardPages,
      WIZARD_PAGES_KEY.CATEGORY_SETUP,
      categorySetupTotalPages
    );
  }
  // Category Setup permissions - - - -  - - - - - - - - - ENDS - - - - - - - - - - - - - - - - -

  // Company App Settings permissions - - - -  - - - - - - - - - STARTS - - - - - - - - - - - - - - - -
  const companySettingActualPages = 6;
  let companySettingTotalPages = companySettingActualPages;

  // Remove company Product Setting View and Edit Page
  const productAccess = checkPackageModulePermission(productModuleKey, "edit");
  const priceFieldAccess = checkPackageModulePermission(
    PACKAGEFEATUREKEYS.price_fields.key,
    "edit"
  );
  if (productAccess === false && priceFieldAccess === false) {
    wizardPages = _.omit(wizardPages, [
      `${WIZARD_PAGES_KEY.COMPANY_APP_SETTING}.${WIZARD_PAGES_KEY.PRODUCT_SETTINGS_VIEW}`,
      `${WIZARD_PAGES_KEY.COMPANY_APP_SETTING}.${WIZARD_PAGES_KEY.PRODUCT_SETTINGS_EDIT}`,
    ]);
    companySettingTotalPages = companySettingTotalPages - 2;
  }

  // Remove text notification
  const sendReceiptAccess = checkPackageModulePermission(
    PACKAGEFEATUREKEYS.send_receipt.key,
    "edit"
  );
  const notificationAccess = checkPackageModulePermission(
    PACKAGEFEATUREKEYS.notification.key,
    "edit"
  );
  if (sendReceiptAccess === false && notificationAccess === false) {
    wizardPages = _.omit(wizardPages, [
      // Text notification
      `${WIZARD_PAGES_KEY.COMPANY_APP_SETTING}.${WIZARD_PAGES_KEY.TEXT_NOTIFICATIONS_VIEW}`,
      `${WIZARD_PAGES_KEY.COMPANY_APP_SETTING}.${WIZARD_PAGES_KEY.TEXT_NOTIFICATIONS_EDIT}`,

      // Email notification
      `${WIZARD_PAGES_KEY.COMPANY_APP_SETTING}.${WIZARD_PAGES_KEY.EMAIL_NOTIFICATIONS_VIEW}`,
      `${WIZARD_PAGES_KEY.COMPANY_APP_SETTING}.${WIZARD_PAGES_KEY.EMAIL_NOTIFICATIONS_EDIT}`,
    ]);

    companySettingTotalPages = companySettingTotalPages - 4;
  }

  // Remove text and email notification
  if (companySettingActualPages !== companySettingTotalPages) {
    wizardPages = updateWizardPermissionSection(
      wizardPages,
      WIZARD_PAGES_KEY.COMPANY_APP_SETTING,
      companySettingTotalPages
    );
  }

  // Company App Settings permissions - - - -  - - - - - - - - - ENDS - - - - - - - - - - - - - - - - -

  // Store App Settings permissions - - - -  - - - - - - - - - STARTS - - - - - - - - - - - - - - - -
  const storeSettingActualPages = 10;
  let storeSettingTotalPages = storeSettingActualPages;

  // Remove discount
  const discountsAccess = checkPackageModulePermission(
    PACKAGEFEATUREKEYS.discounts.key,
    "edit"
  );
  if (discountsAccess === false) {
    wizardPages = _.omit(wizardPages, [
      `${WIZARD_PAGES_KEY.STORE_APP_SETTING}.${WIZARD_PAGES_KEY.DISCOUNTS_VIEW}`,
      `${WIZARD_PAGES_KEY.STORE_APP_SETTING}.${WIZARD_PAGES_KEY.DISCOUNTS_EDIT}`,
    ]);
    storeSettingTotalPages = storeSettingTotalPages - 2;
  }

  // Remove Payment Methods
  const paymentOptionAccess = checkPackageModulePermission(
    PACKAGEFEATUREKEYS.paymentOption.key,
    "edit"
  );
  const giftCardsAccess = checkPackageModulePermission(
    PACKAGEFEATUREKEYS.gift_cards.key,
    "edit"
  );
  if (paymentOptionAccess === false && giftCardsAccess === false) {
    wizardPages = _.omit(wizardPages, [
      `${WIZARD_PAGES_KEY.STORE_APP_SETTING}.${WIZARD_PAGES_KEY.PAYMENT_METHODS_VIEW}`,
      `${WIZARD_PAGES_KEY.STORE_APP_SETTING}.${WIZARD_PAGES_KEY.PAYMENT_METHODS_EDIT}`,
    ]);
    storeSettingTotalPages = storeSettingTotalPages - 2;
  }

  // Remove Signature Settings
  const paymentSignatureAccess = checkPackageModulePermission(
    PACKAGEFEATUREKEYS.payment_signature.key,
    "edit"
  );
  if (paymentSignatureAccess === false) {
    wizardPages = _.omit(wizardPages, [
      `${WIZARD_PAGES_KEY.STORE_APP_SETTING}.${WIZARD_PAGES_KEY.SIGNATURE_VIEW}`,
      `${WIZARD_PAGES_KEY.STORE_APP_SETTING}.${WIZARD_PAGES_KEY.SIGNATURE_EDIT}`,
    ]);
    storeSettingTotalPages = storeSettingTotalPages - 2;
  }

  // Remove tips Settings
  const tipsAccess = checkPackageModulePermission(
    PACKAGEFEATUREKEYS.tips.key,
    "edit"
  );
  if (tipsAccess === false) {
    wizardPages = _.omit(wizardPages, [
      `${WIZARD_PAGES_KEY.STORE_APP_SETTING}.${WIZARD_PAGES_KEY.TIPS_VIEW}`,
      `${WIZARD_PAGES_KEY.STORE_APP_SETTING}.${WIZARD_PAGES_KEY.TIPS_EDIT}`,
    ]);
    storeSettingTotalPages = storeSettingTotalPages - 2;
  }

  // Remove List Prices
  const productPricingBlockKeyAccess = checkFieldPermission(
    productModuleKey,
    productPricingBlockKey,
    productPricingFieldKey
  );
  if (productPricingBlockKeyAccess === false) {
    wizardPages = _.omit(wizardPages, [
      `${WIZARD_PAGES_KEY.STORE_APP_SETTING}.${WIZARD_PAGES_KEY.LIST_PRICES_VIEW}`,
      `${WIZARD_PAGES_KEY.STORE_APP_SETTING}.${WIZARD_PAGES_KEY.LIST_PRICES_EDIT}`,
    ]);
    storeSettingTotalPages = storeSettingTotalPages - 2;
  }

  // Reset pages
  if (storeSettingActualPages !== storeSettingTotalPages) {
    wizardPages = updateWizardPermissionSection(
      wizardPages,
      WIZARD_PAGES_KEY.STORE_APP_SETTING,
      storeSettingTotalPages
    );
  }

  // Store App Settings permissions - - - -  - - - - - - - - - ENDS - - - - - - - - - - - - - - - - -

  // Categories permissions - - - -  - - - - - - - - - STARTS - - - - - - - - - - - - - - - -
  // Remove category section
  const categoryAccess = checkPackageModulePermission(
    PACKAGEFEATUREKEYS.category.key,
    "edit"
  );
  if (categoryAccess === false) {
    wizardPages = _.omit(wizardPages, [`${WIZARD_PAGES_KEY.CATEGORY_SETUP}`]);
  }

  // Categories permissions - - - -  - - - - - - - - - ENDS - - - - - - - - - - - - - - - -

  // Store Setup permissions - - - -  - - - - - - - - - STARTS - - - - - - - - - - - - - - - -
  // Remove Store Setup section
  const storeSetupAccess = checkPackageModulePermission(
    PACKAGEFEATUREKEYS.stores.key,
    "edit"
  );
  if (storeSetupAccess === false) {
    wizardPages = _.omit(wizardPages, [`${WIZARD_PAGES_KEY.STORE_SETUP}`]);
  }

  // Store Setup permissions - - - -  - - - - - - - - - ENDS - - - - - - - - - - - - - - - -

  // Products permissions - - - -  - - - - - - - - - STARTS - - - - - - - - - - - - - - - -
  // Remove Store Setup section
  if (productAccess === false) {
    wizardPages = _.omit(wizardPages, [`${WIZARD_PAGES_KEY.PRODUCT_SETUP}`]);
  }

  // Products permissions - - - -  - - - - - - - - - ENDS - - - - - - - - - - - - - - - -

  return wizardPages;
};

/**
 * update wizard permission section
 *
 * @param {integer} _wizardPages
 * @param {string} sectionKey
 * @param {integer} totalPages
 * @returns {string}
 */
const updateWizardPermissionSection = (
  _wizardPages: any,
  sectionKey: string,
  totalPages: number
) => {
  let wizardPages = _wizardPages;

  // Update page numbers
  let pageNo = 1;

  // Reset page_no for all internal pages
  _.forEach(wizardPages[sectionKey], (value, key) => {
    wizardPages = _.set(
      _.cloneDeep(wizardPages),
      `${sectionKey}.${key}.page_no`,
      pageNo
    );
    pageNo++;
  });

  // Reset next previous pages for all internal pages
  let keyIndex = 1;
  _.forEach(wizardPages[sectionKey], (value, key) => {
    // Get next and previous pages
    let pagesKeys = Object.keys(wizardPages[sectionKey]);
    const currentPageIndex = pagesKeys.indexOf(key);
    let nextKey = _.get(pagesKeys, `[${currentPageIndex + 1}]`, "");
    let previousKey = _.get(pagesKeys, `[${currentPageIndex - 1}]`, "");

    if (keyIndex === 1) {
      previousKey = WIZARD_PAGES_KEY.TABLE_OF_CONTENTS_PAGE;
    }

    // Set next and previous page dynamically
    wizardPages = _.set(
      _.cloneDeep(wizardPages),
      `${sectionKey}.${key}.settings.next_page`,
      nextKey
    );
    wizardPages = _.set(
      _.cloneDeep(wizardPages),
      `${sectionKey}.${key}.settings.previous_page`,
      previousKey
    );
    keyIndex++;
  });

  // Set total wizard pages
  wizardPages = _.set(
    _.cloneDeep(wizardPages),
    `${sectionKey}.explicit_total_pages`,
    totalPages
  );

  return wizardPages;
};

/**
 * It's help to prepare the open cash drawer payload data for star printer into all industries
 *
 * @returns {object}
 */
export const prepareOpenCashDrawerData = () => {
  let payloadQueue = {};
  const reduxState = store.getState();
  let companyDetail = _.get(reduxState, "company.companyBasicDetails", {});
  let printerSettingDetails = _.get(
    reduxState,
    "printerSetting.printerSettingDetails",
    {}
  );
  if (!_.isEmpty(companyDetail)) {
    let currDate = moment.tz(companyDetail.timezone.name).format("MM-DD-YYYY");
    let currTime = moment
      .tz(companyDetail.timezone.name)
      .format("hh:mm a")
      .toString()
      .toUpperCase();
    payloadQueue = {
      printer_queues: {
        mac_address: _.get(printerSettingDetails, "printer.mac_address", ""),
        source: "Web",
        unique_id: 1,
        print_job: `[align: centre][font: a]\\\r\n${companyDetail.name}\r\n${companyDetail.title_tag}\r\n[align: left]\\\r\n[column: left ${currDate}; \t\tright ${currTime}]\r\n[feed]\\\r\n[align: centre]\\\r\nOpen Cash Drawer Test Successful\r\n[feed]\\\r\n[align: centre]\\\r\nThank you for using our services.\r\n[feed]\\\r\n[cut: feed; partial]\\`,
        drawer_status: "drawer-end",
      },
    };
  }

  return payloadQueue;
};

/**
 * Check permission for kitchen receipt access
 *
 * @param {boolean} strictCheck
 * @returns {boolean}
 */
export const checkKitchenReceiptAcess = (strictCheck = false) => {
  const reduxState = store.getState();
  const customSettingData = _.get(
    reduxState,
    "customSettings.customSettingData",
    []
  );
  const kitchenSettings = _.find(
    customSettingData,
    (v) => v && v.setting_key === "KITCHEN_RECEIPT"
  );
  const kitchenReceiptPermission = checkPackageModulePermission(
    PACKAGEFEATUREKEYS.kitchen_receipt.key
  );
  const hasAccess =
    kitchenReceiptPermission &&
    !_.isEmpty(kitchenSettings) &&
    kitchenSettings.status == "ON";
  if (strictCheck) {
    return hasAccess && kitchenSettings.value.printWhenReceiptPrinted;
  } else if (hasAccess) {
    return true;
  } else {
    return false;
  }
};

/**
 * get server status
 *
 * @returns {string}
 */
export const getServerStatus = () => {
  const status = Storage.loadServerStatus();
  if (status) {
    return status;
  } else {
    const state = store.getState();
    const environment = _.get(state, "company.subDetails.environment", "");
    return environment === "Development" ? "DS" : "Production";
  }
};

/**
 * check for Loyalty program
 *
 * @param {array} loyalty_program_products
 * @param {object} selectedCustomer
 * @returns {boolean}
 */
export const checkLoyaltyProgramExists = (
  loyalty_program_products: any[],
  selectedCustomer: any = {}
) => {
  let exists = false;
  for (let loyalty_program_product of loyalty_program_products) {
    if (
      !_.isUndefined(loyalty_program_product.loyalty_program) &&
      !_.isEmpty(loyalty_program_product.loyalty_program) &&
      (_.isEmpty(selectedCustomer) ||
        (!_.isEmpty(selectedCustomer) &&
          loyalty_program_product.loyalty_program.required_points <=
          selectedCustomer.loyalty_points))
    ) {
      exists = true;
      break;
    }
  }
  return exists;
};

/**
 * Match LP product
 *
 * @param {object} loyaltyProgram
 * @param {object} customerLoyaltyPoints
 * @param {array} prodData
 * @returns {any}
 */
const matchLoyaltyProduct = (
  loyaltyProgram: any,
  customerLoyaltyPoints: any,
  prodData: any
) => {
  let matchProduct = false;
  let exists = false;
  if (loyaltyProgram.discount_on.toLowerCase() === "order") {
    return true;
  }
  if (
    !_.isUndefined(loyaltyProgram.loyalty_program_products) &&
    !_.isEmpty(loyaltyProgram.loyalty_program_products)
  ) {
    for (let lpproduct of loyaltyProgram.loyalty_program_products) {
      if (
        loyaltyProgram.reward_item.toLowerCase() !== "by category" &&
        lpproduct.product_id === prodData.product_id
      ) {
        matchProduct = true;
      } else if (
        loyaltyProgram.reward_item.toLowerCase() === "by category" &&
        lpproduct.category_id === prodData.category_id
      ) {
        matchProduct = true;
      }
    }
  }
  if (
    matchProduct &&
    !_.isUndefined(loyaltyProgram.required_points) &&
    loyaltyProgram.required_points <= customerLoyaltyPoints
  ) {
    exists = true;
  }
  return exists;
};

/**
 * match loyalty point from program
 *
 * @param {array} loyaltyPrograms
 * @param {object} customerLoyaltyPoints
 * @param {object} prodData
 * @returns
 */
export const matchLoyaltyPointFromProgram = (
  loyaltyPrograms: any,
  customerLoyaltyPoints: any,
  prodData: any
) => {
  let exists = false;
  if (_.isArray(loyaltyPrograms)) {
    for (let loyaltyProgram of loyaltyPrograms) {
      exists = matchLoyaltyProduct(
        loyaltyProgram,
        customerLoyaltyPoints,
        prodData
      );
      if (exists === true) {
        break;
      }
    }
  } else {
    exists = matchLoyaltyProduct(
      loyaltyPrograms,
      customerLoyaltyPoints,
      prodData
    );
  }
  return exists;
};

export default {
  requireAll,
  checkModulePermission,
  formatPhone,
  formatDate,
  convertToUTCDate,
  checkCustomSetting,
  formatNumber,
  getImageUrl,
  checkOptionSetting,
  checkModulePermissionCRM,
  checkFieldPermission,
  checkPackageModulePermission,
  canAccessPackageModule,
  dayAgo,
  arrayToString,
  formatCurrency,
  convertDateToTimeZone,
  calculateRetailSellPrice,
  getCurrencySymbol,
  filterAmount,
  uniqueNumberGenerator,
  parseQueryString,
  parseDashboardDateQueryString,
  convertStartDateToUTC,
  convertEndDateToUTC,
  convertStartDateToUTCCRM,
  convertEndDateToUTCCRM,
  getHeaders,
  wordsLimit,
  getSectionKeyByPageKey,
  getWizardVideoContent,
  getWizardPageObject,
  getWizardPermissions,
  prepareOpenCashDrawerData,
  checkKitchenReceiptAcess,
  getServerStatus,
  checkLoyaltyProgramExists,
  matchLoyaltyPointFromProgram,
};
