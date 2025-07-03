// src/components/FullScreenModal.jsx
import React from 'react';
import { formatDate, getGenreTitles } from '../utils/utils';

const FullScreenModal = ({ podcast, isOpen, onClose }) => {
  if (!isOpen || !podcast) return null;

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
            {/* Render seasons + episodes content dynamically here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenModal;
