import { useState } from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient
} from '@tanstack/react-query';
import { Loading, Stack, Paper, Scrollbar, PageContainer, HeaderContainer, Box, SnackbarMessage } from 'ud-ui-toolkit';
import { motion } from 'framer-motion';
import { ISalesAgents, initSalesAgents } from "../../../models/SalesAgents";
import SalesAgentInfoCard from 'components/SalesAgentBranchInfoCard';
import AccordionPanel from 'components/AccordionPanel';
import APPFIELDS from 'constants/apiFields';
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
        return <Loading />
    }

    console.log("data", isError, data?.data?.rows);
    return (
        <PageContainer
            maxWidth={false}
            breadcrumbs={[]}
            slots={{
                header: () => (
                    <HeaderContainer pageTitle="Sales agenets" enableBreadcrumbs breadcrumSeparator=">" />
                ),
            }}
            style={{ padding: 0 }}
        >
            <Scrollbar>
                <motion.div
                    variants={container}
                    className="p-8"
                >
                    <Paper
                        variant="outlined"
                        sx={{
                            p: 2,
                            width: '100%',
                            justifyContent: "space-between"
                        }}>
                        <Stack spacing={2}>
                            {data?.data?.rows && data?.data?.rows.map((salesAgent: any) => (
                                <SalesAgentInfoCard data={salesAgent} title={salesAgent.name} status={salesAgent.status} />
                            ))}
                        </Stack>
                    </Paper>
                </motion.div>
            </Scrollbar>
        </PageContainer >
    )
}