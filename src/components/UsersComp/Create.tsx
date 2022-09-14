import {
  Button,
  Card,
  FormControl,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { usersAPI } from "../../api/usersAPI";
import ModalBG from "../ModalBG";

const Create: React.FC<any> = ({ open, setOpen, projetos, loadUsers }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    qodePoints: 1,
    joinDate: moment().format(),
    cep: "",
    employeeType: 0,
    language: 0,
    tool: 0,
    mainProjectId: "",
    extraProjectId: "",
  });

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  const send = () => {
    const data = { ...form }
    data.extraProjectId = form.mainProjectId
    usersAPI.create(data).finally(() => {
      loadUsers()
      setOpen(false)
    })
  } 

  return open ? (
    <ModalBG>
      <Card
        sx={{
          overflow: "hidden",
          width: 480,
          position: "relative",
          boxShadow: "0 0 15px #0000001F",
          backgroundCOlor: "#fff",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Grid
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Criar Ubunto</Typography>
          <Typography
            fontWeight={600}
            sx={{ cursor: "pointer" }}
            onClick={() => setOpen(false)}
          >
            X
          </Typography>
        </Grid>
        <Grid container spacing={2} p={2}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              value={form.name}
              name="name"
              onChange={handleChange}
              label="nome"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              value={form.email}
              name="email"
              onChange={handleChange}
              label="email"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              type="date"
              value={form.joinDate}
              name="joinDate"
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              value={form.cep}
              name="cep"
              onChange={handleChange}
              label="cep"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <FormControl fullWidth>
              <FormLabel id="label-sel">Projeto</FormLabel>
              <Select
                labelId="label-sel"
                id="label-sel"
                size="small"
                label="Projeto"
                onChange={handleChange}
                name="mainProjectId"
                value={form.mainProjectId}
              >
                {projetos.sort((a: any, b: any) => a.name.localeCompare(b.name)).map((map: any) => (
                  <MenuItem key={map.id} value={map.id}>
                    {map.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid width="100%"><Button fullWidth variant="contained" onClick={() => send()}>Criar ubunto</Button></Grid>
      </Card>
    </ModalBG>
  ) : (
    <></>
  );
};

export default Create;
