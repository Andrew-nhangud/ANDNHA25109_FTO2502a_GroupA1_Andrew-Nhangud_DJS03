import React, { useState } from 'react';
import { formatDate, getGenreTitles } from '../utils/utils';
import { seasons } from '../data/data'; // Import the seasons data

const FullScreenModal = ({ podcast, isOpen, onClose }) => {
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(null);

  if (!isOpen || !podcast) return null;

  // Find the seasons for the current podcast
  const podcastSeasons = seasons.find(season => season.id === podcast.id)?.seasonDetails || [];

  const handleSeasonClick = (index) => {
    // Toggle the selected season index
    setSelectedSeasonIndex(selectedSeasonIndex === index ? null : index);
  };

  return (
    <div className={`full-screen-modal ${isOpen ? 'show' : ''}`}>
      <div className="full-screen-modal-content">
        <div className="full-screen-modal-header">
          <button id="backToPodcastBtn" className="back-btn" onClick={onClose}>
            &lt; Back to Podcast
          </button>
        </div>

        <div className="podcast-info-section">
          <img
            id="fullScreenModalImage"
            src={podcast.image}
            alt="Podcast Image"
          />
          <div className="podcast-info-text">
            <h2 id="fullScreenModalTitle">{podcast.title}</h2>
            <div id="fullScreenModalGenres" className="genres">
              {podcast.genres && podcast.genres.length > 0 
                ? getGenreTitles(podcast.genres).join(", ") 
                : "No genres available"}
            </div>
            <p id="fullScreenModalLastUpdated">
              Last updated: <span>{formatDate(podcast.updated)}</span>
            </p>
            <div id="fullScreenModalSeasons" className="seasons">
              {podcast.seasons > 0 
                ? `${podcast.seasons} season` 
                : "No seasons available"}
            </div>
            <p id="fullScreenModalDescription">{podcast.description}</p>
          </div>
        </div>

        <div className="seasons-episodes-section">
          <h3>Seasons and Episodes</h3>
          <div id="seasonsContainer" className="seasons-list">
            {podcastSeasons.map((season, index) => (
              <div key={index} className="season-item">
                <div className="season-header" onClick={() => handleSeasonClick(index)}>
                  <span className="season-title">{season.title}</span>
                  <span className="season-header-episodes">{season.episodes} Episodes</span>
                </div>
                {selectedSeasonIndex === index && (
                  <div className="season-episodes">
                    {Array.from({ length: season.episodes }, (_, episodeIndex) => (
                      <div key={episodeIndex} className="episode-item">
                        Episode {episodeIndex + 1}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenModal;
