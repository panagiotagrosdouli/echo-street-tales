
import React from 'react';
import { MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import StoryCard from './StoryCard';

const StoryMap = () => {
  const featuredStories = [
    {
      title: "The Forgotten Café of Revolution Square",
      description: "In 1943, this corner housed a small café where resistance fighters would meet under the guise of playing backgammon. The owner, Maria Konstantinou, would serve coded messages with her famous Greek coffee.",
      location: "Revolution Square, Athens",
      timeEra: "1940s",
      narratorType: "Local Historian",
      imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
      distance: "50m"
    },
    {
      title: "The Lighthouse Keeper's Last Story",
      description: "Old Captain Michalis kept this lighthouse for 40 years. Every night, he would tell stories to the fishermen's children about the ancient ships that once sailed these waters, carrying tales from distant lands.",
      location: "Harbor District",
      timeEra: "1960s-1980s",
      narratorType: "Village Elder",
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
      distance: "120m"
    },
    {
      title: "The Church Bell's Silent Years",
      description: "During the occupation, the church bell fell silent to avoid drawing attention. Local children would gather here every Sunday, whispering prayers and sharing small pieces of bread hidden from the soldiers.",
      location: "St. Nicholas Church",
      timeEra: "1941-1944",
      narratorType: "Community Memory",
      imageUrl: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop",
      distance: "200m"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-parchment/20 to-background paper-texture">
      {/* Search Section */}
      <div className="container py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-3">
            Discover Stories Near You
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every street has a story. Every corner holds a memory. Walk through history 
            and let the echoes of the past guide your steps.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search stories, places, or time periods..."
              className="pl-10 bg-card/80 backdrop-blur-sm border-border/50"
            />
          </div>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="relative mb-8 h-64 bg-card/30 rounded-xl border border-border/50 overflow-hidden vintage-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
            <div className="text-center space-y-3">
              <MapPin className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-serif font-semibold text-foreground">
                Interactive Story Map
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                Walk around to discover location-based stories, or explore from here
              </p>
            </div>
          </div>
          
          {/* Story Markers */}
          <div className="absolute top-1/4 left-1/3 animate-pulse">
            <div className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg" />
          </div>
          <div className="absolute top-1/2 right-1/4 animate-pulse" style={{ animationDelay: '0.5s' }}>
            <div className="w-4 h-4 bg-accent rounded-full border-2 border-background shadow-lg" />
          </div>
          <div className="absolute bottom-1/3 left-1/2 animate-pulse" style={{ animationDelay: '1s' }}>
            <div className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg" />
          </div>
        </div>

        {/* Featured Stories */}
        <div>
          <h3 className="text-xl font-serif font-semibold text-foreground mb-6 flex items-center">
            <span className="w-1 h-6 bg-primary rounded-full mr-3" />
            Stories Nearby
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStories.map((story, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                <StoryCard {...story} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryMap;
