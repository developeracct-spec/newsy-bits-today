import NewsCard from "./NewsCard";
import businessNews from "@/assets/business-news.jpg";
import techNews from "@/assets/tech-news.jpg";

const NewsGrid = () => {
  const newsArticles = [
    {
      title: "Stock Markets Reach Record Highs Amid Economic Recovery",
      excerpt: "Major indices continue their upward trajectory as investor confidence grows following positive economic indicators and strong corporate earnings reports.",
      image: businessNews,
      category: "Business",
      author: "Michael Chen",
      readTime: "5 min read",
      publishedAt: "3 hours ago"
    },
    {
      title: "Revolutionary Solar Technology Could Transform Energy Industry",
      excerpt: "New breakthrough in photovoltaic cells promises 40% higher efficiency rates, potentially making solar power more accessible worldwide.",
      image: techNews,
      category: "Technology", 
      author: "Emma Rodriguez",
      readTime: "6 min read",
      publishedAt: "4 hours ago"
    },
    {
      title: "Climate Change Summit Reaches Historic Agreement",
      excerpt: "World leaders commit to ambitious new targets for carbon reduction as scientists warn of accelerating environmental changes.",
      image: businessNews,
      category: "World",
      author: "James Wilson",
      readTime: "7 min read", 
      publishedAt: "5 hours ago"
    },
    {
      title: "Medical Breakthrough: New Treatment Shows Promise for Alzheimer's",
      excerpt: "Clinical trials reveal significant improvements in memory function among patients treated with innovative drug therapy approach.",
      image: techNews,
      category: "Health",
      author: "Dr. Lisa Parker",
      readTime: "4 min read",
      publishedAt: "6 hours ago"
    },
    {
      title: "Space Exploration Enters New Era with Private Sector Leadership",
      excerpt: "Commercial space companies achieve new milestones in satellite deployment and deep space exploration missions.",
      image: businessNews,
      category: "Technology",
      author: "Robert Kim",
      readTime: "8 min read",
      publishedAt: "8 hours ago"
    },
    {
      title: "International Trade Agreements Signal Economic Cooperation",
      excerpt: "Multiple nations finalize comprehensive trade deals aimed at boosting global commerce and reducing tariff barriers.",
      image: techNews,
      category: "Politics",
      author: "Anna Thompson",
      readTime: "6 min read",
      publishedAt: "10 hours ago"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-news-text">Latest News</h2>
        <div className="flex space-x-2">
          {["All", "Trending", "Recent"].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 text-sm font-medium text-news-meta hover:text-news-category transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article, index) => (
          <NewsCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default NewsGrid;