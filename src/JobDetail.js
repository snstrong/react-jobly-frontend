import JoblyApi from "./api";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ApplyButton from "./ApplyButton";

function JobDetail() {
  let { id } = useParams();
  let [job, setJob] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      let res = await JoblyApi.getJob(id);
      if (isMounted) setJob(res);
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [id, job]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="JobDetail container">
      <h2>{job.title}</h2>
      <ApplyButton jobId={job.id} />
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
