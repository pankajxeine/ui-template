import { motion } from 'framer-motion';
import { Grid } from 'ud-ui-toolkit';

import NavInfoCard from 'components/NavInfoCard';

export const SettingsNavItems = (props: any) => {
    const { navigations } = props;
    const container = {
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        navigations
            .map((item: any) => (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col w-full justify-center"
                >
                    <Grid container spacing={3}>
                        {item.children.map((nav: any) => (
                            <Grid key={nav.id} size={{ xs: 12, sm: 4, md: 3 }}>
                                <NavInfoCard
                                    navigation={nav}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            ))
    )
}
