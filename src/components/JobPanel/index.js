import React, { useEffect } from "react";
import data from "../../utils/mock-data.json";
import JobList from "../JobList";
import { useState } from "react";
import JobDetails from "../JobDetails";
import { doc, getDocs, collection, query, setDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";

export default function JobPanel() {
  // const jobs = data.jobs;
  const [jobList, setJobList] = useState([data.jobs[0]]);
  const [currJob, setJob] = useState(data.jobs[0]);

  const navigate = useNavigate();

  function logout() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("failed to sign user out " + error);
      });
  }

  useEffect(() => {
    async function f() {
      const fetchedData = [];
      const q = query(collection(db, "jobs"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        fetchedData.push(doc.data());
      });
      if (fetchedData.length > 1) {
        setJobList(fetchedData);
        setJob(fetchedData[0]);
      }
      // console.log(fetchedData);
      console.log("Success fetching Job List");
    }
    f();
  }, []);

  // useEffect(() => {
  //   function ff() {
  //     data.jobs.forEach((job) => {
  //       const docRef = doc(db, "jobs", "" + job.id);
  //       setDoc(docRef, job);
  //     });
  //   }
  //   ff();
  // }, []);

  return (
    <div class="job-panel-container">
      <button id="logout" onClick={logout}>
        Log out
      </button>
      <JobList jobs={jobList} setJob={setJob}></JobList>
      <JobDetails job={currJob}></JobDetails>
    </div>
  );
}
