import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { getInputs } from '~/core/components/Form/getInput';
import { formConfig } from '../config/formConfig';
import { getCountries } from '~/core/services/country.service';
import LinearProgressLoading from '~/core/components/Loading';
import FormDialog from '~/core/components/Dialog/FormDialog';
import { ISalesAgents, initSalesAgents } from "../../../../models/SalesAgents";
import Box from '@mui/material/Box';
import SalesAgentForm from './SalesAgentForm';
import {
    useQuery
} from 'react-query';

export default function AddEditSalesAgents({ open, toggleDrawerHandler, onSubmitHandler, mutationStart, formData, formMode, isProcess }: any) {
    const { isLoading, isError, data } = useQuery("countries", getCountries);
    const formFieldsConfig = formConfig({});
    const userForm = getInputs<ISalesAgents>(formFieldsConfig);

    console.log("formData", formData);
    const initialValues: ISalesAgents = {
        ...initSalesAgents
    }

    const formMethods = useForm({
        resolver: yupResolver(userForm.validationSchema),
        defaultValues: { ...(initialValues as any) },
        values: formData
    })

    const {
        reset,
        formState,
        formState: { isSubmitSuccessful }
    } = formMethods;

    React.useEffect(() => {
        console.log("formState.isSubmitSuccessful", formState.isSubmitSuccessful);
        if (formState.isSubmitSuccessful) {
            formMethods.reset({ ...initialValues })
        }
    }, [formState, reset]);

    if (isLoading || mutationStart) {
        return <LinearProgressLoading />
    }

    const title = formMode === "edit" ? "Update branch" : "New branch"
    return (
        <FormDialog
            title={title}
            open={open}
            toggleDrawerHandler={toggleDrawerHandler}
            formMethods={formMethods}
        >
            <FormProvider {...formMethods}>
                <form
                    onSubmit={formMethods.handleSubmit(onSubmitHandler)}
                >
                    {isProcess ? <LinearProgressLoading /> : (
                        <>
                            <Box sx={{ width: { xs: "100%", md: "100%" }, mb: '50px', height: '100%', p: 1 }}>
                                {<SalesAgentForm countries={data?.data?.rows || []} />}
                            </Box>
                            <DialogActions
                                disableSpacing
                                sx={(theme) => ({
                                    width: '100%',
                                    position: 'absolute',
                                    bottom: 0,
                                    backgroundColor: '#fff'
                                })}>
                                <div className="flex flex-row justify-end pb-4">
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        onClick={() => toggleDrawerHandler(false)}
                                        startIcon={<CancelIcon />}
                                        sx={{
                                            py: '6px',
                                            px: '16px',
                                            m: 1
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        size="small"
                                        type="submit"
                                        variant="contained"
                                        startIcon={<SaveIcon />}
                                        sx={{
                                            py: '6px',
                                            px: '16px',
                                            m: 1
                                        }}
                                    >
                                        {formMode == 'edit' ? "Update" : "Save"}
                                    </Button>
                                </div>
                            </DialogActions>
                        </>
                    )}

                </form>
            </FormProvider >
        </FormDialog>
    );
}
