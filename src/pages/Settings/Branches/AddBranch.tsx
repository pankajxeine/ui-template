import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { getInputs } from '~/core/components/Form/getInput';
import { branchFromConfig } from './config/branchFormConfig';
import { getCountries } from '~/core/services/country.service';
import LinearProgressLoading from '~/core/components/Loading';
import { AddBranchForm } from './components/AddBranchForm';
import { IBranchFormState, initBranch } from "../../../models/Branch";
import {
    useQuery
} from 'react-query';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

type AddBrnachProps = {
    open: boolean
    toggleDrawerHandler: any
    onSubmitHandler: any
    onUpdateHandler?: any
    onDeleteHandler?: any
    formMode: string
    formData: IBranchFormState
    mutationStart: boolean
    isProcess: boolean
}
export function AddBranch({ open, toggleDrawerHandler, onSubmitHandler, mutationStart, formData, formMode, isProcess }: AddBrnachProps) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { isLoading, isError, data } = useQuery("countries", getCountries);
    const formFieldsConfig = branchFromConfig({});
    const userForm = getInputs<IBranchFormState>(formFieldsConfig);

    console.log("formData", formData);
    const initialValues: IBranchFormState = {
        ...initBranch
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
        <BootstrapDialog
            aria-labelledby="customized-dialog-title"
            open={open}
            scroll={"paper"}
            fullScreen={fullScreen}
        >

            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                <p className="text-base font-semibold">{title}</p>
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={() => toggleDrawerHandler(false)}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <FormProvider {...formMethods}>
                    <form
                        onSubmit={formMethods.handleSubmit(onSubmitHandler)}
                    >
                        {isProcess ? <LinearProgressLoading /> : (
                            <>
                                <Box sx={{ width: { xs: "100%", md: "100%", lg: "500px" }, mb: '50px', height: '100%', p: 1 }}>
                                    {<AddBranchForm countries={data?.data?.rows || []} />}
                                </Box>
                                <DialogActions sx={(theme) => ({
                                    width: '95%',
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
            </DialogContent>
        </BootstrapDialog >
    );
}
