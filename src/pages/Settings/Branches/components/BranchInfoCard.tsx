import { motion } from 'framer-motion';
import moment from 'moment';
import { Paper } from 'ud-ui-toolkit';
import { AddressInfo } from 'components/AddressInfo';
import { QuickEventToolbar } from 'components/QuickEventToolbar';
import { PhoneEmailInfo } from 'components/PhoneEmailInfo';
import i18n from "../../../../i18n";

export const BranchInfoCard = ({ branch, onEditClone, onDelete }: any) => {
    const itemMotion = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    console.log("branch", branch);
    return (
        <motion.div
            variants={itemMotion}
            className="bg-gradient-to-r from-cyan-500 to-blue-500"
        >
            <Paper elevation={3}>
                <div className="flex flex-col divide-y-4 divide-green-300">
                    <div className="flex flex-col px-16 py-8">
                        <p className="text-base font-semibold">{branch.name}</p>
                        <span className="font-normal text-xs">{`Created at: ${moment(branch.updated_at).format('MMMM DD YYYY')}`}</span>
                    </div>
                    <AddressInfo address={branch} />
                    <QuickEventToolbar />

                </div>
            </Paper>
        </motion.div>
    )
}