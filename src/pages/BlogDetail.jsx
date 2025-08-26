import React from "react";
import { useParams, Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.avif";

export default function BlogDetail() {
  // Theme state synced with Header
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
      };
    }
  }, []);
  const { id } = useParams();

  // Example blog data (you can replace with Admin DB later)
  const blogs = [
    {
      id: "1",
      title: "Mastering Online Learning",
      image: blog1,
      intro:
        "Online learning has transformed education by making knowledge accessible anytime, anywhere. From virtual classrooms and self-paced courses to collaborative communities, mastering online learning helps students and professionals unlock their full potential while balancing flexibility with discipline.",
      sections: [
        {
          heading: "Introduction to Online Learning",
          content:
            "Online learning refers to education delivered via digital platforms, enabling learners to study from any location at their own pace. It encompasses live classes, recorded lectures, interactive assignments, and peer-to-peer collaboration. With the right approach, online education empowers learners with flexibility and global access to quality knowledge without traditional barriers of time and place.",
        },
        {
          heading: "Benefits of Online Learning",
          content:
            "The advantages of online learning include flexibility, affordability, and accessibility. Learners can balance education with work or personal commitments while reducing travel and material costs. Online platforms also offer a wide range of courses from universities, companies, and experts worldwide, making specialized knowledge available to everyone. Learners gain control over their pace and learning style, leading to improved outcomes.",
        },
        {
          heading: "Effective Learning Strategies",
          content:
            "To succeed in online learning, students should set clear goals, maintain a study schedule, and engage actively in discussions. Note-taking, regular self-assessments, and participation in group projects enhance understanding. Using productivity tools, minimizing distractions, and seeking support from mentors or peers ensures steady progress. Developing self-discipline and time management are the keys to mastering online education.",
        },
        {
          heading: "Building a Supportive Environment",
          content:
            "A dedicated study environment is essential for online learning success. Creating a distraction-free workspace, having reliable internet, and setting specific learning hours help students stay focused. Institutions can further support learners by providing discussion forums, peer groups, and mentorship programs that replicate the collaborative nature of physical classrooms.",
        },
        {
          heading: "Leveraging Technology",
          content:
            "Modern online education platforms use advanced tools such as interactive quizzes, gamified learning modules, and AI-powered recommendations. Video conferencing software, cloud-based storage, and collaborative tools enhance engagement and teamwork. By leveraging technology effectively, students can enjoy personalized learning journeys and track their progress more efficiently.",
        },
        {
          heading: "Overcoming Challenges",
          content:
            "Online learners often face challenges such as lack of motivation, digital fatigue, or limited interaction. Solutions include breaking study sessions into manageable chunks, practicing active learning techniques, and joining peer study groups for accountability. Institutions can support learners with mentorship, counseling, and engaging course design to reduce dropout rates and boost learner satisfaction.",
        },
        {
          heading: "Future of Online Education",
          content:
            "The future of online learning lies in immersive technologies like virtual reality classrooms, AI tutors, and adaptive learning platforms that tailor content to individual needs. Lifelong learning will become the norm as industries evolve rapidly, and professionals will continually update their skills through micro-courses and certifications. Online education will not only complement traditional methods but may become the primary mode of learning in the digital era.",
        },
      ],
    },
    {
      id: "2",
      title: "Future Skills You Need to Learn",
      image: blog2,
      intro:
        "The future of work is changing rapidly, and staying relevant means mastering the right skills. From digital literacy and critical thinking to advanced technologies like AI, data, and sustainability practices, future-ready skills empower learners to thrive in an evolving global economy.",
      sections: [
        {
          heading: "Digital Literacy & Technology Skills",
          content:
            "In the digital-first world, basic computer skills are no longer enough. Learners must understand cloud computing, cybersecurity, and the fundamentals of coding. Familiarity with productivity tools, collaborative platforms, and emerging technologies ensures adaptability in modern workplaces where technology drives almost every process.",
        },
        {
          heading: "Data & Analytical Thinking",
          content:
            "Data is now considered the new oil of the digital age. Skills in data analysis, visualization, and interpretation are essential for decision-making across industries. Learning tools like Excel, SQL, Python, and visualization platforms such as Tableau or Power BI helps learners uncover insights and support data-driven strategies. Critical thinking paired with data literacy makes professionals indispensable.",
        },
        {
          heading: "Artificial Intelligence & Automation",
          content:
            "AI, automation, and machine learning are transforming industries. Understanding how AI works, its applications, and its limitations is critical. Learners should gain exposure to automation tools, chatbots, and robotics. While not everyone needs to be a developer, a working knowledge of AI concepts ensures competitiveness in tech-driven environments.",
        },
        {
          heading: "Soft Skills & Emotional Intelligence",
          content:
            "Future skills go beyond technical expertise. Communication, collaboration, problem-solving, and adaptability are just as important. Emotional intelligence (EQ) helps in building relationships, managing stress, and leading teams effectively. In a world where remote and hybrid work is becoming the norm, empathy and leadership are vital skills for career growth.",
        },
        {
          heading: "Global & Cross-Cultural Competence",
          content:
            "As businesses expand globally, professionals must learn to work with diverse teams and cultures. Skills in intercultural communication, global citizenship, and inclusivity prepare learners for international careers. Being adaptable to different perspectives and environments is key to thriving in multicultural workplaces.",
        },
        {
          heading: "Sustainability & Green Skills",
          content:
            "The future workforce must prioritize sustainability. Green skills such as renewable energy knowledge, sustainable business practices, and climate awareness are increasingly valued. Governments and companies worldwide are aligning with sustainability goals, making it an important area for learners to master in order to stay future-ready.",
        },
        {
          heading: "Lifelong Learning & Adaptability",
          content:
            "The most important skill of the future is the ability to continuously learn. With industries evolving rapidly, professionals must adapt by upskilling and reskilling regularly. Micro-courses, certifications, and online programs make it easier to stay updated. Building a growth mindset and embracing lifelong learning will ensure success in the unpredictable future of work.",
        },
      ],
    },

  {
    id: "3",
    title: "Data Science",
    image: blog3,
    intro:
      "Data Science empowers organizations to extract insights, predict trends, and drive decision-making with data. It combines mathematics, statistics, computer science, and business knowledge to solve real-world problems and generate value from information.",
    sections: [
      {
        heading: "Introduction to Data Science",
        content:
          "Data Science combines statistics, computer science, and domain expertise to analyze and interpret data. It covers the full pipeline from data collection, cleaning, and preprocessing to advanced modeling and visualization. Unlike traditional analytics, Data Science uses machine learning to uncover hidden patterns and correlations. Its multidisciplinary nature makes it applicable across diverse sectors like healthcare, retail, sports, finance, and government.",
      },
      {
        heading: "Importance of Data",
        content:
          "Data is the new oil; it drives business decisions and strategies in every sector. Organizations rely on structured (databases, spreadsheets) and unstructured data (text, images, videos, social media). Proper use of data enables smarter marketing, better risk management, and improved customer experiences. For example, companies like Amazon use data to optimize logistics, while Google refines search results, and Netflix improves content recommendations. Data empowers organizations to stay competitive in an increasingly digital world.",
      },
      {
        heading: "Visualization Techniques",
        content:
          "Tools like Power BI, Tableau, and D3.js help visualize data clearly for decision-makers. Good visualization transforms complex data into understandable graphs, heatmaps, dashboards, and infographics. This allows decision-makers to spot trends, correlations, and anomalies instantly. Advanced visualization techniques like interactive dashboards and real-time charts help businesses react faster. Choosing the right visualization is key—bar charts for comparison, line graphs for trends, scatterplots for correlations, and geographic maps for regional insights.",
      },
      {
        heading: "Predictive Analytics",
        content:
          "Predictive models forecast outcomes, helping businesses prepare for future challenges. Retailers predict customer churn, finance companies assess credit risk, and hospitals forecast patient admissions. Predictive analytics uses regression models, decision trees, and neural networks trained on historical data to estimate future events. Combined with real-time analytics, it allows organizations to act proactively, reducing risks and capturing new opportunities. Industries like weather forecasting and stock trading heavily depend on predictive analytics for planning.",
      },
      {
        heading: "Machine Learning Role",
        content:
          "ML algorithms enhance predictions, automate analysis, and improve model performance. Supervised learning handles classification and regression tasks, while unsupervised learning uncovers hidden patterns and clusters in data. Reinforcement learning powers robotics and game AI. In Data Science, ML helps detect fraud, recommend products, optimize supply chains, and even generate text or images. The combination of ML with Big Data technologies allows businesses to process petabytes of information in real-time, unlocking new levels of intelligence.",
      },
      {
        heading: "Business Use Cases",
        content:
          "Data Science helps in fraud detection, customer insights, supply chain optimization, and marketing campaigns. In healthcare, predictive models detect early signs of diseases, while in finance, fraud detection systems save billions by catching anomalies. Retailers like Walmart optimize inventory and pricing using advanced analytics. Sports teams use Data Science to analyze player performance and game strategies. Governments rely on data analytics for traffic management, crime prediction, and public health monitoring.",
      },
      {
        heading: "Future Trends",
        content:
          "The future lies in automated data science (AutoML), AI-driven analytics, and real-time data processing. Edge computing will allow faster analysis directly on devices without sending everything to the cloud. AI will make Data Science more accessible through natural language queries, enabling non-technical users to generate insights. Quantum computing promises a revolution in data processing, handling problems impossible for classical systems. As businesses become more data-driven, Data Science will be at the core of every innovation.",
      },
    ],
  },
];

  

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className={
        `text-center py-20 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`
      }>
        <h2 className="text-2xl font-bold">Blog Not Found</h2>
        <Link to="/blog" className="text-[#1e3a8a] underline mt-4 block">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className={theme === 'dark' ? 'pt-20 min-h-screen bg-black text-white' : 'pt-20 min-h-screen bg-white text-black'}>
      {/* Back Link */}
      <Link to="/blog" className="text-[#1e3a8a] underline mt-4 block">
        Back to Blogs
      </Link>
      {/* Blog Hero */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* Blog Content */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <p className={`text-lg md:text-xl max-w-5xl text-center mx-auto ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
          {blog.intro}
        </p>
        {blog.sections.map((sec, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e3a8a' }}>
              {sec.heading}
            </h2>
            <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{sec.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
