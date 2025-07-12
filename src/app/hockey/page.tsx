"use client";
import React, { useEffect, useState } from "react";
import Headers from "../../components/headers";
import { RiLoader2Line } from "react-icons/ri";

export default function TournamentsTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;

  useEffect(() => {
    const fetchTable = async () => {
      try {
        const res = await fetch(
          "https://thehockeytournamentresource.com/wp-json/wp/v2/pages/70"
        );
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();

        const htmlString = data.content.rendered;
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        const table = doc.querySelector("table");

        if (table) {
          const tableRows = Array.from(
            table.querySelectorAll("tbody tr")
          )
            .map((tr) => {
              const cols = tr.querySelectorAll("td");
              if (cols.length > 0) {
                return {
                  name: cols[0].innerHTML,
                  year: cols[1].textContent,
                  month: cols[2].textContent,
                  start: cols[3].textContent,
                  end: cols[4].textContent,
                };
              }
              return null;
            })
            .filter(Boolean);
          setRows(tableRows);
        } else {
          setRows([]);
        }
      } catch (error) {
        console.error(error);
        setRows([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTable();
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(rows.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

  const handleFirst = () => {
    setCurrentPage(1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleLast = () => {
    setCurrentPage(totalPages);
  };

  return (
    <>
      <Headers />

      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Tournaments Table</h1>

        {loading ? (
          <div className="flex items-center gap-2">
            <RiLoader2Line className="animate-spin" size={24} />
            Loading tournaments...
          </div>
        ) : rows.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-2 border-b">Tournament Name</th>
                  <th className="text-left p-2 border-b">Year</th>
                  <th className="text-left p-2 border-b">Month</th>
                  <th className="text-left p-2 border-b">Start Date</th>
                  <th className="text-left p-2 border-b">End Date</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((row, idx) => (
                  <tr
                    key={indexOfFirstRow + idx}
                    className={
                      (indexOfFirstRow + idx) % 2 === 0
                        ? "bg-white"
                        : "bg-gray-50"
                    }
                  >
                    <td className="p-2 border-b">
                      <span
                        dangerouslySetInnerHTML={{ __html: row.name }}
                      />
                    </td>
                    <td className="p-2 border-b">{row.year}</td>
                    <td className="p-2 border-b">{row.month}</td>
                    <td className="p-2 border-b">{row.start}</td>
                    <td className="p-2 border-b">{row.end}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination controls */}
            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
              <button
                onClick={handleFirst}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${
                  currentPage === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                First
              </button>

              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${
                  currentPage === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Previous
              </button>

              <span className="px-4 py-2">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Next
              </button>

              <button
                onClick={handleLast}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Last
              </button>
            </div>
          </div>
        ) : (
          <p>No tournament data found.</p>
        )}
      </div>
    </>
  );
}
