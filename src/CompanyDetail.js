import JoblyApi from "./api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCard from "./JobCard";

function CompanyDetail() {
  let { handle } = useParams();
  const [company, setCompany] = useState(null);
  useEffect(() => {
    async function fetchData() {
      let res = await JoblyApi.getCompany(handle);
      setCompany(res);
    }
    fetchData();
  }, [handle]);

  if (!company) return null;

  let jobs;

  if (company.jobs.length > 0) {
    jobs = company.jobs.map((job) => {
      return <JobCard job={job} key={job.id} />;
    });
  }

  return (
    <div className="CompanyDetail container">
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      {company.numEmployees && <p>{company.numEmployees} employees</p>}
      {jobs}
    </div>
  );
}

export default CompanyDetail;
