import { Route, Routes } from "react-router-dom"
import { EmployeesRoutes } from "../employees"
import { LoginPage } from "../auth"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
        <Routes>
          <Route path="/login" element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>} 
          />

          <Route path="/*" element={
            <PrivateRoute>
              <EmployeesRoutes />
            </PrivateRoute>} 
          />
          
          {/* <Route path="login" element={<LoginPage />} /> */}
          {/* <Route path="/*" element={<EmployeesRoutes />} /> */}
        </Routes>
    </>
  )
}
