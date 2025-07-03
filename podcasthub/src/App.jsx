// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Filter from './components/Filter';
import PodcastCard from './components/PodcastCard';
import PodcastModal from './components/PodcastModal';
import FullScreenModal from './components/FullScreenModal';
import { podcasts } from './data/data'; // Import the podcasts data

const App = () => {
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);

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
