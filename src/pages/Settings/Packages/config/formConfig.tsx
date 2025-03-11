import { InputProps } from '~/core/types/InputProps';
import { PackageFeaturesForm } from "../components/PackageFeaturesForm";
const tierList = [
    {
        label: "lite",
        value: "Lite"
    },
    {
        label: "advanced",
        value: "Advanced"
    },
    {
        label: "primium",
        value: "Primium"
    },

]
export const formConfig = (fieldOptions: any): InputProps[] => {
    const { indutry } = fieldOptions;
    return [
        {
            formName: "features",
            show: true,
            component: PackageFeaturesForm,
            label: "Account active",
            typeValue: "boolean",
            helperText: "User can access account if account is active.",
            required: false,
            type: "custom",
            name: "active",
            placeholder: "Enter unieque username",
            value: false,
            validations: [],
        },
        {
            formName: "package",
            show: true,
            label: "Package Name",
            required: true,
            type: "text",
            name: "name",
            placeholder: "Enter package name",
            value: "",
            validations: [
            ],
        },
        {
            formName: "package",
            show: true,
            label: "Tier type",
            required: true,
            type: "select",
            name: "package_type",
            selectKeys: { codeKey: "label", labelKey: "value" },
            placeholder: "Select country",
            options: tierList,
            value: "",
            validations: [
            ],
        },
        {
            formName: "package",
            show: true,
            label: "Industry",
            required: true,
            type: "select",
            selectKeys: { codeKey: "id", labelKey: "name" },
            options: indutry || [],
            name: "industry",
            placeholder: "Select industry",
            value: "",
            validations: [
            ],
        },
        {
            formName: "package",
            show: true,
            label: "Cost price",
            required: true,
            type: "text",
            name: "cost_price",
            placeholder: "Enter Customer Type",
            value: "",
            validations: [
            ],
        },
        {
            formName: "package",
            show: true,
            label: "Retail sell price",
            required: true,
            type: "text",
            name: "price",
            placeholder: "Enter Customer Type",
            value: "",
            validations: [
            ],
        },
        {
            formName: "package",
            show: true,
            label: "Maximum users",
            required: true,
            type: "text",
            name: "max_users",
            placeholder: "Enter Customer Status",
            value: "",
            validations: [
            ],
        },
        {
            formName: "package",
            show: true,
            label: "Maximum parent products Number",
            required: true,
            type: "text",
            name: "max_products",
            placeholder: "Enter Chain Number",
            value: "",
            validations: [
            ],
        },
        {
            formName: "package",
            show: true,
            label: "Allow multiple location",
            required: true,
            type: "text",
            name: "cost_center",
            placeholder: "Enter Cost Center",
            value: "",
            validations: [
            ],
        },
        {
            formName: "package",
            show: true,
            label: "Status",
            required: true,
            type: "text",
            name: "status",
            placeholder: "Enter Cost Center",
            value: "",
            validations: [
            ],
        },
        {
            formName: "package",
            show: true,
            label: "Additional user tiers",
            required: true,
            type: "text",
            name: "user_tiers",
            placeholder: "Enter Cost Center",
            value: "",
            validations: [
            ],
        },
        {
            formName: "pkg-role-permission",
            show: true,
            label: "Permission type",
            required: true,
            type: "text",
            name: "customer_email",
            value: "",
            validations: [
            ],
        },
        {
            formName: "pkg-role-permission",
            show: true,
            label: "Roles",
            required: true,
            type: "text",
            name: "customer_email",
            value: "",
            validations: [
            ],
        },
        {
            formName: "discount",
            show: true,
            label: "Customer Email 2",
            required: true,
            type: "text",
            name: "client_email",
            placeholder: "Enter Cost Center",
            value: "",
            validations: [
            ],
        },
        {
            formName: "discount",
            show: true,
            label: "Discount",
            required: true,
            type: "text",
            name: "client_email",
            placeholder: "Enter Cost Center",
            value: "",
            validations: [
            ],
        },
        {
            formName: "discount",
            show: true,
            label: "Duration",
            required: true,
            type: "text",
            name: "duration",
            placeholder: "Enter Cost Center",
            value: "",
            validations: [
            ],
        }
    ]
}