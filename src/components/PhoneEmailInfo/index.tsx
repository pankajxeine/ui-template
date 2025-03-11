import { Stack } from 'ud-ui-toolkit';
import { ReadIconText } from 'components/ReadIconText';

export const PhoneEmailInfo = ({ contact }: any) => {
    return (
        <Stack direction="row" >
            <ReadIconText title={contact.phone_number} icon="call" />
            <ReadIconText title={contact.email_address} icon="mail" />
        </Stack>
    )
}