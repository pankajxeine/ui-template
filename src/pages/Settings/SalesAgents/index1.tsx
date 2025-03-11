import React, { useState } from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient
} from 'react-query';
import LinearProgressLoading from '~/core/components/Loading';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid2';
import Scrollbars from '~/core/components/Scrollbars';
import PageHeader from '~/core/components/PageHeader';
import AddEditSalesAgents from './components/AddEditSalesAgents';
import SnackbarMessage from '~/core/components/SnackbarMessage';
import { ISalesAgents, initSalesAgents } from "../../../models/SalesAgents";
import { SalesAgentsInfoCard } from './components/SalesAgentsInfoCard';

import APPFIELDS from '../../../constants/apiFields'
import {
    getSalesAgent,
    createSalesAgent,
    updateSalesAgent,
    deleteSalesAgent
} from "./services/salesAgents.service";

const container = {
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const SalesAgents = () => {
    const [open, setOpen] = useState(false);
    const [formMode, setFormMode] = useState("new");
    const [formData, setFormData] = useState(initSalesAgents);
    const queryClient = useQueryClient();
    // Create a client

    const closeDeletePropmpt = (flag: boolean, selectedAgent: any) => {
        console.log("closeDeletePropmpt", selectedAgent);
        // setSelectedBranch(branch);
        // setDeleteDialogFlag(flag);
    }

    const onEditCloneHandler = (object: any, mode: string) => {
        console.log("onEditCloneHandler", mode);
        let newFormData: any = initSalesAgents;
        Object.keys(initSalesAgents).map(k => newFormData[k] = object[k]);
        if (mode == 'clone') {
            newFormData = {
                ...newFormData,
                name: ""
            }
        } else {
            newFormData = {
                ...newFormData,
                id: object.id
            }
        }
        setFormData(newFormData);
        setFormMode(mode);
        setOpen(true);
    }
    const openDialoagHandler = (toggleFlag: boolean) => {
        setOpen(toggleFlag);
    };

    const onSubmitHandler = (data: any) => {
        console.log("onSubmitHandler");
        //createMutation.mutate({ branch: data });
        // dispatch(usersAction.saveUser(data as UserState))
    }

    const { isLoading, isError, data } = useQuery({
        queryKey: 'salesagents',
        queryFn: getSalesAgent,
        meta: { fields: APPFIELDS.SALES_AGENT_LIST }
    })

    // Create a client
    const createMutation = useMutation({
        mutationFn: formMode == 'edit' ? updateSalesAgent : createSalesAgent,
        onSettled: async (data: any) => {
            setOpen(false);
            setFormData(initSalesAgents);
            return await queryClient.invalidateQueries({ queryKey: ['salesagents'] })
        },
    })

    const deleteMutation = useMutation({
        mutationFn: deleteSalesAgent,
        onSettled: async () => {
            // setSelectedBranch({});
            // setDeleteDialogFlag(false);
            return await queryClient.invalidateQueries({ queryKey: ['salesagents'] })
        },
    })

    if (isLoading) {
        return <LinearProgressLoading />
    }

    console.log("data", isError, data?.data?.rows);
    return (
        <div className="flex w-full h-full flex-col p-16">
            <Scrollbars>
                <PageHeader title="Sales Agents" showAdd={true} onAddHandler={openDialoagHandler} />
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col w-full justify-center p-16"
                >
                    <Grid container spacing={3}>
                        {data?.data?.rows && data?.data?.rows.map((salesAgent: any) => (
                            <Grid key={salesAgent.id} size={{ xs: 12, sm: 6, md: 4 }} sx={{ backgroundColor: '#fff' }}>
                                <SalesAgentsInfoCard
                                    salesagent={salesAgent}
                                    onDelete={closeDeletePropmpt}
                                    onEditClone={onEditCloneHandler}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
                <AddEditSalesAgents
                    open={open}
                    formData={formData}
                    onSubmitHandler={onSubmitHandler}
                    toggleDrawerHandler={openDialoagHandler}
                />
            </Scrollbars>
            {isError || !data.success && (
                <SnackbarMessage
                    showFlag={true}
                    message={data?.message}
                    severity="error"
                />
            )}
            {(createMutation.isError || createMutation.data?.data?.error || deleteMutation.data?.data?.error) && (
                <SnackbarMessage
                    showFlag={true}
                    message={createMutation.data?.data?.message}
                    severity="error"
                />
            )}
            {(createMutation.isSuccess && createMutation.data?.data?.status) && (
                <SnackbarMessage
                    showFlag={true}
                    message={createMutation.data?.data?.message}
                    severity="success"
                />
            )}

            {(deleteMutation.isSuccess && deleteMutation.data?.data?.status) && (
                <SnackbarMessage
                    showFlag={true}
                    message={deleteMutation.data?.data?.message}
                    severity="success"
                />
            )}
            {/* {data?.data?.rows &&
                <BranchDeleteConfirm
                    branches={data?.data?.rows}
                    open={showDeleteDialog}
                    onDelete={deletePromptHandler}
                    branch={selectedBranch}
                    handleClose={showHideDeleteDialog} />
            } */}
        </div>
    )
}