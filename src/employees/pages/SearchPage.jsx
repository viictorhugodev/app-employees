import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm"
import { EmployeesTable } from "../components"
import { getEmployeesByName } from "../helpers"

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const {q = ''} = queryString.parse(location.search)
  // const employees = getEmployeesByName(q)

  const  {searchEmployee, onInputChange} = useForm({
    searchEmployee: q
  })

  const onSearchSubmit  = (e) => {
    e.preventDefault();
    if(searchEmployee.trim().length <= 1) return

    navigate(`?q=${searchEmployee.toLowerCase().trim()}`)
  }

  
  return (
    <>
      <h1>Busqueda de Empleados</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscando</h4>

          <form onSubmit={onSearchSubmit}>
            <input 
              type="text" 
              placeholder="Buscar un empleado"
              className="form-control"
              name="searchEmployee"
              autoComplete="off"
              value={searchEmployee}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>

          <div className="alert alert-primary">
            Buscando un empleado
          </div>

          <div className="alert alert-danger">
            No se encontró un empleado <b>{q}</b>
          </div>

          {

          }

          {/* <EmployeesTable /> */}
        </div>
      </div>
    </>
  )
}
