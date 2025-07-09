import React from 'react';

const skills = [
  {
    name: 'React JS',
    level: 60,
    Explore: 'Explore Notes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoqmEC3hmAuYOLEFCitbByZz66sQxr4Gaiw&s',
  },
  {
    name: 'JavaScript',
    level: 70,
    Explore: 'Explanation',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-IEJfQG9Ne8SbMuqjdZ73212jXY9hYLG63g&s',
  },
  {
    name: 'Next.js',
    level: 80,
    Explore: 'Explore More',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*7nLBkCmTiyXKFMk4fVCVqw.jpeg',
  },
  {
    name: 'Tailwind CSS',
    level: 75,
    Explore: 'Explore More',
    image: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg',
  },
  {
    name: 'Node.js',
    level: 50,
    Explore: 'Backend Day 1 - 30',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHMJ-i_4wwl25_E138RqGNG6G9roMs6rNVQ&s',
  },
  {
    name: 'oAuth 2.0',
    level: 60,
    Explore: 'Notion Link',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEepgWvs_7Z2rZkQfo1bbXzSK53NFfrqA2w&s',
  },
  {
    name: 'MongoDB',
    level: 55,
    Explore: 'Model & Schema',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*QJnvahq_EBdUGjYQUYrhvA.png',
  },
  {
    name: 'Git & GitHub',
    level: 65,
    Explore: 'Open Profile',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruSg_5SkyOEDkbNBUMv1uHgJvKvqxF2HL3Q&s',
  },
  {
    name: 'Websockets',
    level: 45,
    Explore: 'Explore More',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HEU8EJ6-XNVCKE5PE2n2Lc-Z9lLO7OPnMQ&s',
  },
];

const SkillCard = ({ name, level, Explore, image }) => (
  <div className="w-full sm:w-[47%] md:w-[30%] lg:w-[18%] rounded-2xl bg-[#232323] p-5 shadow-xl hover:shadow-cyan-400/50 transition-all duration-300">
    <img className="w-full h-36 object-cover rounded-xl mb-4" src={image} alt={`${name} logo`} />
    <h2 className="text-xl font-semibold text-white mb-2">{name}</h2>
    <div className="w-full h-3 bg-[#333] rounded-full overflow-hidden mb-4">
      <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${level}%` }}></div>
    </div>
    <button className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-800 to-blue-800 text-white hover:from-cyan-600 hover:to-blue-600 transition duration-300">
      {Explore}
    </button>
  </div>
);

const Resume = () => {
  return (
    <>
      <style>{`
        @keyframes animateBackground {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>

      <div className="bg-[#0D0D0D] min-h-screen w-full p-6">
        {/* Header */}
        <div className="w-full flex justify-center items-center text-center mb-10">
          <h1
            className="text-transparent font-bold font-sans text-9xl"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/person-coding-project-laptop_1079150-36836.jpg')",
              backgroundSize: '400%',
              backgroundPosition: '0 50%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'animateBackground 6s infinite alternate linear',
              fontSize: 'clamp(2rem, 10vw, 6rem)',
            }}
          >
            Technical Skills
          </h1>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} name={skill.name} image={skill.image} level={skill.level} Explore={skill.Explore} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Resume;
