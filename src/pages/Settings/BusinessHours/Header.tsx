import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

function PageHeader() {
    const user = {
        name: 'Catherine Pike',
        avatar: '/static/images/avatars/1.jpg'
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col pt-16"
        >

            <Typography variant="h5" component="h3" gutterBottom>
                Business hours
            </Typography>
            <Typography variant="subtitle2">
                Configure the standard hours of operation for this location.
            </Typography>
        </motion.div>
    );
}

export default PageHeader;