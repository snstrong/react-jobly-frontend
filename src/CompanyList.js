import JoblyApi from "./api";
import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

function CompanyList() {
  const INITIAL_SEARCH_STATE = { searchTerm: "" };

  let [companies, setCompanies] = useState(null);
  let [searchData, setSearchData] = useState(INITIAL_SEARCH_STATE);

  const search = (searchTerm) => {
    setSearchData(searchTerm);
  };

  useEffect(() => {
    async function fetchData() {
      let res = await JoblyApi.getCompanies(searchData);
      setCompanies(res);
    }
    fetchData();
  }, [searchData]);

  if (!companies) return <p>Loading...</p>;

  let companyCards = companies.map((company) => (
    <CompanyCard company={company} key={company.handle} />
  ));

  return (
    <div className="CompanyList container pt-3">
      <h2>Companies</h2>
      <SearchForm search={search} />
      {companyCards}
    </div>
  );
}

export default CompanyList;
