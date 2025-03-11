import * as React from 'react';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

export default function FormDialog({ open, title, children, toggleDrawerHandler, formMode, onSaveHandle, onCancelHandler, isSaveBtnShow }: any) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Dialog
                aria-labelledby="customized-dialog-title"
                open={open}
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
                    <Box sx={{ width: { xs: "100%", md: "100%", lg: "500px" }, }}>
                        {children}
                    </Box>

                </DialogContent>
                <DialogActions>
                    <div className="flex flex-row">
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
            </Dialog>
        </>
    );
}
