import filter from "lodash/filter";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import omit from "lodash/omit";
import API_URLS from 'constants/apiEndpoints';
import axios from "helpers/api";
import { createQuery } from "helpers/utils";

const _ = { omit, get, isEmpty, filter };

const ERR_MSG_SOMETHING_WENT_WRONG =
  "Something went wrong, please try again later";

/**
 * Fetch sales agent
 *
 * @param {object} payload
 * @returns {object}
 */
export async function getSalesAgent(payload: any) {
  let queryString = await createQuery(payload.meta);
  const url = API_URLS.salesAgent + "?" + queryString;

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
 * get all sales agent
 *
 * @param {object} payload
 * @returns {object}
 */
export async function getAllSalesAgent(payload: any) {
  let keyword = "";
  let userType = _.get(payload, "auth.user.user_type", "");
  let salesAgent = _.get(payload, "auth.user.user_sales_agents", []).map(
    (v: any) => v.sales_agent_id
  );
  if (!_.isEmpty(payload.searchValue)) {
    keyword = payload.searchValue;
  }

  if (userType === "Branch") {
    return {
      message: "Success",
      success: true,
      data: {}
    };
  }

  payload = { filters: [], fields: payload.fields };

  payload.filters = _.filter(payload.filters || [], function (o) {
    return o.field_name !== "id";
  });

  if (userType !== "Corporate") {
    if (!_.isEmpty(salesAgent)) {
      payload.filters.push({
        field_type: "number",
        field_name: "id",
        field_value: salesAgent.join(),
        display_value: salesAgent.join()
      });
    }
  }

  let queryString = await createQuery(payload);
  const url = `${API_URLS.salesAgent}/all?${queryString}&keyword=${keyword}`;
  // const url = `${API_URLS.salesAgent}/all`;

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
 * Fetch sales agent by id
 *
 * @param {object} payload
 * @returns
 */
export function getSalesAgentById(payload: any) {
  const url = `/${API_URLS.salesAgent}/${payload}`;
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
 * create sales agent
 *
 * @param {object} payload
 * @returns {object}
 */
export function createSalesAgent(payload: any) {
  const url = `/${API_URLS.salesAgent}`;
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
 * Update sales agent details
 *
 * @param {object} payload
 * @returns {object}
 */
export function updateSalesAgent(payload: any) {
  const url = `/${API_URLS.salesAgent}/${payload.sales_agent.id}`;
  const sales_agent = _.omit(payload.sales_agent, "id");
  return axios.put(url, { sales_agent: { ...sales_agent } }).then(response => {
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
 * Delete sales agent
 *
 * @param {object} payload
 * @returns {object}
 */
export function deleteSalesAgent(payload: any) {
  const url = `/${API_URLS.salesAgent}/${payload.sales_agent.id}?new_sales_agent_id=${payload.sales_agent.new_sales_agent_id}`;
  return axios.delete(url, { ...payload }).then(response => {
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
