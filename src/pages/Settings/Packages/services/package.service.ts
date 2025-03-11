import omit from "lodash/omit";
import get from "lodash/get";
import API_ENDPOINTS from '../../../../constants/apiEndpoints';
import axios from "../../../../core/helpers/api";
import { createQuery } from "../../../../core/helpers/utils";

const ERR_MSG_SOMETHING_WENT_WRONG =
  "Something went wrong, please try again later";

const _ = { omit, get };
/**
 * Fetch main package
 *
 * @param {object} payload
 * @returns {object}
 */
export async function getMainPackage(payload: any) {
  let queryString = await createQuery(payload);
  const url = API_ENDPOINTS.packages + "?" + queryString;

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
 * Fetch main package by id
 * @param {*} payload
 * @returns
 */
export async function getMainPackageById(payload: any) {
  let queryString = await createQuery(payload);
  const url = `/${API_ENDPOINTS.packages}/${payload.id}?${queryString}`;
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
 * create package
 *
 * @param {object} payload
 * @returns {object}
 */
export function createPackage(payload: any) {
  const url = `/${API_ENDPOINTS.packages}`;
  return axios.post(url, { ...payload }).then(response => {
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
 *  Update package
 *
 * @param {object} payload
 * @returns {object}
 */
export function updatePackage(payload: any) {
  const url = `/${API_ENDPOINTS.packages}/${payload.package_info.id}`;
  const data = omit(payload.package_info, "id");

  return axios.put(url, { package_info: { ...data } }).then(response => {
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
 * Delete package
 *
 * @param {object} payload
 * @returns
 */
export function deletePackage(payload: any) {
  const url = `/${API_ENDPOINTS.packages}/${payload}`;
  return axios.delete(url).then(response => {
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
 * Fetch all package fields
 *
 * @param {object} payload
 * @returns {object}
 */
export async function getPackageFields(payload: any) {
  let queryString = await createQuery(payload);
  const url = `/${API_ENDPOINTS.packages}/feature-fields/${payload.id}?${queryString}`;
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

/**
 * Fetch industry
 *
 * @param {object} payload
 * @returns
 */
export async function getIndustry(payload: any) {
  let queryString = await createQuery(payload);
  const url = API_ENDPOINTS.industry + "?" + queryString;

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

/**
 * Fetch all packages
 *
 * @param {object} payload
 * @returns {object}
 */
export async function getIndustryPackages(payload: any) {
  let queryString = await createQuery(payload);
  const url = `${API_ENDPOINTS.industryPackages}/${payload.id}?${queryString}`;
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

/**
 * Create package role
 *
 * @param {object} payload
 * @returns
 */
export async function createPackageRole(payload: any) {
  const url = `/${API_ENDPOINTS.package_roles}`;
  return axios.post(url, { package_role: { ...payload } }).then(response => {
    if (response.status === 200) {
      return {
        message: "Success",
        success: true,
        data: _.get(response, "data.data", {})
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
 * Get package list
 *
 * @param {object} payload
 * @returns {object}
 */
export async function getPackageRoleList(payload: any) {
  let queryString = await createQuery(payload);
  const url = API_ENDPOINTS.package_roles + "?" + queryString;

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

/**
 * Delete package role
 *
 * @param {object} payload
 * @returns {object}
 */
export function deletePackageRole(payload: any) {
  const url = `/${API_ENDPOINTS.package_roles}/${payload}`;
  return axios.delete(url).then(response => {
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
 * Delete package role mapping
 *
 * @param {object} payload
 * @returns {object}
 */
export function onDeletePackageRoleMapping(payload: any) {
  const url = `${API_ENDPOINTS.packages}/role-permission/${payload}`;
  return axios.delete(url).then(response => {
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
 * Edit package role permission create
 *
 * @param {object} payload
 * @returns {object}
 */
export function onEditPackageRolePermissionCreate(payload: any) {
  const url = `/${API_ENDPOINTS.packages}/role-permission/${payload.package_id}`;
  return axios.post(url, { ...payload }).then(response => {
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
 * Get package role permission
 *
 * @param {object} payload
 * @returns {object}
 */
export async function onGetPackageRolePermission(payload: any) {
  let queryString = await createQuery(payload);

  const url = `/${API_ENDPOINTS.package_roles}/package-role-mapping?${queryString}`;
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
