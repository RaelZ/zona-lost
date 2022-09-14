import { AccountCircle, AllInbox, Check, Comment } from "@mui/icons-material";
import { Card, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { dashboardAPI } from "../../api/dashboard";
import { helpAPI } from "../../api/helps";
import CardHome from "../../components/CardHome";
import HelpsList from "../../components/HelpsList";

const Home: React.FC = () => {
  const [anuncios, setAnuncios] = useState(0);
  const [journals, setJournals] = useState(0);
  const [todayHelps, setTodayHelps] = useState(0);
  const [queueHelps, setQueueHelps] = useState(0);
  const [helps, setHelps] = useState([]);

  useEffect(() => {
    dashboardAPI.getCountAnnouncements().then((res) => setAnuncios(res));
    dashboardAPI.getFilledJournals().then((res) => setJournals(res));
    dashboardAPI.getQueueHelpsCards().then((res) => setQueueHelps(res));
    dashboardAPI.getTodayHelpsCards().then((res) => setTodayHelps(res));
    helpAPI.getAll().then((res) => setHelps(res));
  }, []);

  return (
    <Grid p={2} width="100%" bgcolor="#FAFAFA">
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="space-evenly"
      >
        <CardHome
          title="Helps Hoje"
          value={todayHelps}
          icon={<Check sx={{ fontSize: 48, color: "#56CCF2" }} />}
        />
        <CardHome
          title="Journals Preenchidos"
          value={journals}
          icon={<AllInbox sx={{ fontSize: 48, color: "#56CCF2" }} />}
        />
        <CardHome
          title="Helps em aberto"
          value={queueHelps}
          icon={<AccountCircle sx={{ fontSize: 48, color: "#56CCF2" }} />}
        />
        <CardHome
          title="Anúncios Ativos"
          value={anuncios}
          icon={<Comment sx={{ fontSize: 48, color: "#56CCF2" }} />}
        />
      </Grid>
      <Grid container spacing={2} pt={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ boxShadow: "0 0 15px #0000001F", p: 2, maxHeight: 480, overflow: 'auto' }}>
            {helps.slice(0, 6).map((map: any) => (
              <HelpsList key={map.id} help={map} />
            ))}
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
