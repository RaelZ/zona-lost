import { Grid, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const AnnoucementsList: React.FC<any> = ({ annoucement }) => {
  return (
    <Grid bgcolor="#ddd" mb={2} p={1} sx={{ borderRadius: 2 }}>
      <Typography>{`Título: ${annoucement.title}`}</Typography>
      <Typography>{`Descrição: ${annoucement.description}`}</Typography>
      <Grid pt={1} display="flex" width="100%" justifyContent="flex-end">
        <Typography fontWeight={600}>
          {moment(annoucement.date).format("DD/MM/yyyy")}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AnnoucementsList;
