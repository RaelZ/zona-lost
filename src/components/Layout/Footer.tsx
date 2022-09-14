import { Grid, Typography } from "@mui/material"
import moment from "moment"
import React from "react"

const Footer: React.FC = () => {
  return (
    <Grid display="flex" justifyContent="space-between">
      <Typography color="#999">© QODELESS</Typography>
      <Typography color="#999">{moment().format("yyyy")}</Typography>
    </Grid>
  )
}

export default Footer
