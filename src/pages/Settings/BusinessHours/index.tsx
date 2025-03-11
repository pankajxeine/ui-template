import React from 'react';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid2';
import PageHeader from "./Header";
import { DayTimePicker } from "./DayTimePicker";
import AppPageCarded from '~/core/components/AppPageCarded';
import Scrollbar from '~/core/components/Scrollbars';

const days = [
    {
        day: "Sunday",
        openTime: "",
        closeTime: "",
        isClose: false

    },
    {
        day: "Monday",
        openTime: "",
        closeTime: "",
        isClose: false

    },
    {
        day: "Tuesday",
        openTime: "",
        closeTime: "",
        isClose: false

    },
    {
        day: "Thushday",
        openTime: "",
        closeTime: "",
        isClose: false

    },
    {
        day: "Wednesday",
        openTime: "",
        closeTime: "",
        isClose: false

    },
    {
        day: "Friday",
        openTime: "",
        closeTime: "",
        isClose: false

    },
    {
        day: "Satureday",
        openTime: "",
        closeTime: "",
        isClose: false

    }
]
export const BusinessHours = () => {
    const container = {
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };
    return (
        <AppPageCarded
            header={
                <PageHeader />
            }
            content={
                <Scrollbar>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex w-auto flex-col justify-center py-32 px-16"
                    >
                        {days.map(d => <DayTimePicker day={d.day} />)}
                    </motion.div>
                </Scrollbar>
            }
        />
    )
}