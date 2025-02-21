import { Icon, Paper, Typography } from 'eworldes-ui-toolkit';
// import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom';

export const Error404Page = () => {
    return (
        <div className="flex flex-col flex-1 items-center justify-center p-16">
            <div className="max-w-512 text-center">
                <Typography variant="h1" className="font-medium mb-16">
                    404
                </Typography>

                <Typography variant="h5" className="mb-16 font-normal">
                    Sorry but we could not find the page you are looking for
                </Typography>

                <Paper className="flex items-center w-full h-56 p-16 mt-48 mb-16 shadow">
                    <Icon iconName="search" color="action">search</Icon>
                    {/* <Input
                        placeholder="Search for anything"
                        className="px-16"
                        disableUnderline
                        fullWidth
                        inputProps={{
                            'aria-label': 'Search',
                        }}
                    /> */}
                </Paper>

                <Link className="font-normal" to="/apps/dashboards/project">
                    Go back to dashboard
                </Link>
            </div>
        </div>
    );
}