import axios from "axios";
import get from "lodash/get";
import includes from "lodash/includes";
import isEmpty from "lodash/isEmpty";
import isUndefined from "lodash/isUndefined";
import map from "lodash/map";
import i18n from "../i18n";
import Storage from "./storage";
//import MESSAGES from "core/constants/alertMessage";

const _ = { get, isEmpty, map, isUndefined, includes };
const apiEndPoint = Storage.loadDomainEndpoint();
const industry = Storage.loadDomainIndustry();
let baseURL = process.env.REACT_APP_CPANEL_ENDPOINT;
if (apiEndPoint && apiEndPoint != "null" && apiEndPoint != "undefined") {
  baseURL = apiEndPoint;
}
const instance = axios.create({
  baseURL: baseURL,
  //@ts-ignore
  timeout: process.env.REACT_APP_AXIOS_MIN_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
  transformRequest: [
    (data) => {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    (data) => {
      return JSON.parse(data);
    },
  ],
});
const token = Storage.loadToken();
const storeId = Storage.loadStore();
const cashRegisterId = Storage.loadCashRegister();
instance.defaults.headers.common["x-domain"] =
  window.location.hostname === "localhost"
    ? process.env.REACT_APP_XDOMAIN
    : window.location.hostname;

instance.defaults.headers.common["x-industry"] = industry || "";

instance.defaults.headers.common["store_id"] = storeId;
instance.defaults.headers.common["platform"] = "Web";
instance.defaults.headers.common["version"] = "1.0";
if (cashRegisterId) {
  instance.defaults.headers.common["cash_register_id"] = cashRegisterId;
}
if (token) {
  instance.defaults.headers.common["Authorization"] = `Token ${token}`;
  //@ts-ignore
  instance.defaults.timeout = process.env.REACT_APP_AXIOS_MAX_TIMEOUT;
}

instance.defaults.headers.post["Content-Type"] = "application/json";

instance.interceptors.response.use(
  (response: any) => {
    // console.log("response :", response);
    let newToken = _.get(response, "data.data.user.token", "");
    if (!_.isEmpty(newToken)) {
      instance.defaults.headers.common["Authorization"] = `Token ${newToken}`;
      instance.defaults.headers.common["store_id"] = _.get(
        response,
        "data.data.user.store_id",
        1
      );
    }
    let status = _.get(response, "data.data.status", true);
    let code = _.get(response, "data.data.code", 200);
    let message = _.get(
      response,
      "data.data.message",
      i18n.t("Something went wrong, please try again later")
    );
    // console.log("message :", message);
    // console.log("message2 :", _.get(response, "data.data.data.message", ""));
    if (code === 422) {
      const data = _.get(response, "data.data.data.terminal_id", []);
      const msg = _.get(response, "data.data.data.message", "");
      // console.log("msg :", msg);
      message = !_.isEmpty(data) ? data[0] : !_.isEmpty(msg) ? msg : message;
    } else if (code === 406) {
      message = "Invalid developer id. Please check your expient settings.";
    }
    if (!status) {
      return { error: true, message: i18n.t(message) }
    }
    return response;
  },
  (error: any) => {
    let server_err_data = _.get(error, "response.data.data", {});
    let status = _.get(server_err_data, "status", false);
    let _server_err_data = _.get(error, "response.data", {});
    let _status_code = _.get(_server_err_data, "code", "");
    let _message = _.get(_server_err_data, "message", "");
    if (
      !status &&
      (_status_code === 401 || _status_code === 400) &&
      (_message === "Invalid Token" || _message === "Unauthorized")
    ) {
      Storage.clear();
      window.location.replace("/");
    } else if (_status_code === 404) {
      return { error: true, message: i18n.t(_message) }
    } else {
      //console.log("error ===:", _.get(error, "response"));
      let error_type = _.get(error, "response.data.type", null);
      let server_err_data = _.get(error, "response.data.data", {});
      let server_errors = _.map(server_err_data, "message");
      if (error_type && error_type.toLowerCase() === "validation_error") {
        // console.log("error.response.data", error.response.data);
        if (error.response.data.data && error.response.data.data.length) {
          if (error.response.data.data[0].message) {
            return { error: true, message: error.response.data.data[0].message }
          } else {
            return {
              error: true,
              message: `${error.response.data.message} Check console for more details`
            }
          }
        } else {
          return {
            error: true,
            message: `${error.response.data.message} Check console for more details`
          }
        }
      }
      if (!_.isEmpty(server_errors)) {
        if (!_.isUndefined(server_errors[0])) {
          //   let list = (
          //     <List
          //       dataSource= { server_errors }
          //   renderItem = {(item) => (
          //     <List.Item>
          //     {!_.isUndefined(item) ? i18n.t(item) : ""
          // }
          // </List.Item>
          //       )}
          //     />
          //   );
          // NotificationMessage("error", list);
          return {
            error: true,
            message: i18n.t("Something went wrong, please try again later")
          }
        } else {
          return {
            error: true,
            message: i18n.t("Something went wrong, please try again later")
          }

        }
      } else {
        console.log("error", _.get(error, "config", {}));
        const headers = _.get(error, "config.headers", {});
        if (!_.isEmpty(headers)) {
          return {
            error: true,
            message: i18n.t("Something went wrong, Please check your network connection.")
          }
        }
      }
    }
  }
);

export default instance;
