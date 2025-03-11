import { Stack, Typography } from 'ud-ui-toolkit';
import appVersion from '../../version.json';

const AppVersion = () => {
    return (
        <Stack sx={{ p: 2 }} direction="row" alignItems="center">
            <Typography title={"Version : "} color="secondry" variant="subtitle1" />
            <Typography title={appVersion.version} color="secondry" variant="subtitle2" />
        </Stack>
    )
}

export default AppVersion;