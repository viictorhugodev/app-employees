import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { EmployeePage, EmployeePage1, EmployeesPage, SearchPage } from "../pages"

export const EmployeesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">

            <Routes>
                <Route path="employees" element={<EmployeesPage />} />
                <Route path="upload" element={<EmployeePage1 />} />

                <Route path="search" element={<SearchPage />} />
                <Route path="employee/:idEmployee" element={<EmployeePage />} />

                {/* Search y empleado por ID  */}

                {/* Para redirigir en caso que no exista una ruta */}
                <Route path="/" element={<Navigate to={"/employees"} />} />
            </Routes>

        </div>
    </>
  )
}
