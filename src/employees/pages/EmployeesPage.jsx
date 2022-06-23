import { EmployeesList } from "../components/EmployeesList"

export const EmployeesPage = () => {
  return (
    <>
      <h1>Empleados de "Empresa Moreliana"</h1>
      <hr />

      <EmployeesList name={name} />
    </>
  )
}
