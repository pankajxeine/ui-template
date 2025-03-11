import { Stack, Chip, Typography, Paper } from 'ud-ui-toolkit';
import { AddressInfo } from 'components/AddressInfo';
import { QuickEventToolbar } from 'components/QuickEventToolbar';
import { PhoneEmailInfo } from 'components/PhoneEmailInfo';

const SalesAgentBranchInfoCard = ({ data, title, status, isContact = true }: any) => {
    return (
        <Paper
            variant="outlined"
            sx={{
                p: 2,
                borderRadius: '0.75rem',
                width: '100%',
                justifyContent: "space-between"
            }}>

            <Stack justifyContent="space-between" flexDirection="row">
                <Stack direction="column">
                    <Stack direction="row" alignItems="center" columnGap={2} flexDirection="row">
                        <Typography
                            variant="body1"
                            sx={{ color: 'text.primary', fontWeight: 'bold' }}
                        >
                            {title}
                        </Typography>
                        <Chip
                            title={status}
                            variant="filled"
                            color={status == "Active" ? "success" : "warning"} />
                    </Stack>
                    {isContact && <PhoneEmailInfo contact={data} />}
                    <AddressInfo address={data} />
                </Stack>
                <QuickEventToolbar />
            </Stack>
        </Paper>
    )
}

export default SalesAgentBranchInfoCard;