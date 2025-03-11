import React from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient
} from 'react-query';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LinearProgressLoading from '~/core/components/Loading';
import Scrollbars from '~/core/components/Scrollbars';
import PageHeader from '~/core/components/PageHeader';

export const Packages = () => {
    const navigate = useNavigate();
    const container = {
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const onAddHandler = () => {
        navigate("/settings/packages/new");
    }
    return (
        <div className="flex w-full h-full flex-col p-16">
            <Scrollbars>
                <PageHeader title="Packages" showAdd={true} onAddHandler={onAddHandler} />
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col w-full justify-center p-16"
                >
                </motion.div>
            </Scrollbars>
        </div>
    )
}