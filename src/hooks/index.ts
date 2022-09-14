import { useContext } from "react";
import { AnnoucementsContext } from "../contexts/AnnoucementsContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { ProjectsContext } from "../contexts/ProjectsContext";
import { UsersContext } from "../contexts/UsersContext";

export const useUsers = () => useContext(UsersContext)
export const useProjects = () => useContext(ProjectsContext)
export const useLanguage = () => useContext(LanguageContext)
export const useAnnoucements = () => useContext(AnnoucementsContext)