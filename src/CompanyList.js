import JoblyApi from "./api";
import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";

function CompanyList() {
  let [companies, setCompanies] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let res = await JoblyApi.getAllCompanies();
      setCompanies(res);
    }
    fetchData();
  }, [setCompanies]);

  if (!companies) return <p>Loading...</p>;

  let companyCards = companies.map((company) => (
    <CompanyCard company={company} key={company.handle} />
  ));

  return (
    <div className="CompanyList">
      <h2>Companies</h2>
      {companyCards}
    </div>
  );
}

export default CompanyList;
