import React from 'react';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
// import BillingSearch from './BillingSearch';

function SettingHeader(props: any) {
    const dispatch = useDispatch();
    // const variateDescSize = useSelector(({ notesApp }) => notesApp.notes.variateDescSize);

    return (
        <div className="flex flex-1 items-center justify-between p-8 sm:px-24 relative">
            <div className="flex flex-shrink items-center sm:w-224">
                <IconButton
                    sx={{
                        display: { lg: 'none', xs: 'inline-block' }
                    }}
                    onClick={(ev) => props.pageLayout.current.toggleLeftSidebar()}
                    aria-label="open left sidebar"
                >
                    <Icon>menu</Icon>
                </IconButton>
                <div className="flex items-center">
                    <div className="w-32 h-32 min-h-32 flex items-center justify-center relative">
                        <img src={`/media/svg/setup.svg`} alt="Your SVG" />
                    </div>
                    <Typography
                        ml={2}
                        variant="h4"
                    >
                        Settings
                    </Typography>
                </div>
            </div>

            <div className="flex flex-1 items-center justify-end">
                {/* <Tooltip title="Toggle Variate Description Size">
                    <IconButton onClick={(ev) => console.log(ev)}>
                        <Icon color={variateDescSize ? 'action' : 'disabled'}>format_size</Icon>
                    </IconButton>
                    </Tooltip> */}
                {/* <BillingSearch /> */}
            </div>
        </div>
    );
}

export default SettingHeader;
