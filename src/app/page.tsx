"use client";
import { useState } from "react";

export default function Home() {
  const headers = ["Prod", "Hotfix", "QA", "Dev", "Authoring", "Preview"];
const apps = {
  "Prostore(Pro-Sitecore XM cloud)": {
    Prod: "https://www.resideo.com/us/en/pro/pro-store/air/services/pro-iq-engage/p/hh06",
    Hotfix: "https://www.hotfix.rde.resideo.com/us/en/pro/pro-store",
    QA: "https://qa2.resideo.com/us/en/pro/pro-store",
    Dev: "",
    Authoring: "",
    Preview: "",
  },
  "Resideo.com(Marketing-SitecoreXP)": {
    Prod: "https://www.resideo.com/us/en",
    Hotfix: "https://www.hotfix.rde.resideo.com/us/en",
    QA: "https://qwww.r3.rde.resideo.com/us/en/",
    Dev: "",
    Authoring: "https://authoring.resideo.com/us/en",
    Preview: "",
  },
  "EMEA(Marketing-SitecoreXP)": {
    Prod: "https://www.resideo.com/emea/en/",
    Hotfix: "https://www.hotfix.rde.resideo.com/emea/en/",
    QA: "",
    Dev: "",
    Authoring: "https://authoring.resideo.com/emea/en/",
    Preview: "https://preview.resideo.com/emea/en/",
  },
  "GridServices(Marketing-SitecoreXP)": {
    Prod: "https://www.resideogridservices.com/resideo-grid-services",
    Hotfix: "https://hotfix.resideogridservices.com/resideo-grid-services",
    QA: "",
    Dev: "",
    Authoring: "",
    Preview: "",
  },
  "ConnectedSavings(Marketing-SitecoreXP)": {
    Prod: "https://www.connectedsavings.com/",
    Hotfix: "https://www.hotfix.connectedsavings.com/",
    QA: "https://www.r3.connectedsavings.com/",
    Dev: "",
    Authoring: "https://authoring.connectedsavings.com/",
    Preview: "https://preview.connectedsavings.com/",
  },
   "ProUnauthenticated(Pro-SitecoreXP)": {
    Prod: "https://www.resideo.com/us/en/pro/",
    Hotfix: "http://www.hotfix.rde.resideo.com/us/en/pro/",
    QA: "https://www.r3.rde.resideo.com/us/en/pro/",
    Dev: "",
    Authoring: "",
    Preview: "",
  },
  "BRKElectronics(Marketing-SitecoreXP)": {
    Prod: "https://www.brkelectronics.com/us/en/",
    Hotfix: "https://www.hotfix.brkelectronics.com/us/en/",
    QA: "https://www.r3.brkelectronics.com/us/en/",
    Dev: "",
    Authoring: "https://authoring.brkelectronics.com/us/en/",
    Preview: "https://preview.brkelectronics.com/us/en/",
  },
   "FirstalertCA(eComm-SitecoreXP)": {
    Prod: "https://www.firstalert.ca/ca/en/",
    Hotfix: "https://www.hotfix.firstalert.ca/ca/en/",
    QA: "",
    Dev: "",
    Authoring: "https://authoring.firstalert.com/ca/en",
    Preview: "",
  },
  "HoneywellHome(eComm-Shopify)": {
    Prod: "https://www.honeywellhome.com/",
    Hotfix: "https://hotfix.honeywellhome.com/",
    QA: "https://www.qa.honeywellhome.com",
    Dev: "",
    Authoring: "",
    Preview: "",
  },
  "Firstalert(eComm-Shopify)": {
    Prod: "https://www.firstalert.com/",
    Hotfix: "https://www.hotfix.firstalert.com/",
    QA: "https://qa.firstalert.com/",
    Dev: "",
    Authoring: "",
    Preview: "",
  },
  "VIP(Private Store-Shopify)": {
    Prod: "https://vip.resideo.com/pages/usaa-login",
    Hotfix: "https://hotfix.vip.resideo.com/",
    QA: "https://qa.vip.resideo.com/",
    Dev: "",
    Authoring: "",
    Preview: "",
  },
   "USAA(Private Store-Shopify)": {
    Prod: "https://www.usaa.com/my/logon?goto=https%3A%2F%2Fwww.usaa.com%2Finet%2Fwc%2Fnew_web_application_redirect%3Flevel%3D2%26destination%3D%252Futils%252Fproof-of-immigration%253Fredirect%253DRESIDEO_DIR%2526akredirect%253Dtrue%2526redirectedFromAuth%253Dtrue",
    Hotfix: "",
    QA: "",
    Dev: "",
    Authoring: "",
    Preview: "",
  },
   "Nationwide(Private Store-Shopify)": {
    Prod: "nationwide.resideo.com",
    Hotfix: "",
    QA: "http://www.r3.rde.resideo.com/emea/en/",
    Dev: "",
    Authoring: "",
    Preview: "",
  },
  "EmployeePortal(Internal Store-Shopify)": {
    Prod: "https://employee.resideo.com/",
    Hotfix: "",
    QA: "",
    Dev: "",
    Authoring: "",
    Preview: "",
  },
  "B2B(eComm-Sharepoint)": {
    Prod: "https://customer.resideo.com/en-US/Pages/default.aspx",
    Hotfix: "",
    QA: "https://qa-customer.resideo.com/en-US/Pages/default.aspx",
    Dev: "https://dev-customer.resideo.com",
    Authoring: "",
    Preview: "",
  },
  'Homecomfort(eComm-Sharepoint)': {
    Prod: "https://homecomfort.resideo.com/sites/europe/en-gb/Pages/default.aspx",
    Hotfix: "",
    QA: "https://qa-homecomfort.resideo.com/sites/europe/en-GB/Pages/Honeywell_EES_Europe.aspx",
    Dev: "https://dev-homecomfort.resideo.com/sites/europe/en-GB/Pages/Honeywell_EES_Europe.aspx",
    Authoring: "",
    Preview: "",
  },
   "Nationwide(Private Store)": {
    Prod: "https://vip.resideo.com/collections/nationwide?uniqueid=12345",
    Hotfix: "",
    QA: "",
    Dev: "",
    Authoring: "",
    Preview: "",
  },
};

  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = Object.entries(apps).filter(([appName]) =>
    appName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
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
            {filteredApps.map(([appName, envs]) => (
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
            {filteredApps.length === 0 && (
              <tr>
                <td colSpan={headers.length + 1} className="text-center py-4">
                  No apps found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
