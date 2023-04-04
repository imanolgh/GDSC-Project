import React from "react";
import JobThumbnail from "./JobThumbnail";

export default function JobList({ jobs }) {
  return (
    <>
      {jobs.map((j) => (
        <JobThumbnail key={j.title} job={j} />
      ))}
    </>
  );
}
