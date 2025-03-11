
import { Paper, Stack, Typography, Chip } from 'ud-ui-toolkit';
import { motion } from 'framer-motion';
import SalesAgentInfoCard from 'components/SalesAgentBranchInfoCard';

const itemMotion = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export const SalesAgentsInfoCard = ({ salesagent, onEditClone, onDelete }: any) => {
    return (
        <motion.div
            variants={itemMotion}
            className="flex justify-between"
        >
            <Paper
                variant="outlined"
                sx={{
                    p: 2,
                    borderRadius: '0.75rem',
                    width: '100%',
                    justifyContent: "space-between"
                }}>
                <SalesAgentInfoCard data={salesagent} title={salesagent.name} status={salesagent.status} />
            </Paper>
        </motion.div >
    )
}