import { LinearProgress } from "@mui/material";
import React, { useEffect } from "react";
import UsersComp from "../../components/UsersComp";
import { useLanguage, useProjects, useUsers } from "../../hooks";

const Users: React.FC = () => {
  const { users, loadUsers, isLoading: loadingUsers } = useUsers();
  const { projects, loadProjects, isLoading: loadingProjects } = useProjects();
  const { language, loadLanguage, isLoading: loadingLanguage } = useLanguage();

  useEffect(() => {
    loadUsers();
    loadProjects();
    loadLanguage();
  }, [loadLanguage, loadProjects, loadUsers]);

  return loadingUsers && loadingProjects && loadingLanguage ? (
    <LinearProgress />
  ) : (
    <UsersComp users={users} projects={projects} language={language} loadUsers={loadUsers} />
  );
};

export default Users;
