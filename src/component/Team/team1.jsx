import React from "react";
import TeamMem from '../../assets/be.png'
import Team from '../../assets/team.png'
import TT from '../../assets/jj.png'
import KK from '../../assets/kk.png'
import SS from '../../assets/ss.png'
import MM from '../../assets/mi.png'
import TM from './reuseable/teammember'
const team1 = () => {
    const team_mem = [
      {
        image:TeamMem,
        name: "Dr. Sarah Thomas",
        title: "Founder & CEO",
        expertise: "Expertise: Educational Leadership, Policy, and Advocacy.",
        bio: "Bio: With over 15 years in education, Dr. Sarah Thomas founded Innovative Scholars to close the achievement gap and provide struggling students with tailored learning solutions.",
      },
      {
        image:TT ,
        name: "Michael Johnson",
        title: "Director of Tutoring Services",
        expertise: " Expertise: Academic Tutoring, Learning Strategies.",
        bio: " Bio: A certified educator, Michael oversees tutoring programs, ensuring students receive personalized support to boost their academic success.",
      },
      {
        image: KK,
        name: "Adam Lewis",
        title: "Lead Learning Specialis",
        expertise: "Expertise:  Special Education, Learning Disabilities Support.",
        bio: " Bio: Adam develops strategies to assist students with learning challenges, ensuring they receive equal opportunities for success.",
      },
       {
        image: SS,
        name: "Sophia Roberts",
        title: "Head of Student Success Programs",
        expertise: "Expertise: Mentorship, Student Development.",
        bio: " Bio: Sophia leads mentorship initiatives, helping students develop confidence, resilience, and academic motivation.",
      },
      {
        image: MM,
        name: "Jason Miller",
        title: "Parent & Community Outreach Coordinator",
        expertise: "Expertise:  Parent Engagement, Community Building.",
        bio: " Bio: Jason connects families with resources, guiding parents on how to best support their children’s academic growth.",
      },
     
    ];
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-20 mt-7">
    <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-5xl w-full p-10">
      <div className="pl-6 flex flex-row items-center text-4xl sm:text-6xl md:text-7xl font-extrabold mt-5 gap-4">
            <span className="w-auto h-auto flex items-center">
              <img src={Team} className="h-[1.5em] w-auto" alt="Mission" />
            </span>
            <span className="text-gray-300">Member</span>
          </div>
          {team_mem.map((member, index) => (
          <TM
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            expertise={member.expertise}
            bio={member.bio}
          />
        ))}
      </div>
      </div>
    
  );
}

export default team1;
