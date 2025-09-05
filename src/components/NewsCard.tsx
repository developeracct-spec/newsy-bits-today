import { Clock, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  publishedAt: string;
}

const NewsCard = ({ title, excerpt, image, category, author, readTime, publishedAt }: NewsCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-news-category text-news-category-foreground">
            {category}
          </Badge>
          <div className="flex items-center text-news-meta text-sm">
            <Clock className="h-3 w-3 mr-1" />
            {readTime}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-news-text mb-2 line-clamp-2 group-hover:text-news-category transition-colors">
          {title}
        </h3>
        
        <p className="text-news-meta text-sm mb-3 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-news-meta">
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            {author}
          </div>
          <span>{publishedAt}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;