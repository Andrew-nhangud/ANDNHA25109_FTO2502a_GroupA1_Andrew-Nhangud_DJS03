// src/components/PodcastCard.jsx
import React from 'react';
import { getGenreTitles, formatDate } from '../utils/utils';

const PodcastCard = ({ podcast, onSelect }) => {
  return (
    <div className="innerPodcast-card" onClick={() => onSelect(podcast)}>
      <img src={podcast.image} alt={podcast.title} />
      <div className="podcast-card-info">
        <h1>{podcast.title}</h1>
        <div className="podcast-categories">
          {getGenreTitles(podcast.genres).map((genre) => (
            <span key={genre} className="podcast-categories-items">{genre}</span>
          ))}
        </div>
        <p className="season-info">{podcast.seasons} Seasons</p>
        <p className="date">Last updated: {formatDate(podcast.updated)}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
