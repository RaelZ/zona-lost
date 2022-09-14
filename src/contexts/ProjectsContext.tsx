import React, { createContext, useCallback, useState } from "react";
import { projectsAPI } from "../api/projectsAPI";

export const ProjectsContext = createContext<any>({});

function ProjectsProvider(props: any) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadProjects = useCallback(() => {
    setLoading(true);
    projectsAPI
      .getAll()
      .then((res) => setProjects(res))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProjectsContext.Provider
      value={{
        loadProjects,
        loading,
        projects,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsProvider;
