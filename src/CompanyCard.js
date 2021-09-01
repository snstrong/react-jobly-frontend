import { Link } from "react-router-dom";

function CompanyCard(company, key) {
  return (
    <div className="CompanyCard" id={company.company.handle}>
      <Link to={`/companies/${company.company.handle}`}>
        <h3>{company.company.name}</h3>
      </Link>
      <p>{company.company.description}</p>
      {company.company.numEmployees && (
        <p>{company.company.numEmployees} employees</p>
      )}
    </div>
  );
}

export default CompanyCard;
