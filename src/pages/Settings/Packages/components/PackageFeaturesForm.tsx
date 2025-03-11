import React, { useEffect, useState } from 'react';
import { FormToggleSwitch } from '~/core/components/Inputs/FormToggleSwitch';
import { useFormContext, Controller } from "react-hook-form";
import { renderInputField } from '~/core/components/Form/InputFieldMapper';
// import { userAlertFormConfig } from '../config/alertFieldConfig';
import {
    useQuery
} from 'react-query';
import {
    getPackageFields,
} from '../services/package.service';
import APPFIELDS from '../../../../constants/apiFields'
import { DataObjectOutlined } from '@mui/icons-material';
import ToggleGroup from './ToggleGroup';

const toggles = [
    {
        label: "Base",
        value: "Base"
    },
    {
        label: "A la carte",
        value: "A la carte"
    },
    {
        label: "None",
        value: "None"
    }
]
export const PackageFeaturesForm = (props: any) => {
    const {
        watch
    } = useFormContext();
    const [features, setFeatures] = useState([]);

    const industry_id = watch('industry');
    useEffect(() => {
        if (industry_id) {
            getPackageFields({ fields: APPFIELDS.PACKAGE_FIELDS, id: industry_id })
                .then(res => {
                    console.log(res.data);
                    setFeatures(res?.data || [])
                })
        }
    }, [industry_id]);


    console.log("watch('isAlertReceive')", features.length);
    return (
        <div className="grid w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-16">
            {features ? (
                Object.keys(features).map((feature: any) => (
                    <div className="flex flex-row">
                        <p> {features[feature].module_name}</p>
                        <ToggleGroup toggles={toggles} />
                    </div>
                ))
            ) : <p>  NO data</p>}
        </div>
    )
}