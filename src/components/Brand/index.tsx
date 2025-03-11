
import { Typography } from "ud-ui-toolkit";
import APPCONFIG from "../../config/appConfig";

const Brand = () => {
    console.log("APPCONFIG", APPCONFIG);
    return (
        <>
            {APPCONFIG.logo && (
                <a
                    href={APPCONFIG.url || "#"}
                    style={{ textDecoration: "none" }}
                >
                    <img
                        src={APPCONFIG.logo as string}
                        alt={APPCONFIG.title}
                        style={{
                            height: "40px",
                            marginRight: "8px",
                        }}
                    />
                </a>
            )}
            {APPCONFIG.title && (
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        textDecoration: "none",
                        color: "inherit",
                        fontWeight: "bold",
                        display: { xs: "none", md: "block" },
                    }}
                >{APPCONFIG.title}</Typography>
            )}
        </>
    )
}

export default Brand;