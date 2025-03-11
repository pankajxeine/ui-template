import { Stack, Icon, Typography } from 'ud-ui-toolkit';

type ReactTextProps = {
    title: string;
    icon?: string;
}
export const ReadIconText = ({ icon, title }: ReactTextProps) => {
    return (
        <Stack direction="row" spacing={1} sx={{ alignItems: "center", pr: 1, pt: 1 }}>
            {icon && <Icon iconName={icon} sx={{ fontSize: "small", }} />}
            <Typography
                variant="caption"
            >
                {title}
            </Typography>
        </Stack>
    )
}