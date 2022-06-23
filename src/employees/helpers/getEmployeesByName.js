import { useFetch } from "../hooks/useFetch"

export const getEmployeesByName = () => {

    const {data} = useFetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/victor_aguilar')
    console.log(data)
    const employees =  data.data.employees 
    
    name = name.toLocaleLowerCase().trim()
    if(name.length === 0) return []

    return employees.filter(
        employee => employee.name.toLocaleLowerCase().includes(name)
    )


}