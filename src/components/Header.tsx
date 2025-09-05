import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const categories = ["World", "Politics", "Business", "Technology", "Sports", "Health"];

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4">
        {/* Top bar with logo and search */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-news-text">NewsHub</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search news..." 
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="sm">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="pb-4">
          <ul className="flex space-x-8">
            {categories.map((category) => (
              <li key={category}>
                <a 
                  href="#" 
                  className="text-news-text hover:text-news-category transition-colors font-medium"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;