import React from 'react';

import { useFormContext } from "react-hook-form";

import { renderInputField } from '~/core/components/Form/InputFieldMapper';
import { formConfig } from '../config/formConfig';

const SalesAgentForm = ({ countries }: any) => {
    const {
        watch
    } = useFormContext();
    return (
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-16">
            {renderInputField(formConfig({ countries, selectedCountryCode: watch('country_id') }))}
        </div>
    )
}

export default SalesAgentForm;