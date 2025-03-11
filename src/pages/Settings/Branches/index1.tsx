import React, { useState } from 'react';

import {
    useQuery,
    useMutation,
    useQueryClient
} from 'react-query';
import { motion } from 'framer-motion';

import LinearProgressLoading from '~/core/components/Loading';
import Grid from '@mui/material/Grid2';
import { BranchInfoCard } from './components/BranchInfoCard';
import Scrollbars from '~/core/components/Scrollbars';
import PageHeader from '~/core/components/PageHeader';
import { AddBranch } from './AddBranch';
import SnackbarMessage from '~/core/components/SnackbarMessage';
import { initBranch } from "../../../models/Branch";
import APPFIELDS from '../../../constants/apiFields'
import BranchDeleteConfirm from "./components/BranchDeleteConfirm";
import { getBranches, createBranch, updateBranch, deleteBranch } from "./services/branches.service";

export const Branches = () => {
    const [open, setOpen] = useState(false);
    const [showDeleteDialog, setDeleteDialogFlag] = React.useState(false);
    const [formMode, setFormMode] = useState("new");
    const [selectedBranch, setSelectedBranch] = useState({})
    const [formData, setFormData] = useState(initBranch);
    const queryClient = useQueryClient();

    const deletePromptHandler = (oldBranchId: number, newBranchId: number) => {
        console.log("deletePromptHandler", oldBranchId, newBranchId);
        deleteMutation.mutate({ branch: { id: oldBranchId, new_branch_id: newBranchId } })
    }

    const showHideDeleteDialog = (flag: boolean) => {
        setDeleteDialogFlag(flag);
    }
    const closeDeletePropmpt = (flag: boolean, branch: any) => {
        setSelectedBranch(branch);
        setDeleteDialogFlag(flag);
    }

    // Create a client
    const createMutation = useMutation({
        mutationFn: formMode == 'edit' ? updateBranch : createBranch,
        onSettled: async () => {
            setOpen(false);
            setFormData(initBranch);
            return await queryClient.invalidateQueries({ queryKey: ['branches'] })
        },
    })

    const deleteMutation = useMutation({
        mutationFn: deleteBranch,
        onSettled: async () => {
            setSelectedBranch({});
            setDeleteDialogFlag(false);
            return await queryClient.invalidateQueries({ queryKey: ['branches'] })
        },
    })

    const { isLoading, isError, data } = useQuery({
        queryKey: 'branches',
        queryFn: getBranches,
        meta: { fields: APPFIELDS.BRANCH_LIST }
    })

    const onEditCloneHandler = (object: any, mode: string) => {
        console.log("onEditCloneHandler", mode);
        let newFormData: any = initBranch;
        Object.keys(initBranch).map(k => newFormData[k] = object[k]);
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

    const onSubmitHandler = (data: any) => {
        console.log("onSubmitHandler");
        createMutation.mutate({ branch: data });
        // dispatch(usersAction.saveUser(data as UserState))
    }

    const toggleDrawer = (toggleFlag: boolean) => {
        setOpen(toggleFlag);
    };
    const container = {
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    console.log("createMutation.data", createMutation.data);
    if (isLoading) {
        return <LinearProgressLoading />
    }
    return (
        <div className="flex w-full h-full flex-col p-16">
            <Scrollbars>
                <PageHeader title="Branches" showAdd={true} />
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col w-full justify-center p-16"
                >
                    <Grid container spacing={3}>
                        {data?.data?.rows && data?.data?.rows.map((branch: any) => (
                            <Grid key={branch.id} size={{ xs: 12, sm: 4, md: 3 }} sx={{ backgroundColor: '#fff' }}>
                                <BranchInfoCard
                                    branch={branch}
                                    onDelete={closeDeletePropmpt}
                                    onEditClone={onEditCloneHandler}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
                {open && (
                    <AddBranch
                        open={open}
                        formData={formData}
                        mutationStart={createMutation.isLoading}
                        formMode={formMode}
                        isProcess={deleteMutation.isLoading || createMutation.isLoading}
                        onSubmitHandler={onSubmitHandler}
                        toggleDrawerHandler={toggleDrawer}
                    />
                )}
            </Scrollbars>
            {(isError || createMutation.isError || createMutation.data?.data?.error || deleteMutation.data?.data?.error) && (
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
            {data?.data?.rows &&
                <BranchDeleteConfirm
                    branches={data?.data?.rows}
                    open={showDeleteDialog}
                    onDelete={deletePromptHandler}
                    branch={selectedBranch}
                    handleClose={showHideDeleteDialog} />
            }
        </div>

    )
}