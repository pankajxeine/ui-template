import { Box, Grid } from "ud-ui-toolkit";
import { IPageHeaderContainer } from "./types";

const PageHeaderContainerComponent = (props: IPageHeaderContainer) => {
  const { leftSection, rightSection } = props;
  return (
    <Box>
      <Box
        //@ts-ignore
        sx={(theme) => ({
          flexGrow: 1,
          px: 2,
          backgroundColor: theme.palette.background.default,
          borderBottom: `${theme.palette.mode === "light" ? "1px solid #E0E0E0" : "1px solid rgba(81, 81, 81, 1)"}`,
        })}
        justifyContent={"space-between"}
      >
        <Grid container justifyContent={"space-between"} paddingTop={2}>
          <Grid size={{ xs: 12, sm: 12, md: "auto" }}>{leftSection}</Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: "auto" }}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            {rightSection}
          </Grid>
        </Grid>

        {props.children}
      </Box>
    </Box>
  );
};

export const PageHeaderContainer = PageHeaderContainerComponent;
