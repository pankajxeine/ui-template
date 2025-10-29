// import type { CSSObject } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { BgGradientProps } from "./types";
import {
    Typography,
    Paper
} from 'ud-ui-toolkit';

export function bgGradient({ color, imgUrl }: BgGradientProps) {
    if (imgUrl) {
        return {
            background: `linear-gradient(${color}), url(${imgUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: '100px 100px',
        };
    }
    return { background: `linear-gradient(${color})` };
}

export function varAlpha(color: string, opacity = 1) {
    const unsupported =
        color.startsWith('#') ||
        color.startsWith('rgb') ||
        color.startsWith('rgba') ||
        (!color.includes('var') && color.includes('Channel'));

    if (unsupported) {
        throw new Error(
            `[Alpha]: Unsupported color format "${color}".
       Supported formats are:
       - RGB channels: "0 184 217".
       - CSS variables with "Channel" prefix: "var(--palette-common-blackChannel, #000000)".
       Unsupported formats are:
       - Hex: "#00B8D9".
       - RGB: "rgb(0, 184, 217)".
       - RGBA: "rgba(0, 184, 217, 1)".
       `
        );
    }

    return `rgba(${color} / ${opacity})`;
}

const NavInfoCard = ({ navigation }: any) => {
    const navigate = useNavigate();
    const itemMotion = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const navigateToPage = (uri: string) => {
        navigate(uri);
    }
    return (

        <motion.div
            variants={itemMotion}
            className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500"
            onClick={() => navigateToPage(navigation.uri)}
        >
            <Paper
                variant="outlined"
                //@ts-ignore
                sx={(theme) => ({
                    p: 2.5,
                    height: '20vh',
                    background: `url("/media/svg/bg-baner/${navigation.svgIcon}.svg") bottom right no-repeat`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100px 100px',
                    boxShadow: 'none',
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: '0.75rem',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)', // Slightly enlarges the Paper when hovered
                        boxShadow: 1, // Increase the shadow for emphasis
                    },
                })}
            >
                <Typography
                    variant="body1"
                    sx={{ color: 'text.primary', fontWeight: 'bold' }}
                >
                    {navigation.name}
                </Typography>
            </Paper>
        </motion.div>
    )
}

export default NavInfoCard;