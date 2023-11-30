import React, { useEffect, useState } from 'react';
import challengeData from './challenge.json';
import './App.css';

function ChallengeComponent() {
    const [challenges, setChallenges] = useState([]);
    const [image, setImage] = useState(null);
    const newDate = new Date();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate().toString().padStart(2, '0');

    useEffect(() => {
        let selectedChallenges;
        let imageDirectory;
        if (month % 2 === 0) {
            selectedChallenges = challengeData.em;
            imageDirectory = 'em';
        } else {
            selectedChallenges = challengeData.om;
            imageDirectory = 'om';
        }

        const todayChallenge = selectedChallenges.find(challenge => day == challenge.id);
        setChallenges(todayChallenge ? [todayChallenge.name] : []);
        if (todayChallenge) {
            const imagePath = `${process.env.PUBLIC_URL}/${imageDirectory}/${todayChallenge.image}`;
            setImage(imagePath);
        }
    }, [month, day]);

    return (
        <div className='container'>
          <h2 className='title'>오늘의 챌린지 맵</h2>
          <h2 className='title'>Today AM Challenge Map</h2>
            {challenges.map((challenge, index) => (
                <p key={index} className='challenge'>{challenge}</p>
            ))}
            {image && <img src={image} alt="Challenge" className='challenge-image' />}
        </div>
    );
}

export default ChallengeComponent;