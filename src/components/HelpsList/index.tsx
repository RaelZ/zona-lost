import { Grid, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const HelpsList: React.FC<any> = (props) => {
  const user = props.users.find(
    (find: any) => find.id === props.help.solicitantId
  );
  return (
    <Grid bgcolor="#ddd" mb={2} p={1} sx={{ borderRadius: 2 }}>
      <Typography>{`Descrição: ${props.help.description}`}</Typography>
      <Grid pt={1} display="flex" width="100%" justifyContent="space-between">
        <Typography fontWeight={600}>{user?.name}</Typography>
        <Typography fontWeight={600}>
          {moment(props.help.openedDate).format("DD/MM/yyyy")}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HelpsList;
