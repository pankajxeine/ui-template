

export interface ISalesAgents {
    name: string
    contact_first_name: string
    contact_last_name: string
    email_address: string
    phone_number: string
    notes?: string,
    address1: string,
    address2?: string,
    city: string,
    postal_code: string,
    country_id: string | number | undefined,
    state_id: string | number | undefined,
    status: string
}

export const initSalesAgents = {
    "name": "",
    "contact_first_name": "",
    "contact_last_name": "",
    "email_address": "",
    "phone_number": "",
    "notes": "",
    "address1": "",
    "address2": "",
    "city": "",
    "postal_code": "",
    "country_id": "",
    "state_id": "",
    "status": "Active"
}