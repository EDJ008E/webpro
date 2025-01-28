import { Github, Linkedin, Mail } from 'lucide-react';
import ThreeScene from './ThreeScene';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center" id="home">
      {/* Three.js Background */}
      <ThreeScene />
      
      {/* Content */}
      <div className="relative w-full max-w-6xl mx-auto px-8">
        <div className="space-y-6" >

          {/* Main Text */}
          <div className="space-y-4">
            <h2 className="code-font text-3xl md:text-4xl text-purple-500 animate-fade-in">
              Hello();
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              I'm <span className="gradient-text">Edwin Joel</span>
            </h1>
            <h3 className="text-4xl md:text-6xl font-bold text-white/90 mb-8 animate-fade-in">
            Data Analysts & ML Enthusiast
            </h3>
          </div>

          {/* Description */}
          <div className="max-w-2xl space-y-4 animate-fade-in">
            <p className="text-xl text-gray-300">
            I am a Data Analyst who enjoys turning data into insights, creating visual reports, and solving real-world problems.
            </p>
            <p className="text-xl text-gray-300">
            I value simplicity, clarity, and impactful solutions in my work.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-8 animate-fade-in">
            <a
              href="/edw.pdf" // Path to your CV file in the `public` directory
              download="Edwin Joel cv.pdf" // Specify the downloaded file name
              className="group px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition-all duration-300"
            >
              Download CV
            </a>
             {/*<button className="group p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300">
             <Settings className="w-6 h-6 text-purple-400 group-hover:rotate-90 transition-transform duration-500" />
            </button>*/}
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 pt-4 animate-fade-in px-2">
            <a 
              href="https://github.com/EDJ008E" 
              className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} className="text-purple-400" />
            </a>
            <a 
              href="https://www.linkedin.com/in/edwin-joel-a80800234/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-purple-400" />
            </a>
            <a 
              href="mailto:edj008e@gmail.com" 
              className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} className="text-purple-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
