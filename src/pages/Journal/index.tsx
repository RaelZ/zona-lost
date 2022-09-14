import { Card, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { helpAPI } from "../../api/helps";
import HelpsList from "../../components/HelpsList";
import { useUsers } from "../../hooks";

const Journal: React.FC = () => {
  const { users, loadUsers } = useUsers();
  const [helps, setHelps] = useState([]);

  useEffect(() => {
    helpAPI.getAll().then((res) => setHelps(res));
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
        {helps.map((map: any) => (
          <HelpsList key={map.id} help={map} users={users} />
        ))}
      </Card>
    </Grid>
  );
};

export default Journal;
