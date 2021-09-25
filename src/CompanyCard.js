import { Link } from "react-router-dom";

function CompanyCard(company, key) {
  return (
    <div className="CompanyCard card bg-light mb-3" id={company.company.handle}>
      <div className="card-body">
        <Link
          className="card-title"
          to={`/companies/${company.company.handle}`}
        >
          <h3>{company.company.name}</h3>
        </Link>
        <div className="card-text">
          <p>{company.company.description}</p>
          {company.company.numEmployees && (
            <p>{company.company.numEmployees} employees</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
