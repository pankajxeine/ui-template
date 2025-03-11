import axios from "helpers/api";
import get from "lodash/get";

export const ERR_MSG_SOMETHING_WENT_WRONG = "ERR_MSG_SOMETHING_WENT_WRONG";
export function getAwsCpanelRouteGateway(payload: any) {
    const baseURL = process.env.REACT_APP_AWS_CPANEL_ROUTES_GATEWAY;
    const url = `?domain=${payload.hostname}&type=${payload.application}`;
    const header = {
        "x-domain": payload.hostname,
        "x-industry": "service",
        store_id: undefined
    };
    try {
        axios.defaults.baseURL = baseURL;
        return axios.get(url, { headers: header }).then(response => {
            if (get(response, "status", "") === 200) {
                return {
                    message: "Success",
                    success: true,
                    data: response.data
                };
            }
            return {
                success: false,
                message: ERR_MSG_SOMETHING_WENT_WRONG,
                data: "",
                error: ""
            };
        });
    } catch (error) {
        console.log("error :>> ", error);
        return {
            success: false,
            message: ERR_MSG_SOMETHING_WENT_WRONG,
            data: "",
            error: ""
        };
    }
}