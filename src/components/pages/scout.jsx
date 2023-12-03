import React, { useState, useEffect } from 'react';
import { CardMedia, Box, CardContent, Typography, Card } from '@mui/material';
import Header from '../header/Header.jsx';

function ScoutComponents() {
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        fetch('/tos-challenge/jobs.json')
        .then(response => response.json())
        .then(data => setJobs(data.scout));
    }, []);

    if (!jobs) {
        return <div>데이터를 불러오는 중....</div>;
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Header />
            <h2>소드맨</h2>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
                {jobs.map(job => (
                    <Card key={job.id} sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box sx={{ width:100, height:100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 'auto', height: '100%' }} 
                                image={`/tos-challenge/icons/${job.icon}.png`}
                                alt={job.name}
                            />
                        </Box>
                        <CardContent>
                            <Typography variant='h5' textAlign='center'>{job.name}</Typography>
                            <Typography variant='h5' textAlign='center'>{job.descriptions}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default ScoutComponents;