import React from "react";
import "./styles.css";

export default function JobDetails({ job }) {
  if (job == null) {
    return <></>;
  }
  function handleRedirect() {
    // window.location.href = job.link;
    window.open(job.link);
  }
  return (
    <div class="job-details-container">
      <a href={job.link}>{job.title}</a>
      <h3>{job.company}</h3>
      <h4>{job.location}</h4>
      <h5>{job.postedDate}</h5>
      <button onClick={handleRedirect}>Apply</button>
      <p align="left">{job.description}</p>
    </div>
  );
}
