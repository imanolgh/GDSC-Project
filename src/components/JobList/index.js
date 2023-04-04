import React from "react";
import JobThumbnail from "../JobThumbnail";
import "./styles.css";

export default function JobList({ jobs, setJob }) {
  return (
    <div class="job-list-container">
      {jobs.map((j) => (
        <>
          <JobThumbnail key={j.title} job={j} onClick={() => setJob(j)} />
          <div class="t-divider" />
        </>
      ))}
    </div>
  );
}
