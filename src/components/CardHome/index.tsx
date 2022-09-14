import { Card, Grid, Typography } from "@mui/material"
import React from "react"

const CardHome: React.FC<any> = ({ title, value, icon }) => {
  return (
    <Grid item xl={3} lg={6} md={6} sm={12} xs={12}>
      <Card sx={{ boxShadow: '0 0 15px #0000001F' }}>
        <Grid display="flex">
          <Grid display="flex" alignItems="center" p={2}><Typography>{icon}</Typography></Grid>
          <Grid display="flex" justifyContent="center" flexDirection="column" p={2}>
            <Typography>{title}</Typography>
            <Typography fontSize={32}>{value}</Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}

export default CardHome
