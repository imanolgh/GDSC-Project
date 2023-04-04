import React from "react";

export default function JobThumbnail({ job, onClick }) {
  return (
    <div onClick={onClick}>
      <h4>{job.title}</h4>
      <h4>{job.company}</h4>
      <h4>{job.industry}</h4>
    </div>
  );
}
