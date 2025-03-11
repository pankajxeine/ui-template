import React from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient
} from 'react-query';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import LinearProgressLoading from '~/core/components/Loading';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import { getInputs } from '~/core/components/Form/getInput';
import { formConfig } from './config/formConfig';
import { IPackage, initPackage } from "../../../models/Package";
import Scrollbars from '~/core/components/Scrollbars';
import PageHeader from '~/core/components/PageHeader';
import { renderInputField } from '~/core/components/Form/InputFieldMapper';
import APPFIELDS from '../../../constants/apiFields'
import {
    getMainPackage,
    createPackage,
    getPackageFields,
    getIndustry,
    getPackageRoleList,
} from './services/package.service';


export const CreatePackage = () => {

    const industry = useQuery({
        queryKey: ['industry'],
        queryFn: getIndustry
    })

    const packageRoles = useQuery({
        queryKey: ['package-role'],
        queryFn: getPackageRoleList,
        meta: { fields: APPFIELDS.PACKAGE_ROLES }
    })

    console.log()
    const navigate = useNavigate();
    const container = {
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };
    const formFieldsConfig = formConfig({});
    const userForm = getInputs<IPackage>(formFieldsConfig);
    const onAddHandler = () => {
        navigate("/settings/packages/new");
    }

    const formMethods = useForm({
        resolver: yupResolver(userForm.validationSchema),
        defaultValues: { ...(initPackage as any) }
    })

    const onSubmitHandler = () => {

    }

    const fetchFormSection = (section: string, formFields: any) => {
        return formFields.filter((field: any) => field.formName === section);
    }

    // console.log(industry.data.data.rows, packageRoles, packageFields);
    if (industry.isLoading || packageRoles.isLoading) {
        return <LinearProgressLoading />
    }
    return (
        <div className="flex w-full h-full flex-col p-16">
            <Scrollbars>
                <PageHeader title="Create Package" />
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col w-full justify-center p-16"
                >
                </motion.div>
                <FormProvider {...formMethods}>
                    <form
                        onSubmit={formMethods.handleSubmit(onSubmitHandler)}
                    >
                        <div className="flex flex-col md:flex-row w-full">
                            {/* {renderInputField(formFieldsConfig)} */}
                            <div className="flex flex-col md:w-1/2 md:mr-8">
                                <Card sx={{ mb: 2 }}>
                                    <CardHeader
                                        title="Shrimp and Chorizo Paella"
                                        subheader="September 14, 2016"
                                    />
                                    <CardContent>
                                        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-16">
                                            {renderInputField(fetchFormSection("package", formConfig({ indutry: industry?.data?.data?.rows })))}
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card sx={{ mb: 2 }}>
                                    <CardContent>
                                        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-16">
                                            {renderInputField(fetchFormSection("discount", formConfig({ indutry: industry?.data?.data?.rows })))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="flex flex-col md:w-1/2">
                                <Card>
                                    <CardContent>
                                        {renderInputField(fetchFormSection("features", formConfig({ indutry: industry?.data?.data?.rows })))}
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </div>
                    </form>
                </FormProvider>
            </Scrollbars>
        </div>
    )
}