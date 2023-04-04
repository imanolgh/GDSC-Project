import React from "react";
import data from "../../utils/mock-data.json";
import JobList from "../JobList";
import { useState } from "react";
import JobDetails from "../JobDetails";
import "./styles.css";

export default function JobPanel() {
  const jobs = data.jobs;
  const [currJob, setJob] = useState(jobs[0]);

  return (
    <div class="job-panel-container">
      <JobList jobs={jobs} setJob={setJob}></JobList>
      <JobDetails job={currJob}></JobDetails>
    </div>
  );
}
