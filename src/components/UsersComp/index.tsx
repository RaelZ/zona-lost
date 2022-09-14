import { AddCircle, Refresh } from "@mui/icons-material";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import Create from "./Create";

const UsersComp: React.FC<any> = ({ users, projects, loadUsers }) => {
  const [open, setOpen] = useState(false)
  return (
    <Grid width="100%" p={2} bgcolor="#FAFAFA">
      <Grid display="flex" alignItems="center">
        <AddCircle onClick={() => setOpen(true)} sx={{ fontSize: 32, color: '#56CCF2', cursor: 'pointer' }} /> <Refresh onClick={() => loadUsers()} sx={{ fontSize: 32, color: '#aaa', cursor: 'pointer' }} />
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Projeto</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Entrada</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.sort((a: any, b: any) => a.name.localeCompare(b.name)).map((map: any) => {
              const project = projects.find((find: any) => find.id === map.mainProjectId)?.name

              return (
              <TableRow key={map.id}>
                <TableCell>{map.name}</TableCell>
                <TableCell>{project}</TableCell>
                <TableCell>{map.email}</TableCell>
                <TableCell>{moment(map.joinDate).format('DD/MM/yyyy')}</TableCell>
              </TableRow>
            )})}
          </TableBody>
        </Table>
      </TableContainer>
      <Create open={open} setOpen={setOpen} projetos={projects} loadUsers={loadUsers} />
    </Grid>
  );
};

export default UsersComp;
