import React from "react";
import JobThumbnail from "../JobThumbnail";
import "./styles.css";

export default function JobList({ jobs }) {
  return (
    <div class="job-list-container">
      {jobs.map((j) => (
        <JobThumbnail key={j.title} job={j} />
      ))}
    </div>
  );
}
