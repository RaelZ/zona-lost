import { Button, Grid } from "@mui/material"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { sidebar } from "../../data/sidebar"
import Footer from "./Footer"

const Sidebar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Grid
      pl={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: 320,
        height: "calc(100vh - 60px)",
      }}
    >
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        {sidebar.map((buttons) => (
          <Grid
            key={buttons.id}
            width="100%"
            py={1}
            sx={{
              cursor: "pointer",
            }}
          >
            <Button
              variant={
                location.pathname.includes(buttons.path) ? "contained" : "text"
              }
              fullWidth
              disableElevation
              startIcon={buttons.icon}
              sx={{
                cursor: "pointer",
                justifyContent: "flex-start",
                py: 2,
                borderRadius: "1em 0 0 1em",
                backgroundColor: location.pathname.includes(buttons.path)
                  ? "#56CCF2"
                  : "transparent",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: location.pathname.includes(buttons.path)
                    ? "#23AAD2"
                    : "#56CCF24F",
                },
              }}
              onClick={() => navigate(buttons.path)}
            >
              {buttons.label}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Grid>
  )
}

export default Sidebar
