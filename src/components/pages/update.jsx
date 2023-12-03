import React, { useState, useEffect } from 'react';
import Header from '../header/Header.jsx';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material';

function SteamNewsFeed() {
    const [feed, setFeed] = useState(null);

    useEffect(() => {
        fetch('/steam-news') // Fetch from your proxy server
            .then(response => response.text())
            .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
            .then(data => {
                // Process and store the data in the state
                const items = data.querySelectorAll("item");
                const feedItems = Array.from(items).map(item => {
                    const descriptionHtml = item.querySelector("description").textContent;
                    const parser = new DOMParser();
                    const descriptionDoc = parser.parseFromString(descriptionHtml, 'text/html');
                    const imageUrl = descriptionDoc.querySelector('img')?.src; // Get the image src if available

                    return {
                        title: item.querySelector("title").textContent,
                        link: item.querySelector("link").textContent,
                        imageUrl: imageUrl, // Store the image URL
                        pubDate: item.querySelector("pubDate").textContent
                    };
                });
                setFeed(feedItems.slice(0, 5)); // Only take the first 5 items
            })
            .catch(error => console.error('Error fetching Steam news feed:', error));
    }, []);

    if (!feed) {
        return <div>Loading news feed...</div>;
    }

    return (
        <div>
            <Header />
            <Typography variant="h1" align="center">Steam News Feed</Typography> {/* Centered heading */}
            <Box display="flex" flexWrap="wrap" justifyContent="center">
                {feed.map((item, index) => (
                    <Box key={index} p={1} sx={{ maxWidth: 345, flexBasis: index < 3 ? '33%' : '50%' }}>
                        <Card>
                            <CardActionArea href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.imageUrl && (
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.imageUrl}
                                        alt={item.title}
                                    />
                                )}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Date published: {item.pubDate}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                ))}
            </Box>
        </div>
    );
}

export default SteamNewsFeed;