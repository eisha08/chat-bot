import React from "react";
import { FiExternalLink } from "react-icons/fi"; 
import { IoSend } from "react-icons/io5"; 


function HomePage() {
  const suggestions = [
    {
      question: "What is the tallest mountain in the world?",
      link: "https://en.wikipedia.org/wiki/Mount_Everest",
    },
    {
      question: "How does solar energy work?",
      link: "https://en.wikipedia.org/wiki/Solar_power",
    },
    {
      question: "What is quantum computing?",
      link: "https://en.wikipedia.org/wiki/Quantum_computing",
    },
    {
      question: "Explain black holes in simple terms",
      link: "https://en.wikipedia.org/wiki/Black_hole",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-10 gap-y-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {suggestions.map((item, index) => (
          <div
            key={index}
            className="bg-[#7b73a8] hover:-translate-y-2 cursor-pointer w-48 h-48 rounded-xl shadow-lg p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-lg font-semibold">{item.question}</div>
            <button
              onClick={() => window.open(item.link, "_blank")}
              className="self-end p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
            >
              <FiExternalLink size={20} />
            </button>
          </div>
        ))}
      </div>
          <div className="flex items-center gap-2">
      <input
        className="bg-transparent w-[60vw] p-4 h-[5vh] border-2 rounded-xl focus:outline-none"
        type="text"
        placeholder="Write your search here....."
      />
      <button
        className="p-3 bg-[#2d2380] text-white rounded-xl hover:bg-[#3a2c99] transition-colors"
        onClick={() => alert("Send clicked")}
      >
        <IoSend size={20} />
      </button>
    </div>

    </div>
  );
}

export default HomePage;
