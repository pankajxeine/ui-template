

import React from 'react';
import { renderInputField } from '~/core/components/Form/InputFieldMapper';
import { branchFromConfig } from '../config/branchFormConfig';
import Scrollbars from '~/core/components/Scrollbars';
import { useFormContext } from "react-hook-form";

export const AddBranchForm = ({ countries }: any) => {
    const {
        watch
    } = useFormContext();

    return (
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-16">
            {renderInputField(branchFromConfig({ countries, selectedCountryCode: watch('country_id') }))}
        </div>
    )
}