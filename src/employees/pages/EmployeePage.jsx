import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

export const EmployeePage = () => {
  const {idEmployee, ...rest} = useParams()
  console.log(idEmployee)
  // const {data, isLoading, hasError} = useFetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/victor_aguilar')
  // console.log(data)
  // const employees = data.data.employees
  // console.log(employees)
  
  // employees.find(employee => {
  //   employee.id === idEmployee
  //   console.log(employee)
  // });
  // console.log(employee)

  return (
    <div>Page for employee detail</div>
  )
}
