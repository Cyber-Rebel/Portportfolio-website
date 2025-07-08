
//background clip text --- text visiable kart

// animatin add kase <style> tag kaha bhai figmerne ke anadar
import React from 'react';
const skills=[
  {
    name: 'React JS',
    level: 60,
    Explore: 'Explore Notes',
    image: 'https://example.com/reactjs.jpg'
  },
  {
    name: 'JavaScript',
    level: 70,
    Explore: 'Explanation',
    image: 'https://example.com/javascript.jpg'
  },
  {
    name: 'HTML/CSS',
    level: 80,
    Explore: 'Explore More',
    image: 'https://example.com/html-css.jpg'
  },
  {
    name: 'Tailwind CSS',
    level: 75,
    Explore: 'Explore More',
    image: 'https://example.com/tailwindcss.jpg'
  },
  {
    name: 'Node.js',
    level: 50,
    Explore: 'Explore More',
    image: 'https://example.com/nodejs.jpg'
  },
  {
    name: 'Express.js',
    level: 60,
    Explore: 'Backend Day 1 - 30',
    image: 'https://example.com/expressjs.jpg'
  },
  {
    name: 'MongoDB',
    level: 55,
    Explore: 'Explore More',
    image: 'https://example.com/mongodb.jpg'
  },
  {
    name: 'Git & GitHub',
    level: 65,
    Explore: 'Open Profile',
    image: 'https://example.com/git-github.jpg'
  },
  {
    name: 'Next.js',
    level: 45,
    Explore: 'Explore More',
    image: 'https://example.com/nextjs.jpg'
  }
]
;


const SkillCard = ({ name, level, Explore ,image }) => 
   (
  
  <div className="w-full sm:w-[47%] md:w-[30%] lg:w-[18%] rounded-2xl bg-white p-5 shadow-xl hover:shadow-blue-500 transition-all duration-300">
    <img
      className="w-full h-36 object-cover rounded-xl mb-4"
      src={image}
      alt={`${name} logo`}
    />
    <h2 className="text-xl font-semibold mb-2">{name}</h2>
    <div className="w-full h-3 bg-amber-200 rounded-full overflow-hidden mb-4">
      <div
        className="h-full bg-amber-600"
        style={{ width: `${level}%` }}
      ></div>
    </div>
    <button className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition duration-300">
      {Explore}
    </button>
  </div>
);

const Resume = () => {
  return (
    <>
      <style>{`
        @keyframes animateBackground {
          0% { background-position: 0 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>

      <div className="bg-[#e7dbc9] min-h-screen w-full p-4">
        {/* Header */}
        <div className="w-full flex justify-center items-center text-center mb-10">
          <h1
            className="text-transparent font-bold font-serif text-9xl"
            style={{
              backgroundImage:
                "url('https://png.pngtree.com/thumb_back/fh260/background/20201028/pngtree-abstract-technology-background-technical-electric-image_443494.jpg')",
              backgroundSize: '400%',
              backgroundPosition: '0 50%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'animateBackground 5s infinite alternate linear',
              fontSize: 'clamp(2rem, 10vw, 8rem)',
            }}
          >
            Technical Skills
          </h1>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} name={skill.name} image={skill.image} level={skill.level}  Explore={skill. Explore} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Resume;
