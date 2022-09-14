import React from "react"
import { routes } from "./routes"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"

const PathRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ id, path, component }) => (
            <Route key={id} path={path} element={component} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default PathRoutes
