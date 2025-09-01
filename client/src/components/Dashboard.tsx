"use client";

import { useState } from "react";
import ProjectList from "./ProjectList"; // Add this import

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Smart Workflow Manager</h1>
      
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "projects" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "invoices" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("invoices")}
        >
          Invoices
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "clients" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("clients")}
        >
          Clients
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        {activeTab === "projects" && <ProjectList />} {/* Changed this line */}
        {activeTab === "invoices" && <p>Invoices content goes here...</p>}
        {activeTab === "clients" && <p>Clients content goes here...</p>}
      </div>
    </div>
  );
}
