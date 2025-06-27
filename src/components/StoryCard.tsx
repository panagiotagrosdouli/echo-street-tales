
import React, { useState } from 'react';
import { MapPin, Clock, Users, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StoryCardProps {
  title: string;
  description: string;
  location: string;
  timeEra: string;
  narratorType: string;
  imageUrl?: string;
  distance?: string;
  isActive?: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  description,
  location,
  timeEra,
  narratorType,
  imageUrl,
  distance,
  isActive
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayStory = () => {
    setIsPlaying(!isPlaying);
    // Here we would integrate with audio playback
    console.log('Playing story:', title);
  };

  return (
    <div className={`story-card ${isActive ? 'ring-2 ring-primary' : ''} ink-fade`}>
      {imageUrl && (
        <div className="mb-4 relative overflow-hidden rounded-lg">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}
      
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-serif font-semibold text-foreground leading-tight">
            {title}
          </h3>
          {distance && (
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              {distance}
            </span>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{timeEra}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Users className="h-3 w-3" />
            <span>{narratorType}</span>
          </div>
          
          <Button
            onClick={handlePlayStory}
            size="sm"
            className={`flex items-center space-x-2 ${isPlaying ? 'bg-primary/20 text-primary hover:bg-primary/30' : ''}`}
          >
            <Mic className={`h-4 w-4 ${isPlaying ? 'audio-pulse' : ''}`} />
            <span>{isPlaying ? 'Playing...' : 'Listen'}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
