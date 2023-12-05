import React, { useState, useEffect } from 'react';
import { Box, CardContent, Typography, Card } from '@mui/material';
import Header from '../header/Header.jsx';

function DebuffsComponents() {
    const [debuffs, setDebuffs] = useState(null);

    useEffect(() => {
        fetch('/tos-challenge/json/debuff.json')
        .then(response => response.json())
        .then(data => setDebuffs(data))
    }, []);

    if (!debuffs) {
        return <div>데이터를 불러오는 중....</div>;
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Header />
            <h2>극의 디버프</h2>
            <Box display="flex" flexDirection="column" alignItems="center">
                {Object.entries(debuffs).map(([key, value]) => (
                    value.map((item, index) => (
                        <Card key={index} sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <CardContent>
                                <Typography variant='h5' textAlign='center'>{item.name}</Typography>
                                <Typography variant='h5' textAlign='center' dangerouslySetInnerHTML={{ __html: item.descriptions.replace(/\n/g, '<br />') }} />
                            </CardContent>
                        </Card>
                    ))
                ))}
            </Box>
        </Box>
    );
};

export default DebuffsComponents;