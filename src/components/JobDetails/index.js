import React from "react";
import "./styles.css";

export default function JobDetails({ job }) {
  return (
    <div class="job-details-container">
      <a href={job.link}>{job.title}</a>
      <h3>{job.company}</h3>
      <h4>{job.location}</h4>
      <h5>{job.postedDate}</h5>
    </div>
  );
}
