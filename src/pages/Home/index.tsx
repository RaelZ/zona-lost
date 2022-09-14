import { AccountCircle, AllInbox, Check, Comment } from "@mui/icons-material"
import { Grid } from "@mui/material"
import React from "react"
import CardHome from "../../components/CardHome"

const Home: React.FC = () => {
  return (
    <Grid p={2} width="100%">
      <Grid display="flex" justifyContent="space-evenly" width="100%">
        <CardHome title="Help Hoje" value={27} icon={<Check sx={{ fontSize: 48 }} />} />
        <CardHome title="Journals Preenchidos" value={9} icon={<AllInbox sx={{ fontSize: 48 }} />} />
        <CardHome title="Helps em aberto" value={4} icon={<AccountCircle sx={{ fontSize: 48 }} />} />
        <CardHome title="Anúncios Ativos" value={4} icon={<Comment sx={{ fontSize: 48 }} />} />
      </Grid>
    </Grid>
  )
}

export default Home
