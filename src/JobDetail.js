import JoblyApi from "./api";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function JobDetail() {
  let { id } = useParams();
  let [job, setJob] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let res = await JoblyApi.getJob(id);
      setJob(res);
    }
    fetchData();
  }, [setJob]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="JobDetail">
      <h2>{job.title}</h2>
      <p>Salary: {job.salary}</p>
      {job.equity && <p>Equity: {job.equity}</p>}
      <Link to={`/companies/${job.company.handle}`}>
        <p>{job.company.name}</p>
      </Link>
      <p>{job.company.description}</p>
    </div>
  );
}

export default JobDetail;
