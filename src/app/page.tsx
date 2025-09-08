"use client";
import { useState } from "react";

export default function Home() {
  const headers = ["Prod", "Hotfix", "QA", "DevInt", "Authoring", "Preview"];
  const apps = {
    Prostore: {
      Prod: "https://www.resideo.com/us/en/pro/pro-store",
      Hotfix: "https://www.hotfix.rde.resideo.com/us/en/pro/pro-store",
      QA: "https://qa2.resideo.com/us/en/pro/pro-store",
      Dev: "",
      Authoring: "",
      Preview: "",
    },
    ProstoreVercel: {
      Prod: "https://prostore-prod2.vercel.app/us/en/pro ",
      Hotfix: "http://prostore-hotfix.vercel.app/us/en/pro",
      QA: "https://prostore-qa.vercel.app/us/en/pro",
      Dev: "https://prostore-dev.vercel.app/us/en/pro",
      Authoring: "",
      Preview: "",
    },
    Resideo: {
      Prod: "https://www.resideo.com/us/en",
      Hotfix: "https://www.hotfix.rde.resideo.com/us/en",
      QA: "https://qwww.r3.rde.resideo.com/us/en/",
      Dev: "",
      Authoring: "https://authoring.resideo.com/us/en",
      Preview: "",
    },
    HoneywellHome: {
      Prod: "https://www.honeywellhome.com/",
      Hotfix: "https://www.hotfix.honeywellhome.com/us/en",
      QA: "",
      Dev: "",
      Authoring: "",
      Preview: "",
    },
    Firstalert: {
      Prod: "https://www.firstalert.com/",
      Hotfix: "https://www.hotfix.firstalert.com/",
      QA: "",
      Dev: "",
      Authoring: "",
      Preview: "",
    },
    FirstalertCA: {
      Prod: "https://www.firstalert.com/ca/en/",
      Hotfix: "https://www.hotfix.firstalert.com/ca/en/",
      QA: "",
      Dev: "",
      Authoring: "https://authoring.firstalert.com/ca/en",
      Preview: "",
    },
    VIP:{
       Prod: "https://vip.resideo.com/pages/usaa-login",
      Hotfix: "",
      QA: "",
      Dev: "",
      Authoring: "",
      Preview: "",
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const filteredApps = Object.entries(apps).filter(([appName]) =>
    appName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredApps.length / rowsPerPage);
  const paginatedApps = filteredApps.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const goToPrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const goToNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Application Links</h1>

      {/* 🔍 Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search app name..."
          className="border border-gray-400 rounded px-4 py-2 w-full max-w-md"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-300 w-full text-black">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">App</th>
              {headers.map((header) => (
                <th key={header} className="border px-4 py-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedApps.map(([appName, envs]) => (
              <tr key={appName}>
                <td className="border px-4 py-2 font-medium">{appName}</td>
                {headers.map((env) => {
                  const url = envs[env as keyof typeof envs];
                  return (
                    <td key={env} className="border px-4 py-2">
                      {url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {env}
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
            {paginatedApps.length === 0 && (
              <tr>
                <td colSpan={headers.length + 1} className="text-center py-4">
                  No apps found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Styled Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-md space-x-2">
            <button
              onClick={goToPrev}
              disabled={currentPage === 1}
              className="text-gray-500 disabled:opacity-30"
            >
              &lt;
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-7 h-7 rounded-full text-sm flex items-center justify-center ${
                    currentPage === page
                      ? "bg-indigo-400 text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="text-gray-500 disabled:opacity-30"
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
