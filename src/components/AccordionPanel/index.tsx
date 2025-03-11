import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Icon,
    Typography,
    Paper,
    Stack,
    Chip
} from "ud-ui-toolkit";

import { AddressInfo } from 'components/AddressInfo';
import { QuickEventToolbar } from 'components/QuickEventToolbar';
import { PhoneEmailInfo } from 'components/PhoneEmailInfo';
const AccordionPanel = ({ salesagent }: any) => {
    return (
        <>
            <Accordion sx={{
                border: '1px solid #ccc',
                boxShadow: 'none',
                borderRadius: '4px'
            }}>
                <AccordionSummary
                    expandIcon={<Icon iconName="keyboard_arrow_down" />}
                    aria-controls="applicant-information"
                    id="applicant-information"
                >
                    <Stack justifyContent="space-between" flexDirection="row">
                        <Stack direction="column">
                            <Stack direction="row" alignItems="center" columnGap={2} flexDirection="row">
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'text.primary', fontWeight: 'bold' }}
                                >
                                    {salesagent.name}
                                </Typography>
                                <Chip
                                    title={salesagent.status}
                                    variant="filled"
                                    color={salesagent.status == "Active" ? "success" : "warning"} />
                            </Stack>
                            <PhoneEmailInfo contact={salesagent} />
                            <AddressInfo address={salesagent} />
                        </Stack>
                        <QuickEventToolbar />
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle1" gutterBottom>
                        <strong>Rights & Responsibilities</strong>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        I acknowledge that I have read the above information about the Child
                        Support Services program policies, services, and my rights and
                        responsibilities.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        <strong>Yes</strong>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default AccordionPanel;