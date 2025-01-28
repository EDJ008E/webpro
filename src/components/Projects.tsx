import {  Github } from 'lucide-react'; //ExternalLink,

const Projects = () => {
  const projects = [
    {
      title: "DeepSight",
      description: "The rapid rise of deepfakes demands advanced detection technologies, stricter regulations, and public awareness to mitigate their societal impact and ensure digital content integrity.",
      image: "https://images.unsplash.com/photo-1618609378039-b572f64c5b42?auto=format&fit=crop&w=800",
      preview: "/svg/deepsight.svg",
      github: "https://github.com/EDJ008E/deepsight.git",
      // live: "https://example.com"
    },
    // {
    //   title: "AI Art Gallery",
    //   description: "An immersive digital art gallery showcasing AI-generated artwork. Features real-time generation and interactive experiences.",
    //   image: "https://images.unsplash.com/photo-1561734702-c75b1459c894?auto=format&fit=crop&w=800",
    //   preview: "https://images.unsplash.com/photo-1561734702-c75b1459c894?auto=format&fit=crop&w=800",
    //   github: "https://github.com",
    //   live: "https://example.com"
    // },
    {
      title: "AQUACULTURE SENSOR MONITORING FOR FISH CARE",
      description: "Real-time water monitoring with sensors enables aquaculturists to manage environmental conditions, prevent diseases, and ensure optimal fish welfare in aquaculture.",
      image: "https://images.unsplash.com/photo-1618609378039-b572f64c5b42?auto=format&fit=crop&w=800",
      preview: "/svg/fish.svg",
      github: "https://www.youtube.com/watch?v=Ti1FMzVZLrc",
      // live: "https://example.com"
    },
    {
      title: "Vision X",
      description: "Vision Xplore is a smart glasses solution powered by AI to help visually impaired people. It uses advanced technologies like AI, machine learning, deep learning, and natural language processing to provide an affordable and effective way to improve their mobility and independence.",
      image: "https://images.unsplash.com/photo-1618609378039-b572f64c5b42?auto=format&fit=crop&w=800",
      preview: "/svg/vision.svg",
      github: "https://www.youtube.com/watch?v=UhL84DoNy_k&t=1s",
      // live: "https://example.com"
    },
    {
      title: "Timetable Generator System",
      description: "A Time Table Generator System is software designed to automate the creation of organized and efficient schedules for institutions or individuals.",
      image: "https://images.unsplash.com/photo-1618609378039-b572f64c5b42?auto=format&fit=crop&w=800",
      preview: "/svg/time table.svg",
      github: "https://github.com/EDJ008E/timetable-psna.git",
      // live: "https://example.com"
    },
    {
      title: "Waiter Tips Prediction using ML",
      description: "Waiter Tips Prediction using Machine Learning is a project that leverages data analysis and machine learning algorithms to predict the amount of tips a waiter might receive based on factors such as bill amount, customer demographics, service quality, and other relevant variables.",
      image: "https://images.unsplash.com/photo-1618609378039-b572f64c5b42?auto=format&fit=crop&w=800",
      preview: "/svg/waiterTips.svg",
      github: "https://github.com/EDJ008E/Waiter_Tips_Prediction_using_ML.git",
      // live: "https://example.com"
    },
    {
      title: "Future Sales prediction With ML",
      description: "Future Sales Prediction with Machine Learning is a project focused on forecasting future sales trends by analyzing historical data using machine learning techniques. It helps businesses make data-driven decisions by identifying patterns, seasonality, and influencing factors to optimize inventory, marketing strategies, and revenue growth.",
      image: "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?auto=format&fit=crop&w=800",
      preview: "/svg/FutureSales.svg",
      github: "https://github.com/EDJ008E/Future-Sales-prediction-With-ML.git",
      // live: "https://example.com"
    },
    // {
    //   title: "CodeMentor",
    //   description: "Interactive coding education platform with real-time mentoring and project-based learning.",
    //   image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
    //   preview: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
    //   github: "https://github.com",
    //   live: "https://example.com"
    // }
  ];

  return (
    <div className="min-h-screen py-20 bg-[#0f172a]" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center space-x-4">
            <h2 className="font-mono text-2xl text-purple-400">{'</ Projects>'}</h2>
            <div className="h-px flex-grow bg-gradient-to-r from-purple-400 to-transparent" />
          </div>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-[#1a1a2e] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-purple-400/20 via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 bg-[#64ffda]/10 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} icon`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Buttons with fixed z-index */}
                  <div className="mt-6 flex flex-wrap gap-4 relative z-20">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-purple-400 bg-purple-400/10 rounded-lg hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                    {/* <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-purple-400 bg-purple-400/10 rounded-lg hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live view
                    </a> */}
                  </div>
                </div>
        
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img 
                    src={project.preview} 
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;