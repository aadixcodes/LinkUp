
'use client';

import React, { useState } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Academia = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedView, setSelectedView] = useState("All Companies");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("All Companies");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("All Industries");

  const sidebarItems = [
    "All Industries",
    "Recruit Students",
    "Industry Level Projects",
    "Project Funding",
    "Research On Real World Projects",
  ];

  const companies = [
    { name: "Apple", domain: "apple.com", tags: ["B2B", "B2C", "Technology"] },
    { name: "Github", domain: "github.com", tags: ["B2B", "Technology"] },
    {
      name: "Google",
      domain: "google.com",
      tags: ["B2B", "B2C", "Broadcasting", "Internet"],
    },
    {
      name: "Gmail",
      domain: "gmail.com",
      tags: ["B2B", "B2C", "Broadcasting", "Internet"],
    },
    {
      name: "Microsoft",
      domain: "microsoft.com",
      tags: ["B2B", "Enterprise", "Publishing", "Internet"],
    },
    {
      name: "Paypal",
      domain: "paypal.com",
      tags: ["B2C", "Finance", "Financial", "Internet"],
    },
    {
      name: "Twitter",
      domain: "x.com",
      tags: ["B2B", "B2C", "Internet", "Information"],
    },
    {
      name: "Airbnb",
      domain: "airbnb.com",
      tags: ["B2B", "B2C", "Marketplace", "Internet"],
    },
    {
      name: "Intercom",
      domain: "intercom.com",
      tags: ["B2B", "E-Commerce", "B2C", "Internet"],
    },
    {
      name: "Disney",
      domain: "disney.com",
      tags: ["B2C", "Consumer Disc.", "E-Comm"],
    },
  ];

  const mentors = [
    {
      name: "Sophie Chamberlain",
      role: "Specialized Support",
      img: "/assets/images/img.png",
      tags: ["Specialized Support"],
    },
    {
      name: "John Doe",
      role: "Technical Mentor",
      img: "/assets/images/img.png",
      tags: ["Technical"],
    },
    {
      name: "Emma Smith",
      role: "Business Advisor",
      img: "/assets/images/img.png",
      tags: ["Business"],
    },
    {
      name: "Michael Johnson",
      role: "Career Coach",
      img: "/assets/images/img.png",
      tags: ["Career"],
    },
    {
      name: "Sarah Brown",
      role: "Research Mentor",
      img: "/assets/images/img.png",
      tags: ["Research"],
    },
  ];

  const students = [
    {
      name: "Alice Johnson",
      completedProjects: 5,
      rank: 1,
      placedInCompany: "Google",
      salary: "₹20 LPA",
    },
    {
      name: "Bob Smith",
      completedProjects: 3,
      rank: 2,
      placedInCompany: "Microsoft",
      salary: "₹18 LPA",
    },
    {
      name: "Charlie Brown",
      completedProjects: 4,
      rank: 3,
      placedInCompany: "Amazon",
      salary: "₹19 LPA",
    },
  ];

  const projects = [
    {
      title: "AI for Sustainable Agriculture",
      description: "Developing AI models to optimize water and fertilizer use in farming.",
      img: "/assets/images/img.png",
      tags: ["AI", "Agriculture", "Sustainability"],
      participating_companies: "AgroTech, SmartFarms",
      student_teams: ["Team GreenTech", "Team AgriAI"],
      ongoing_status: "In Progress",
      results: "Initial tests show 30% water savings in pilot farms."
    },
    {
      title: "Smart Grid Management System",
      description: "A real-time monitoring system for managing energy distribution in smart grids.",
      img: "/assets/images/img.png",
      tags: ["Energy", "Smart Grids", "Renewable"],
      participating_companies: "EnergyCorp, SolarTech",
      student_teams: ["Team PowerGrid", "Team EnergyFlow"],
      ongoing_status: "Completed",
      results: "Increased energy efficiency by 20% in pilot regions."
    },
  ];

  const fundingSources = [
    {
      source_name: "National Science Foundation (NSF)",
      img: "/assets/images/img.png",
      tags: ["Academic Funding", "Research Grants"],
      application_deadline: "December 15, 2024",
      eligibility_criteria: "Open to faculty and research scholars in the field of STEM."
    },
    {
      source_name: "Tech Innovators Fund",
      img: "/assets/images/img.png",
      tags: ["Industry Funding", "Startup Support"],
      application_deadline: "March 30, 2024",
      eligibility_criteria: "Open to student teams and startups working on technology innovations."
    },
  ];

  const researchCollaborations = [
    {
      field: "Artificial Intelligence",
      img: "/assets/images/img.png",
      tags: ["AI", "Machine Learning"],
      current_collaboration: "Partnering with Google Research on deep learning applications in healthcare.",
      ongoing_projects: ["AI for Diagnostics", "AI for Drug Discovery"]
    },
    {
      field: "Sustainable Energy",
      img: "/assets/images/img.png",
      tags: ["Energy", "Sustainability"],
      current_collaboration: "Collaborating with SolarTech on energy-efficient solar panels.",
      ongoing_projects: ["Smart Grids", "Energy Storage Optimization"]
    },
  ];

  const filterOptions = [
    "All Companies",
    "B2B Companies",
    "B2C Companies",
    "Broadcasting",
    "Technology",
    "Internet",
  ];
  const mentorFilterOptions = [
    "All Mentors",
    "Specialized Support",
    "Technical",
    "Business",
    "Career",
    "Research",
    "Industry",
    "Startup",
  ];

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedFilter === "All Companies" ||
        company.tags.includes(selectedFilter.replace(" Companies", "")))
  );

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedFilter === "All Mentors" ||
        (mentor.tags && mentor.tags.includes(selectedFilter)))
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarItemClick = (item) => {
    setActiveSection(item);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderContent = () => {
    const renderSearchAndFilter = () => (
      <div className="flex flex-wrap items-center mb-4 space-x-4">
        <div className="relative flex-1 min-w-[200px] mb-2">
          <input
            type="text"
            placeholder={`Search ${activeSection}`}
            className="w-full p-2 pl-10 border rounded text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>

        <div className="relative mb-2">
          <button
            className="flex items-center space-x-2 bg-white p-2 rounded border text-lg"
            onClick={toggleDropdown}
          >
            <Filter size={20} />
            <span>{selectedFilter}</span>
            <ChevronDown size={20} />
          </button>

          {/* Dropdown options */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded shadow-lg z-10">
              {(activeSection === "Mentors"
                ? mentorFilterOptions
                : filterOptions
              ).map((option, index) => (
                <button
                  key={index}
                  className="w-full text-left p-2 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedFilter(option);
                    setIsDropdownOpen(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );

    switch (activeSection) {
      case "All Industries":
        return (
          <div className="">
            {renderSearchAndFilter()}
            <div
              className="overflow-x-auto"
              style={{ maxHeight: "calc(100vh - 250px)" }}
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left text-lg">Company</th>
                    <th className="p-4 text-left text-lg">Domains</th>
                    <th className="p-4 text-left text-lg">Website Link</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCompanies.map((company, index) => (
                    <tr
                      key={index}
                      className="border-t hover:bg-gray-50 bg-white rounded-lg shadow overflow-hidden"
                    >
                      <td className="p-4 flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <span className="text-lg">{company.name}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-2">
                          {company.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                tag === "B2B"
                                  ? "bg-blue-100 text-blue-800"
                                  : tag === "B2C"
                                  ? "bg-green-100 text-green-800"
                                  : tag === "Technology"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-gray-200 text-gray-800"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 text-blue-500 text-lg">
                        <a
                          href={`https://${company.domain}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {company.domain}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "Mentors":
        return (
          <div className="">
            {renderSearchAndFilter()}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredMentors.map((mentor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={mentor.img} alt={mentor.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{mentor.name}</h3>
                    <p className="text-sm text-gray-600">{mentor.role}</p>
                    <button className="mt-2 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
                      Ask for advice
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Recruit Students":
        return (
          <div className="">
            {renderSearchAndFilter()}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {students.map((student, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-semibold">{student.name}</h3>
                  <p className="text-sm text-gray-600">Completed Projects: {student.completedProjects}</p>
                  <p className="text-sm text-gray-600">Rank: {student.rank}</p>
                  <p className="text-sm text-gray-600">Placed in: {student.placedInCompany}</p>
                  <p className="text-sm text-gray-600">Salary: {student.salary}</p>
                  <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
                    Contact
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "Industry Level Projects":
        return (
          <div className="">
            {renderSearchAndFilter()}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                  <img
                    src={project.img}
                    alt=""
                    className="w-[100px] h-[100px] rounded-full"
                  />
                  <h3 className="text-lg font-semibold "><span className="font-bold" >Title :- </span>{project.title}</h3>
                  <p className="text-sm text-gray-600"><span className="font-bold">Description :- </span>{project.description}</p>
                  <p className="text-sm text-gray-600"><span className="font-bold">Participating Companies :- </span>{project.participating_companies}</p>
                  <p className="text-sm text-gray-600"><span className="font-bold">Student Teams :- </span>{project.student_teams}</p>
                  <p className="text-sm text-gray-600"><span className="font-bold">OnGoing Status :- </span>{project.ongoing_status}</p>
                  <p className="text-sm text-gray-600" ><span className="font-bold">Result :- </span>{project.results}</p>
                  <div className="mt-2 space-x-2">
                    <button className="bg-[#04141e] hover:bg-[#042438] text-white py-2 px-4 rounded  transition-colors">
                      Join Project
                    </button>
                    <button className="bg-[#07633c] hover:bg-[#128958] text-white py-2 px-4 rounded  transition-colors">
                      Submit Proposal
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Project Funding":
        return (
          <div className="">
            {renderSearchAndFilter()}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {fundingSources.map((funding, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                  <img
                    src={funding.img}
                    alt=""
                    className="w-[100px] h-[100px] rounded-full"
                  />
                  <h3 className="text-lg font-semibold">{funding.source_name}</h3>
                  <p className="text-sm text-gray-600">
                    Deadline: {funding.application_deadline}
                  </p>
                  <p className="text-sm text-gray-600">
                    Eligibility: {funding.eligibility_criteria}
                  </p>
                  <button className="mt-2 w-full  text-white py-2 rounded bg-[#04141e] hover:bg-[#042438] transition-colors">
                    Apply for Funding
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "Research On Real World Projects":
        return (
          <div className="">
            {renderSearchAndFilter()}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {researchCollaborations.map((collab, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                  <img
                    src={collab.img}
                    alt=""
                    className="w-[100px] h-[100px] rounded-full"
                  />
                  <h3 className="text-lg font-semibold">{collab.field}</h3>
                  <p className="text-sm text-gray-600">
                    Opportunity: {collab.current_collaboration}
                  </p>
                  <p className="text-sm text-gray-600">
                    Project: {collab.ongoing_projects}
                  </p>
                  <button className="mt-2 w-full  text-white py-2 rounded bg-[#04141e] hover:bg-[#042438] transition-colors">
                    Join Research
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-[#eaefee] text-[#04141e]">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-0"
        } bg-[#04141e] text-white p-4 transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <h2 className="text-4xl font-bold mb-6">Industries</h2>
        <div className="space-y-2">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`w-full text-left p-2 rounded text-lg ${
                item === activeSection
                  ? "bg-[#07633c] text-white"
                  : "hover:bg-[#0a8f56]"
              }`}
              onClick={() => handleSidebarItemClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          <span>Aditya Patel</span>
        </div>
      </div>

      {/* Sidebar toggle button */}
      <button
        className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-[#04141e] text-white p-2 rounded-r-md"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </button>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-hidden">
        <h1 className="text-4xl font-bold mb-6">{activeSection}</h1>

        {/* Dynamic content based on active section */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Academia;

