import { InputProps } from '~/core/types/InputProps';
import { addressFormFields } from '~/core/components/Form/config/addressFormFields';

export const formConfig = (fieldOptions: any): InputProps[] => {
    return [
        {
            formName: "salesagents",
            show: true,
            label: "Name",
            required: true,
            type: "text",
            name: "name",
            placeholder: "Enter name",
            value: "",
            validations: [
            ],
        },
        {
            formName: "salesagents",
            show: true,
            label: "Contact first name",
            required: true,
            type: "text",
            name: "contact_first_name",
            placeholder: "Enter name",
            value: "",
            validations: [
            ],
        },
        {
            formName: "salesagents",
            show: true,
            label: "Contact first name",
            required: true,
            type: "text",
            name: "contact_last_name",
            placeholder: "Enter name",
            value: "",
            validations: [
            ],
        },
        {
            formName: "salesagents",
            show: true,
            label: "Email",
            required: true,
            type: "text",
            name: "email_address",
            placeholder: "Enter email",
            value: "",
            validations: [
            ],
        },
        {
            formName: "salesagents",
            show: true,
            label: "Phone",
            required: true,
            type: "text",
            name: "phone_number",
            placeholder: "Enter phone number",
            value: "",
            validations: [
            ],
        },
        ...addressFormFields(fieldOptions),
        {
            formName: "salesagents",
            show: true,
            label: "Notes",
            required: false,
            type: "text",
            name: "notes",
            placeholder: "Enter Notes",
            value: "",
            validations: [
            ],
        },
    ]
}