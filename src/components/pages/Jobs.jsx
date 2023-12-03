import React, { useState } from 'react';
import { CardMedia, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../header/Header.jsx';
import jobsData from '../json/jobs.json';

function JobsComponent() {
  const [jobs, setJobs] = useState(null);

  // Update jobs state with local image paths
  const updatedJobs = { ...jobsData };
  const topJobs = Object.keys(updatedJobs).slice(0, 5);
  topJobs.forEach(jobType => {
    const imageName = updatedJobs[jobType][0].icon + '.png';
    updatedJobs[jobType][0].localImageUrl = `/tos-challenge/icons/${imageName}`;
  });
  setJobs(updatedJobs);
  
  // Check if jobs is not null or undefined before calling Object.keys
  const finalTopJobs = jobs ? Object.keys(jobs).slice(0, 5) : [];

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
        <Header />
      <h1>직업 목록</h1>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
      {finalTopJobs.map((jobType, index) => (
        <Box key={jobType} p={1} m={1} bgcolor="background.paper" borderRadius="borderRadius" boxShadow={1}>
          <Link to={`/tos-challenge/${jobType}`}>
            <Box sx={{ width: 100, height: 100 }}>
              <CardMedia
                component="img"
                image={jobs[jobType] && jobs[jobType].length > 0 ? jobs[jobType][0].localImageUrl || 'default-placeholder-image.png' : 'default-placeholder-image.png'}
                alt={jobType}
              />
            </Box>
            <Box textAlign='center'>
              {jobs[jobType] && jobs[jobType].length > 0 ? jobs[jobType][0].name : ''}
            </Box>
          </Link>
        </Box>
      ))}
        </Box>
    </Box>
  );
}

export default JobsComponent;