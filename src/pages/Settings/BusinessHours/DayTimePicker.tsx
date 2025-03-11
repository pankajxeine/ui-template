import React from 'react';
import { motion } from 'framer-motion';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

export const DayTimePicker = (props: any) => {
    const { day } = props;
    const itemMotion = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };
    return (
        <motion.div
            variants={itemMotion}
        >
            <Paper
                variant="outlined"
                component={Box}
                sx={(theme) => ({
                    p: 2.0,
                    m: 1.0,

                })}
            >
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row items-center justify-between">
                        <Typography sx={{ pr: 2.0 }} variant="subtitle2" gutterBottom>
                            {day}
                        </Typography>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                        <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                        <Typography variant="subtitle2" sx={{ px: 1.0 }}>
                            To
                        </Typography>
                        <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <FormControlLabel control={<Switch defaultChecked />} label="Open" />
                    </div>
                </div>
            </Paper>
        </motion.div>
    )
}