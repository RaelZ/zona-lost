import { Grid, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const HelpsList: React.FC<any> = (help) => {
  return <Grid bgcolor="#ccc" mb={2} p={1} sx={{ borderRadius: 2 }}>
    <Typography>{`Descrição: ${help.help.description}`}</Typography>
    <Typography textAlign="right">{moment(help.help.openedDate).format('DD/MM/yyyy')}</Typography>
  </Grid>
};

export default HelpsList;
