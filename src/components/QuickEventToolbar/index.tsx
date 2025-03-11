import { Stack, Button, Icon } from 'ud-ui-toolkit';

export const QuickEventToolbar = (props: any) => {
    return (
        <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <Button variant="outlined" sx={{ p: 1, m: 1, minWidth: 'auto' }}>
                <Icon iconName="more_vert" color="primary" />
            </Button>

            {/* <Button variant="outlined" sx={{ p: 1, m: 1, minWidth: 'auto' }} >
                <Icon iconName="edit" color="success" />
            </Button>
            <Button variant="outlined" sx={{ p: 1, m: 1, minWidth: 'auto' }}>
                <Icon iconName="delete" color="error" />
            </Button> */}
        </Stack>
    )
}