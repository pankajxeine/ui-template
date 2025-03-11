import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ApiCallStatus, defaultValue } from "models/ApiCallStatus";

export interface GatwayRouterState {
    gatwayRouterApi: ApiCallStatus
}

const initialState: GatwayRouterState = {
    gatwayRouterApi: defaultValue,
};

export const gatwaySlice = createSlice({
    name: "gatway",
    initialState,
    reducers: {
        updateGatwayRouterApiStatus: (state, action: PayloadAction<ApiCallStatus>) => {
            console.log("updateOrders", action);
            return {
                ...state,
                ordersApiStatus: action.payload
            }
        },
        loading: (state, action: PayloadAction<string>) => {
            //@ts-ignore
            state[action.payload] = { ...defaultValue, loading: true };
        },
        getAwsCpanelRouteGateway: (state, action: PayloadAction<any>) => { },
    },
});

export const {
    actions: gatwayAction,
    reducer: gatwayReducer
} = gatwaySlice;
