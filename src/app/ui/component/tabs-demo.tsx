"use client";

import { useState } from "react";

export default function TabsDemo() {
  const [activeTab, setActiveTab] = useState("html");

  return (
    <div className="mt-3">
      <div className="rounded-lg border shadow-sm">
        {/* Tab Header */}
        <div className="border-b bg-white px-4 pb-0">
          <div className="flex gap-4" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === "html"}
              onClick={() => setActiveTab("html")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "html"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              HTML
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "css"}
              onClick={() => setActiveTab("css")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "css"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              CSS
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          <div
            role="tabpanel"
            className={activeTab === "html" ? "block" : "hidden"}
          >
            <pre className="rounded bg-gray-50 p-4">
              <code className="text-sm text-gray-800">{`<div class="image image-overlay"></div>`}</code>
            </pre>
          </div>
          <div
            role="tabpanel"
            className={activeTab === "css" ? "block" : "hidden"}
          >
            <pre className="rounded bg-gray-50 p-4">
              <code className="text-sm text-gray-800">{`body {
  > section,
  > footer {
    position: relative;
    margin: 0 auto;
    padding: 6.25rem 0;
    overflow: hidden;
  }
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
