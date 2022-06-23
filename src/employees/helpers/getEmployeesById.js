// import { useFetch } from "../hooks/useFetch"

export const getEmployeesById = (id) => {

    const {data, isLoading, hasError} = useFetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/victor_aguilar')

    let employees = data.data.employees

    return employees.find(employee => employee.id === employee)

}