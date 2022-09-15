import { Card, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { journalAPI } from "../../api/journalAPI";
import HelpsList from "../../components/HelpsList";
import { useUsers } from "../../hooks";

const Journal: React.FC = () => {
  const { users, loadUsers } = useUsers();
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    journalAPI.getAll().then((res) => setJournals(res));
  }, []);
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);
  return (
    <Grid p={2} height="100%" bgcolor="#FAFAFA">
      <Card
        sx={{
          boxShadow: "none",
          p: 2,
          overflow: "auto",
        }}
      >
        {journals.map((map: any) => (
          <HelpsList key={map.id} entity={map} users={users} />
        ))}
      </Card>
    </Grid>
  );
};

export default Journal;
