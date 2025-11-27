import React from 'react'
import Navbar from '../components/Navbar'
import { Target, BarChart3, Database, MonitorSmartphone, Zap, TrendingUp, GraduationCap } from 'lucide-react';

const Home = ({ onTopicSelect }) => {

  const topics = [
    {
      id: 'oop',
      title: 'Object-Oriented Programming',
      description: 'Test your knowledge of OOP concepts',
      icon: Target
    },
    {
      id: 'dsa',
      title: 'Data Structures & Algorithms',
      description: 'Challenge yourself with DSA problems',
      icon: BarChart3
    },
    {
      id: 'dbms',
      title: 'Database Management Systems',
      description: 'Test your database knowledge',
      icon: Database
    },
    {
      id: 'os',
      title: 'Operating Systems',
      description: 'Explore OS fundamentals',
      icon: MonitorSmartphone
    }
  ];


  return (
    <div className='min-h-screen'>
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#2A6073] mb-4">
            Test Your Knowledge
          </h2>
          <p className="text-xl text-[#6B7C8F] max-w-2xl mx-auto">
            Choose a topic below and challenge yourself with our comprehensive quiz platform
          </p>
        </div>

        {/* Topic Cards Grid */}
        <div id="topics" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {topics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => onTopicSelect(topic.id)}
              className="bg-[#F8FCFF] border-2 border-[#E0EEF7] rounded-2xl p-6 cursor-pointer 
                       hover:shadow-xl hover:scale-105 transition-all duration-300 
                       hover:border-[#C4E3F5] group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <topic.icon className="w-12 h-12 text-[#2F6E8E]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#2A6073] mb-2">
                {topic.title}
              </h3>
              <p className="text-[#6B7C8F] text-sm mb-4">
                {topic.description}
              </p>
              <button className="w-full bg-[#D7ECF8] hover:bg-[#C4E3F5] text-[#2A6073] 
                               font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                Start Quiz
              </button>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 hover:border-2 border-white">
            <div className="flex justify-center mb-3">
              <Zap className="w-10 h-10 text-[#2F6E8E]" strokeWidth={1.5} />
            </div>
            <h4 className="text-lg font-bold text-[#2A6073] mb-2">Quick & Easy</h4>
          </div>
          <div className="text-center p-6 hover:border-2 border-white">
            <div className="flex justify-center mb-3">
              <TrendingUp className="w-10 h-10 text-[#2F6E8E]" strokeWidth={1.5} />
            </div>
            <h4 className="text-lg font-bold text-[#2A6073] mb-2">Track Progress</h4>
          </div>
          <div className="text-center p-6 hover:border-2 border-white">
            <div className="flex justify-center mb-3">
              <GraduationCap className="w-10 h-10 text-[#2F6E8E]" strokeWidth={1.5} />
            </div>
            <h4 className="text-lg font-bold text-[#2A6073] mb-2">Learn & Improve</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
