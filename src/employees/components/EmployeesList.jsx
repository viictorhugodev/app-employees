
import { useForm } from "../../hooks/useForm"
import { useFetch } from "../hooks/useFetch"
import { EmployeesTable } from "./EmployeesTable"

export const EmployeesList = () => {

    const {formState, onInputChange, nombre, apellido, cumpleanios} =  useForm({
        nombre: '',
        apellido: '',
        cumpleanios: ''
    })

    const handleSubmitLogin = (e) => {

        e.preventDefault();
    
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: nombre , apellido, cumpleanios})
        };
        fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/victor_aguilar', requestOptions)
            .then(response => response.json())
            .then(result => console.log(result) );
    
    };

    const {data, isLoading, hasError} = useFetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/victor_aguilar')
    console.log(data)
    const {data: info} = data

    const employees =  info.employees

    return (
        <div >
            {
                isLoading
                ? (
                    <div className="alert alert-info text-center">
                        Cargando
                    </div>
                )
                :
                (
                    <div className="row rows-cols-1 row-cols-md-3 g-3">
                        <form>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="nombre"
                                name="nombre"
                                value={nombre}
                                onChange={onInputChange}
                            />

                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="apellido"
                                name="apellido"
                                value={apellido}
                                onChange={onInputChange}
                            />

                            
                            <input 
                                type="date" 
                                className="form-control"
                                placeholder="fecha de nacimiento"
                                name="cumpleanios"
                                value={cumpleanios}
                                onChange={onInputChange}
                            />

                            <button
                                className="btn btn-primary"
                                // onClick={handleLogin}
                            >Registrar</button>
                        </form>
                        {
                            employees.map(employee  => (
                                <EmployeesTable 
                                    key={employee.id} 
                                    {...employee}
                                />
                            ))
                            
                        }


                    </div>
                )   
                
            }

        </div>
    )
}
