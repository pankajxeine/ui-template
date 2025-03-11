import { InputProps } from '~/core/types/InputProps';
import { addressFormFields } from '~/core/components/Form/config/addressFormFields';

export const branchFromConfig = (fieldOptions: any): InputProps[] => {
    return [
        {
            formName: "branch",
            show: true,
            label: "Branch name",
            required: false,
            type: "text",
            name: "name",
            placeholder: "Enter role username",
            value: "",
            validations: [
            ],
        },
        ...addressFormFields(fieldOptions)
    ]
}