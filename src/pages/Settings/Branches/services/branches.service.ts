import filter from "lodash/filter";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import omit from "lodash/omit";
import API_URLS from 'constants/apiEndpoints';
import axios from "helpers/api";
import { createQuery } from "helpers/utils";
// import { store } from "../../../store/configureStore";

const _ = { omit, get, isEmpty, filter };

const ERR_MSG_SOMETHING_WENT_WRONG =
  "Something went wrong, please try again later";

/**
 * Fetch Branch
 *
 * @param {any} payload
 * @returns
 */
export async function getBranches(payload: any) {
  let queryString = await createQuery(payload.meta);
  console.log("queryString", queryString);
  const url = API_URLS.branch + "?" + queryString;

  return axios.get(url).then(response => {
    if (response.status === 200) {
      return {
        message: "Success",
        success: true,
        data: _.get(response, "data.data", [])
      };
    } else {
      return {
        success: false,
        message: ERR_MSG_SOMETHING_WENT_WRONG,
        data: "",
        error: ""
      };
    }
  });
}

//
/**
 * Fetch All Branch
 *
 * @param {any} payload
 * @returns {any}
 */
export async function getAllBranch(payload: any) {
  let metaPayload = payload.meta;

  let keyword = "";
  let userType = _.get(metaPayload, "auth.user.user_type", "");
  let branchId = _.get(metaPayload, "auth.user.user_branches", []).map(
    (v: any) => v.branch_id
  );

  if (!_.isEmpty(metaPayload.searchValue)) {
    keyword = metaPayload.searchValue;
  }
  if (userType === "Sales Agent") {
    return {
      message: "Success",
      success: true,
      data: {}
    };
  }

  metaPayload = { filters: [], fields: _.get(metaPayload, "fields", {}) };

  metaPayload.filters = _.filter(metaPayload.filters || [], function (o) {
    return o.field_name !== "id";
  });

  if (userType !== "Corporate") {
    if (!_.isEmpty(branchId)) {
      metaPayload.filters.push({
        field_type: "number",
        field_name: "id",
        field_value: branchId.join(),
        display_value: branchId.join()
      });
    }
  }

  let queryString = await createQuery(metaPayload);
  console.log("Payload", queryString);
  const url = `${API_URLS.branch}/all?${queryString}&keyword=${keyword}`;
  // const url = `${API_URLS.branch}/all`;

  return axios.get(url).then(response => {
    if (response.status === 200) {
      return {
        message: "Success",
        success: true,
        data: response.data
      };
    } else {
      return {
        success: false,
        message: ERR_MSG_SOMETHING_WENT_WRONG,
        data: "",
        error: ""
      };
    }
  });
}

//
/**
 * Fetch Branch by ID
 *
 * @param {any} payload
 * @returns {any}
 */
export function getBranchById(payload: any) {
  const url = `/${API_URLS.branch}/${payload}`;
  return axios.get(url).then(response => {
    if (response.status === 200) {
      return {
        message: "Success",
        success: true,
        data: response.data
      };
    } else {
      return {
        success: false,
        message: ERR_MSG_SOMETHING_WENT_WRONG,
        data: "",
        error: ""
      };
    }
  });
}

/**
 * Create Branch
 *
 * @param {any} payload
 * @returns {any}
 */
export function createBranch(payload: any) {
  const url = `/${API_URLS.branch}`;
  return axios.post(url, { ...payload }).then(response => {
    if (response.status === 200) {
      return {
        message: "Success",
        success: true,
        data: response.data.data
      };
    } else {
      return {
        success: false,
        message: ERR_MSG_SOMETHING_WENT_WRONG,
        data: response,
        error: true
      };
    }
  })
}

//
/**
 * Update Branch details
 *
 * @param {any} payload
 * @returns {any}
 */
export function updateBranch(payload: any) {
  const url = `/${API_URLS.branch}/${payload.branch.id}`;
  const branch = _.omit(payload.branch, "id");
  return axios.put(url, { branch: { ...branch } }).then(response => {
    if (response.status === 200) {
      return {
        message: "Success",
        success: true,
        data: response.data.data
      };
    } else {
      return {
        success: false,
        message: ERR_MSG_SOMETHING_WENT_WRONG,
        data: response,
        error: ""
      };
    }
  });
}

/**
 * Delete Branch
 *
 * @param {any} payload
 * @returns {any}
 */
export function deleteBranch(payload: any) {
  console.log(payload);
  const url = `/${API_URLS.branch}/${payload.branch.id}?new_branch_id=${payload.branch.new_branch_id}`;
  return axios.delete(url).then(response => {
    if (response.status === 200) {
      return {
        message: "Success",
        success: true,
        data: response.data.data
      };
    } else {
      return {
        success: false,
        message: ERR_MSG_SOMETHING_WENT_WRONG,
        data: response,
        error: ""
      };
    }
  });
}
