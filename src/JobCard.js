import { Link } from "react-router-dom";

function JobCard(job, key) {
  return (
    <div className="JobCard" id={job.job.id}>
      <Link to={`/jobs/${job.job.id}`}>
        <h3>{job.job.title}</h3>
      </Link>
      <Link to={`/company/${job.job.companyHandle}`}>
        {job.job.companyName}
      </Link>
      <p>Salary: {job.job.salary}</p>
      {job.job.equity && <p>Equity: {job.job.equity}</p>}
    </div>
  );
}

export default JobCard;
