

const ProjectCard = ({ projectName, companyName, paidStatus, teamSize }) => (
    <div className="border border-[#04141e] rounded-lg p-4 flex flex-col items-center">
      <div className="w-full h-40 bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-[#04141e] relative overflow-hidden">
        <img
          src="/assets/images/linkup.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <p className="text-lg font-semibold mb-1">{projectName}</p>
      <p className="text-sm mb-1">{companyName}</p>
      <p className="text-sm mb-1">{paidStatus}</p>
      <p className="text-sm mb-3">Team Size: {teamSize}</p>
      <button className="bg-[#07633c] hover:bg-[#128958] border border-[#04141e] text-[#04141e] px-10 py-1 rounded-full hover:text-black transition-colors">
        Apply
      </button>
    </div>
  );

const Projects = () => {
    const projects = [
        { projectName: "AI Assistant", companyName: "Tech Innovators", paidStatus: "Paid", teamSize: 8 },
        { projectName: "E-commerce Platform", companyName: "ShopHub", paidStatus: "Unpaid", teamSize: 5 },
        { projectName: "Mobile Fitness App", companyName: "FitTrack", paidStatus: "Paid", teamSize: 6 },
        { projectName: "Social Media Analytics", companyName: "DataWave", paidStatus: "Unpaid", teamSize: 4 },
        { projectName: "Blockchain Voting System", companyName: "CryptoGov", paidStatus: "Paid", teamSize: 7 },
        { projectName: "Smart City Dashboard", companyName: "UrbanTech", paidStatus: "Unpaid", teamSize: 9 },
        { projectName: "Virtual Reality Classroom", companyName: "EduVision", paidStatus: "Paid", teamSize: 12 },
        { projectName: "Food Delivery App", companyName: "MealMate", paidStatus: "Unpaid", teamSize: 6 },
      ];
      

  return (
    <div className="min-h-screen bg-[#eaefee] text-[#04141e] p-8">
      
      <h2 className="text-7xl font-bold text-center mb-8">Find Projects</h2>
      
      <div className="flex justify-between mb-8">
        <input
          type="text"
          placeholder="Search"
          className="w-2/3 px-4 py-2 bg-transparent border-[2px] border-[#04141e] rounded-lg"
        />
        <button className="px-6 py-2 bg-transparent hover:bg-[#128958] border-[2px] border-[#04141e] rounded-lg  hover:text-black transition-colors">
          Filter
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
