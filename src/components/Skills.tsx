import { 
  Globe, 
  Rocket, 
  Database, 
  Palette
} from 'lucide-react';

const Skills = () => {
  const skills = [

    {
      icon: <Rocket className="text-purple-400" size={32} />,
      category: "Machine Learning",
      description: [
        "TensorFlow & PyTorch",
        "Neural Networks",
        "Computer Vision",
        "Natural Language Processing"
      ]
    },
    {
      icon: <Database className="text-purple-400" size={32} />,
      category: "Data Analysis",
      description: [
        "SQL & NoSQL",
        "Data Visualization",
        "Statistical Analysis",
        "Python & Pandas"
      ]
    },
    {
      icon: <Palette className="text-purple-400" size={32} />,
      category: "UI/UX Design",
      description: [
        "Figma & Adobe XD",
        "User Research",
        "Wireframing",
        "Prototyping"
      ]
    },
    {
      icon: <Globe className="text-purple-400" size={32} />,
      category: "Web Development",
      description: [
        "HTML5 & CSS3",
        "JavaScript",
        "React & Next.js",
        "REST APIs & GraphQL"
      ]
    },
    {
      icon: < Palette className="text-purple-400" size={32} />,
      category: "Graphic Designer",
      description: [
        "microsoft Clipchamp",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Canva"
      ]
    }
  ];

  const techStack = [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg" },
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
      { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },

    // { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    // { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    // { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    // { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  // { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    // { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    // { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    // { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    // { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    // { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    // { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    // { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
    // { name: "Tensor flow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" }
  ];

  return (
      <div className="py-20 bg-[#0f172a]" id="skills">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center space-x-4">
              <h2 className="code-font text-2xl text-purple-400">{'</skills>'}</h2>
              <div className="h-px flex-grow bg-gradient-to-r from-purple-400 to-transparent" />
            </div>
          </div>
  
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-[#151C2C] rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_2rem_0_rgba(139,92,246,0.1)]"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Bottom gradient line */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-3 text-white group-hover:text-purple-400 transition-colors">
                    {skill.category}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {skill.description.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="flex items-center text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Tech Stack
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="group relative bg-[#151C2C] rounded-2xl p-4 transition-all duration-300 hover:transform hover:scale-110"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                
                <div className="relative flex flex-col items-center">
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-12 h-12 object-contain mb-2"
                  />
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;