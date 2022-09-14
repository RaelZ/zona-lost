import React from "react"
import { Grid } from "@mui/material"
import logo from "../../images/logo.png"

const Header: React.FC = () => {
  return (
    <Grid display="flex" sx={{ backgroundColor: "#fff" }}>
      <Grid sx={{ minWidth: 320, backgroundColor: "#FAFAFA", height: 60,
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "80px 48px",
          backgroundPosition: "center",
        }}
      />
      <Grid
        sx={{
          width: '100%'
        }}
      />
    </Grid>
  )
}

export default Header
