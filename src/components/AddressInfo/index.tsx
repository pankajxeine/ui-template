import { Stack } from 'ud-ui-toolkit';
import { ReadIconText } from 'components/ReadIconText';

export const AddressInfo = ({ address }: any) => {
    const addressText = `${address.address1}, ${address.address2}, ${address?.state?.name}, ${address?.country?.name}, ${address.city}, ${address.postal_code}`
    return (
        <Stack direction="row">
            <ReadIconText title={addressText} icon="location_on" />
        </Stack>
    )
}