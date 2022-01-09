import React, { useContext } from "react";
import { ipDataContext } from "providers/ipDataProvider";
import { Box, Grid, Typography } from "@mui/material";
import { DataBox } from "./StyledComponents";

function IpData() {
  const { ipData, ipAddress } = useContext(ipDataContext);

  return (
    <Box
      sx={{
        background: "#FFF",
        width: "75%",
        height: "150px",
        marginTop: "-75px",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
      }}
    >
      <Grid container>
        <Grid item xs>
          <DataBox>
            <Typography
              sx={{ fontWeight: "500", fontSize: "12px", color: "#333" }}
            >
              IP ADDRESS
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "24px" }}>
              {ipData.ip}
            </Typography>
          </DataBox>
        </Grid>
        <Grid item xs>
          <DataBox>
            <Typography
              sx={{ fontWeight: "500", fontSize: "12px", color: "#333" }}
            >
              LOCATION
            </Typography>
            <Typography
              sx={{ fontWeight: "500", fontSize: "24px" }}
            >{`${ipData.location.city}, ${ipData.location.region}`}</Typography>
          </DataBox>
        </Grid>
        <Grid item xs>
          <DataBox>
            <Typography
              sx={{ fontWeight: "500", fontSize: "12px", color: "#333" }}
            >
              TIMEZONE
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "24px" }}>
              {ipData.location.timezone}
            </Typography>
          </DataBox>
        </Grid>
      </Grid>
    </Box>
  );
}

export default IpData;
