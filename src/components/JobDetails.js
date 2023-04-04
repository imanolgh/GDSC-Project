import React from "react";

export default function JobDetails({ job }) {
  return (
    <>
      <a href={job.link}>{job.title}</a>
      <h3>{job.company}</h3>
      <h4>{job.location}</h4>
      <h5>{job.postedDate}</h5>
    </>
  );
}
