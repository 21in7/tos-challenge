import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, CardMedia } from '@mui/material';
import Header from '../header/Header.jsx';
import '../../App.css';

function ItemCard({ item }) {
    return (
      <Card className="card">
        <CardMedia
          component="img"
          className="card-icon"
          image={`/tos-challenge/icons/${item.icon}`}
          alt={item.name}
        />
        <CardContent className="card-content">
          <Typography className="card-title" variant="h5">{item.name}</Typography>
          <Typography className='card-title' variant='h6'>최대 레벨 : {item.max_lv}</Typography>
          <Typography className="card-description" variant="body2" dangerouslySetInnerHTML={{ __html: item.descriptions.replace(/\n/g, '<br />') }} />
        </CardContent>
      </Card>
    );
}

function ItemGrid({ items }) {
    return (
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </Box>
    );
}

function EnchantComponents() {
    const [enchants, setEnchants] = useState(null);

    useEffect(() => {
        fetch('/tos-challenge/json/enchant.json')
        .then(response => response.json())
        .then(data => setEnchants(data));
    }, []);

    if (!enchants) {
        return <div>Loading...</div>;
    }

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <Header />
            {Object.entries(enchants).map(([tier, items]) => (
                <Box key={tier} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '20px' }}>
                    {/* <Typography variant="h4" className='tier-title'>{tier}</Typography> */}
                    <ItemGrid items={items} />
                </Box>
            ))}
        </Box>
    );
};

export default EnchantComponents;