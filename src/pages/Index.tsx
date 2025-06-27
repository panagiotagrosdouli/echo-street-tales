
import React from 'react';
import Header from '@/components/Header';
import StoryMap from '@/components/StoryMap';
import ThemeRoutes from '@/components/ThemeRoutes';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <StoryMap />
        <ThemeRoutes />
      </main>
      <AudioPlayer />
    </div>
  );
};

export default Index;
