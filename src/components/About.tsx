import { Sparkles, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 relative bg-[#0B1120]" id="about-me">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?auto=format&fit=crop&q=80&w=1920")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#0B1120]/90 to-[#0B1120]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="mb-12">
            <div className="flex items-center space-x-4">
              <h2 className="code-font text-2xl text-purple-400">{'</About Me>'}</h2>
              <div className="h-px flex-grow bg-gradient-to-r from-purple-400 " />
            </div>
          </div>

        {/* Main content section with image */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
              I am a skilled machine learning specialist and data analyst with a strong focus on teamwork, collaboration, and leadership. I have extensive experience in building, optimizing, and deploying machine learning models to solve real-world problems. My expertise also includes analyzing complex datasets to uncover actionable insights that drive business decisions.
              </p>
              <p className="leading-relaxed">
              I excel at training teams on data tools, fostering their growth, and creating high-performing, collaborative work environments. I am passionate about leveraging data and technology to innovate, improve processes, and deliver impactful results.
              </p>
              <div className="flex items-center space-x-2 text-purple-400">
                <Sparkles size={20} />
                <span className="font-semibold">Current Focus:</span>
              </div>
              <ul className="space-y-2 ml-6">
                {[
                  "Building efficient and scalable machine learning models",
                  "Extracting actionable insights from complex datasets",
                  "Exploring deep learning, NLP, Gen AI and LLM",
                  "Combining data science and engineering for real-world impact"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <ArrowRight size={16} className="text-purple-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img 
                src="/svg/me.svg"  
                alt="Professional portrait" 
                className="relative rounded-xl w-full object-cover aspect-square shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;