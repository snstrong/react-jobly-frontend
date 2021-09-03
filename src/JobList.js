import JoblyApi from "./api";
import { useState, useEffect } from "react";
import JobCard from "./JobCard";

function JobList() {
  let [jobs, setJobs] = useState(null);
  let [search, setSearch] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let res = await JoblyApi.getAllJobs();
      setJobs(res);
    }
    fetchData();
  }, []);

  if (!jobs) return <p>Loading...</p>;

  let jobCards = jobs.map((job) => {
    return <JobCard job={job} key={job.id} />;
  });

  return (
    <div className="JobList">
      <h2>Jobs</h2>
      {jobCards}
    </div>
  );
}

export default JobList;
