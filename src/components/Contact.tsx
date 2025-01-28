import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "847e5464-82b7-4df0-b1a4-f3d740d86378");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="py-20 relative bg-[#0f1123]" id="contact">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-2xl text-purple-400 font-mono">{'</ Contact Me>'}</h2>
          <div className="h-px flex-grow bg-gradient-to-r from-purple-400 to-transparent" />
        </div>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Have a project in mind? Let's create something amazing together
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div>
            <form onSubmit={onSubmit} className="bg-[#1a1b2e]/80 backdrop-blur-sm rounded-xl p-6 space-y-6 shadow-xl border border-purple-500/10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 bg-[#2a2c42] border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-200"
                    placeholder="Edwin Joel"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 bg-[#2a2c42] border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-200"
                    placeholder="edj008e@gmail.com.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-2 bg-[#2a2c42] border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-200"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-[#2a2c42] border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-200"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="group w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center"
                >
                  <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
                {result && (
                  <p className={`mt-4 text-center ${result.includes("success") ? "text-green-400" : "text-red-400"}`}>
                    {result}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Decorative Image */}
          <div className="relative hidden md:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800"
                alt="Decorative AI visualization"
                className="rounded-2xl shadow-2xl shadow-purple-500/20 transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1123]/80 via-transparent to-transparent rounded-2xl" />
              
              {/* Floating stars effect */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-12 -left-8 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-float-delayed" />
              <div className="absolute top-1/2 -right-12 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-float" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;