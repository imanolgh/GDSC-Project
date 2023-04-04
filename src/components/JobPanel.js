import React from "react";
import data from "../utils/mock-data.json";
import JobList from "./JobList";
import { useState } from "react";
import JobDetails from "./JobDetails";

export default function JobPanel() {
  const [currIdx, setIdx] = useState(0);
  const jobs = data.jobs;

  return (
    <>
      <JobList jobs={jobs}></JobList>
      <JobDetails job={jobs[currIdx]}></JobDetails>
    </>
  );
}
