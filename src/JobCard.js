import { Link } from "react-router-dom";
import ApplyButton from "./ApplyButton";

function JobCard(job, key) {
  return (
    <div className="JobCard card mb-3 bg-light" id={job.job.id}>
      <div className="card-body">
        <Link className="card-title" to={`/jobs/${job.job.id}`}>
          <h3>{job.job.title}</h3>
        </Link>
        <Link to={`/companies/${job.job.companyHandle}`}>
          {job.job.companyName}
        </Link>
        <p>Salary: {job.job.salary}</p>
        {job.job.equity && <p>Equity: {job.job.equity}</p>}
        <ApplyButton jobId={job.job.id} />
      </div>
    </div>
  );
}

export default JobCard;
