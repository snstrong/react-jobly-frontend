import JoblyApi from "./api";
import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

function CompanyList() {
  let [companies, setCompanies] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let res = await JoblyApi.getAllCompanies();
      setCompanies(res);
    }
    fetchData();
  }, []);

  if (!companies) return <p>Loading...</p>;

  let companyCards = companies.map((company) => (
    <CompanyCard company={company} key={company.handle} />
  ));

  return (
    <div className="CompanyList">
      <h2>Companies</h2>
      <SearchForm />
      {companyCards}
    </div>
  );
}

export default CompanyList;
