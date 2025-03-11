
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { gatwayAction } from "store/slices/gatway/gatway.slice";
import { getAwsCpanelRouteGateway } from "services/gatway.service";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import Storage from "helpers/storage";

function* workerGetAwsCpanelRoutesGateway(action: any) {
	console.log("call workerGetAwsCpanelRoutesGateway");
	try {
		//@ts-ignore
		const response = yield call(getAwsCpanelRouteGateway, action.payload);
		const res_body = get(response, "data.data", {});
		const res_status = get(response, "data.status", true);
		console.log("res_status", res_status)
		if (res_status) {
			console.log("res_body", res_body);
			const api_endpoint = get(res_body, "api_endpoint", "");
			if (!isEmpty(api_endpoint)) {
				yield call(Storage.saveDomainEndpoint, `${api_endpoint}/api`);
			}
			yield put(gatwayAction.updateGatwayRouterApiStatus(response.data));
		}
	} catch (err) {
		// yield put({ type: actionTypes.FAIL_AWS_CPANEL_ROUTES_GATEWAY });
		throw err;
	}
}
/**
 * watch for domain basic info action.
 */
function* watchGetAwsCpanelRoutesGateway() {
	yield takeLatest(
		gatwayAction.getAwsCpanelRouteGateway,
		workerGetAwsCpanelRoutesGateway
	);
}

function* gatwaySaga() {
	yield all([fork(watchGetAwsCpanelRoutesGateway)]);
}

export default gatwaySaga;