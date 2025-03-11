export interface IBranchFormState {
    id?: number
    name: string
    notes?: string,
    address1: string,
    address2?: string,
    city: string,
    postal_code: string,
    country_id: string | number | undefined,
    state_id: string | number | undefined,
    status: string
}

export const initBranch = {
    "name": "",
    "notes": "",
    "address1": "",
    "address2": "",
    "city": "",
    "postal_code": "",
    "country_id": "",
    "state_id": "",
    "status": "Active"
}