
import React from 'react';
import { Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeRoutes = () => {
  const routes = [
    {
      title: "Voices of Resistance",
      description: "Follow the secret paths of World War II resistance fighters through the old city",
      duration: "45 min",
      stories: 8,
      difficulty: "Easy",
      color: "from-red-500/20 to-orange-500/20",
      textColor: "text-red-700",
      bgColor: "bg-red-50"
    },
    {
      title: "Maritime Memories",
      description: "Discover tales of sailors, merchants, and the sea that shaped this coastal town",
      duration: "60 min",
      stories: 12,
      difficulty: "Moderate",
      color: "from-blue-500/20 to-cyan-500/20",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50"
    },
    {
      title: "Neighborhood Chronicles",
      description: "Intimate stories from locals about daily life, love, and community through the decades",
      duration: "35 min",
      stories: 6,
      difficulty: "Easy",
      color: "from-green-500/20 to-emerald-500/20",
      textColor: "text-green-700",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-3">
          Themed Story Routes
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Curated walking experiences that weave together multiple stories around 
          common themes, creating immersive journeys through time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route, index) => (
          <div
            key={index}
            className={`story-card bg-gradient-to-br ${route.color} border-0`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="space-y-4">
              <div className={`inline-block px-3 py-1 rounded-full ${route.bgColor} ${route.textColor} text-xs font-medium`}>
                {route.difficulty}
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-foreground">
                {route.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {route.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{route.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span>{route.stories} stories</span>
                </div>
              </div>
              
              <Button className="w-full mt-4" variant="outline">
                Start Journey
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeRoutes;
