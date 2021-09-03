import JoblyApi from "./api";
import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm";

function JobList() {
  const INITIAL_SEARCH_STATE = { searchTerm: "" };
  let [jobs, setJobs] = useState(null);
  let [searchData, setSearchData] = useState(INITIAL_SEARCH_STATE);

  const search = (searchTerm) => {
    setSearchData(searchTerm);
  };

  useEffect(() => {
    async function fetchData() {
      let res = await JoblyApi.getJobs(searchData);
      setJobs(res);
    }
    fetchData();
  }, [searchData]);

  if (!jobs) return <p>Loading...</p>;

  let jobCards = jobs.map((job) => {
    return <JobCard job={job} key={job.id} />;
  });

  return (
    <div className="JobList">
      <h2>Jobs</h2>
      <SearchForm search={search} />
      {jobCards}
    </div>
  );
}

export default JobList;
