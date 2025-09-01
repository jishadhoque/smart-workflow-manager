"use client";

import { useState } from "react";
import { Project } from "@/types";
import ProjectForm from "@/components/ProjectForm";

const mockProjects: Project[] = [
  {
    id: "1",
    clientName: "Acme Corp",
    title: "Website Redesign",
    description: "Complete website redesign with modern UI",
    status: "negotiation",
    budget: 5000,
    timeline: "2 months",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "2", 
    clientName: "XYZ Startup",
    title: "Mobile App Development",
    description: "Build a React Native mobile application",
    status: "approved",
    budget: 12000,
    timeline: "3 months",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

function ProjectList() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [showForm, setShowForm] = useState(false);

  const handleAddProject = (projectData: Omit<Project, "id" | "createdAt" | "updatedAt">) => {
    const newProject: Project = {
      ...projectData,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setProjects(prev => [...prev, newProject]);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Projects</h2>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          + Add Project
        </button>
      </div>

      {showForm ? (
        <ProjectForm 
          onSubmit={handleAddProject} 
          onCancel={() => setShowForm(false)} 
        />
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
              <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
              <p className="text-gray-600 font-medium">{project.clientName}</p>
              <p className="text-sm text-gray-500 mt-2">{project.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === "approved" ? "bg-green-100 text-green-800" :
                  project.status === "negotiation" ? "bg-yellow-100 text-yellow-800" :
                  project.status === "draft" ? "bg-blue-100 text-blue-800" :
                  project.status === "sent" ? "bg-purple-100 text-purple-800" :
                  project.status === "rejected" ? "bg-red-100 text-red-800" :
                  "bg-gray-100 text-gray-800"
                }`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
                <div className="text-right">
                  <span className="font-bold text-lg text-gray-900">${project.budget.toLocaleString()}</span>
                  <p className="text-sm text-gray-500">{project.timeline}</p>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  Created: {project.createdAt.toLocaleDateString('en-US',{
                    year : 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectList;  // This is the crucial line!
