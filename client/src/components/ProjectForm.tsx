"use client";

import { useState } from "react";
import { Project } from "@/types";

interface ProjectFormProps {
  onSubmit: (project: Omit<Project, "id" | "createdAt" | "updatedAt">) => void;
  onCancel: () => void;
}

function ProjectForm({ onSubmit, onCancel }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    clientName: "",
    title: "",
    description: "",
    status: "draft" as const,
    budget: 0,
    timeline: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "budget" ? Number(value) : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 border rounded-lg bg-white">
      <h3 className="text-xl font-semibold text-gray-900">Add New Project</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
        <input
          type="text"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
          placeholder="Enter client name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
          placeholder="Enter project title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          required
          placeholder="Describe the project..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Budget ($)</label>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
          placeholder="0"
          min="0"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
        <input
          type="text"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., 2 months"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="draft">Draft</option>
          <option value="sent">Sent</option>
          <option value="negotiation">Negotiation</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="flex space-x-3 pt-4">
        <button 
          type="submit" 
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Create Project
        </button>
        <button 
          type="button" 
          onClick={onCancel} 
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
