// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Filter from './components/Filter';
import PodcastCard from './components/PodcastCard';
import PodcastModal from './components/PodcastModal';
import FullScreenModal from './components/FullScreenModal';

const App = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);

  // Function to fetch podcast data from the API
  const fetchPodcasts = async () => {
    try {
      const response = await axios.get('https://podcast-api.netlify.app/');
      setPodcasts(response.data); // Set the fetched data to state
    } catch (error) {
      console.error("Error fetching podcasts:", error);
    }
  };

  // Fetch podcasts when the component mounts
  useEffect(() => {
    fetchPodcasts();
  }, []);

  const handleSelectPodcast = (podcast) => {
    setSelectedPodcast(podcast);
  };

  const handleCloseModal = () => {
    setSelectedPodcast(null);
  };

  const handleOpenFullScreenModal = () => {
    setIsFullScreenModalOpen(true);
  };

  const handleCloseFullScreenModal = () => {
    setIsFullScreenModalOpen(false);
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <Filter />
      <section className="podcast-card container">
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} onSelect={handleSelectPodcast} />
        ))}
      </section>
      <PodcastModal 
        podcast={selectedPodcast} 
        onClose={handleCloseModal} 
        onViewMore={handleOpenFullScreenModal} 
      />
      <FullScreenModal 
        podcast={selectedPodcast} 
        isOpen={isFullScreenModalOpen} 
        onClose={handleCloseFullScreenModal} 
      />
    </div>
  );
};

export default App;
