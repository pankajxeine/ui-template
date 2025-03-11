export interface ApiCallStatus {
    loading: boolean;
    message?: string;
    success: boolean;
    data?: any;
    error: boolean;
}

export const defaultValue = {
    loading: false,
    success: false,
    message: "",
    data: undefined,
    error: false,
}