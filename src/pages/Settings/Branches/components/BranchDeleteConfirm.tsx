import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Divider } from '@mui/material';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function BranchDeleteConfig({ branch, branches, open, handleClose, onDelete }: any) {
    const [selectBranchId, setSelectBranchId] = React.useState(null)
    const onSubmitHandler = () => {
        const newId = selectBranchId;
        setSelectBranchId(null);
        onDelete(branch.id, newId);
    }
    const defaultProps = {
        options: branches,
        getOptionLabel: (option: any) => option.name,
    };
    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <p className="text-base font-semibold">Delete branch {`(${branch.name})`}</p>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-delete-branch-hint">
                        <p className="font-normal text-xm"> Existing customer are transferred to a different branch, select the desired branch from the list below.</p>
                    </DialogContentText>
                    <Divider sx={{ pt: 1 }} />
                    <Autocomplete
                        sx={{ pt: 1 }}
                        {...defaultProps}
                        id="select-branch-autocomplete"
                        onChange={(event, newInputValue) => {
                            setSelectBranchId(newInputValue.id);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="Select new branch" variant="standard" />
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose(false)}>Cancel</Button>
                    <Button onClick={() => onSubmitHandler()}>Save</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
