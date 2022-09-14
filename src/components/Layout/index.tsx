import { Grid } from "@mui/material"
import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout: React.FC = () => {
  return (
    <Grid display="flex" flexDirection="column">
      <Header />
      <Grid display="flex" height="calc(100vh - 60px)">
        <Sidebar />
        <Grid  overflow="auto" width="100%" height="100%">
        <Outlet />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Layout
