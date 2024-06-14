import { useState, useCallback } from "react";
import FilterBar from "./filter-bar";
import "./styles.scss";
import ProjectsSection from "./projects-section";

const RecentWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const handleFilterClick = useCallback((filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  }, []);

  return (
    <div className="recent-container padding-top" id="projects">
      <div className="container">
        <h1
          className="main-heading-purple"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          My Recent Works
        </h1>
        <FilterBar
          activeFilter={activeFilter}
          setActiveFilter={handleFilterClick}
        />
        <ProjectsSection
          activeFilter={activeFilter}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default RecentWork;
