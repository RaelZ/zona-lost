import { Card, Grid, LinearProgress } from '@mui/material';
import React, { useEffect } from 'react';
import AnnoucementsList from '../../components/AnnoucementsList';
import { useAnnoucements } from '../../hooks';

const Annoucements: React.FC = () => {
  const { loadAnnoucementsAPI, annoucements, loading } = useAnnoucements()

  useEffect(() => {
    loadAnnoucementsAPI()
  }, [loadAnnoucementsAPI]);

  return loading ? <LinearProgress /> : (
    <Grid p={2} bgcolor="#FAFAFA" width="100%" height="100%">
      <Card
        sx={{
          boxShadow: "none",
          p: 2,
          overflow: "auto",
        }}
      >
        {annoucements.map((map: any) => (
          <AnnoucementsList key={map.id} annoucement={map} />
        ))}
      </Card>
    </Grid>
  );
}

export default Annoucements;