import { Grid, Scrollbar, PageContainer } from 'ud-ui-toolkit';
import { motion } from 'framer-motion';
import NavInfoCard from 'components/NavInfoCard';
import { navigationList } from './navigation';

export const Home = () => {
    const container = {
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };
    return (
        <PageContainer maxWidth={false}>
            <Scrollbar>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex w-full justify-center p-6"
                >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {navigationList.map(nav => (
                            <Grid key={nav.id} size={{ xs: 6, sm: 6, md: 3 }}>
                                <NavInfoCard
                                    navigation={nav}
                                />
                            </Grid>
                        ))}

                    </Grid>
                </motion.div>
            </Scrollbar>
        </PageContainer>
    )
}