import React from "react";
import "./styles.css";

export default function JobThumbnail({ job, onClick }) {
  return (
    <div class="thumbnail-container" onClick={onClick}>
      <h4 class="t">{job.title}</h4>
      <h5 class="t">{job.company}</h5>
      <h5 class="t">Industry: {job.industry}</h5>
    </div>
  );
}
