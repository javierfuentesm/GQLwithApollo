import React, { useEffect, useState } from "react";
import { JobList } from "./JobList";
import { loadJobs } from "./requests";
const { jobs } = require("./fake-data");

export const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    loadJobs().then((response) => setJobs(response));
  }, []);
  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
};
