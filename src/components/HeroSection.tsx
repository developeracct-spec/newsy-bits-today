import { Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/news-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden rounded-lg mb-8">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Featured News"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-end">
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-2xl">
            <Badge className="bg-news-category text-news-category-foreground mb-4">
              Breaking News
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Global Tech Summit Announces Revolutionary AI Breakthrough in Healthcare
            </h2>
            
            <p className="text-gray-200 text-lg mb-4 line-clamp-2">
              Scientists and tech leaders gather to unveil groundbreaking artificial intelligence 
              solutions that could transform medical diagnosis and treatment worldwide.
            </p>
            
            <div className="flex items-center space-x-4 text-gray-300 text-sm">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                Sarah Johnson
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                8 min read
              </div>
              <span>2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;