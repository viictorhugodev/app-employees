import { Link } from "react-router-dom"

export const EmployeesTable = ({id, name, last_name, birthday}) => {

  const heroImageUrl = `/assets/heroes/avatar1.jpg`

  return (
    <div className="col animate_animated animate_fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={name} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{last_name}</p>

              <p className="card-text">
                <small className="text-muted">{birthday}</small>
              </p>

              {/* <Link to={`/employee/${id}`}>
                Más...
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
