
import React, { useState } from 'react';
import { Mic, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface AudioPlayerProps {
  storyTitle?: string;
  narratorName?: string;
  isVisible?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  storyTitle = "The Forgotten Café of Revolution Square",
  narratorName = "Maria Konstantinou",
  isVisible = true
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([25]);
  const [volume, setVolume] = useState([80]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md mx-4">
      <div className="story-card bg-card/95 backdrop-blur-md border shadow-2xl">
        <div className="space-y-4">
          {/* Story Info */}
          <div className="text-center">
            <h4 className="font-serif font-semibold text-foreground text-sm leading-tight">
              {storyTitle}
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              Narrated by {narratorName}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <Slider
              value={progress}
              onValueChange={setProgress}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1:23</span>
              <span>4:17</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <SkipBack className="h-4 w-4" />
            </Button>
            
            <Button
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Mic className="h-5 w-5" />
              )}
            </Button>
            
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
