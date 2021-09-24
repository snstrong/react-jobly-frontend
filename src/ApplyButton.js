import { useContext, useState } from "react";
import UserContext from "./UserContext";

function ApplyButton({ jobId }) {
  const { apply, hasAppliedToJob } = useContext(UserContext);
  const [applied, setApplied] = useState(hasAppliedToJob(jobId));
  return (
    <button
      onClick={() => {
        if (hasAppliedToJob(jobId)) return;
        apply(jobId).then((res) => console.log(res));
        setApplied(true);
      }}
      className={`btn ${applied ? "btn-outline-primary" : "btn-primary"}`}
      disabled={applied ? true : false}
    >
      {applied ? "Applied" : "Apply"}
    </button>
  );
}

export default ApplyButton;
