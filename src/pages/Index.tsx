import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsGrid from "@/components/NewsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <div className="container mx-auto px-4 py-8">
          <HeroSection />
          <NewsGrid />
        </div>
      </main>

      <footer className="bg-news-hero text-news-hero-foreground py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NewsHub</h3>
              <p className="text-gray-300 text-sm">
                Your trusted source for breaking news, in-depth analysis, and comprehensive coverage of global events.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">World News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Politics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">About</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Subscribe</h4>
              <p className="text-gray-300 text-sm mb-3">
                Get the latest news delivered to your inbox.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l text-sm"
                />
                <button className="px-4 py-2 bg-news-category text-white rounded-r hover:bg-news-category/90 transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 NewsHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
