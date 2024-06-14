const FilterBar = ({ activeFilter, setActiveFilter }) => {
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const calculateLeft = (activeFilter) => {
    switch (activeFilter) {
      case "All":
        return "0%";
      case "office":
        return "11%";
      case "client":
        return "41%";
      case "personal":
        return "62%";
      default:
        return "0%";
    }
  };

  const calculateWidth = (activeFilter) => {
    switch (activeFilter) {
      case "All":
        return "11%";
      case "office":
        return "29%";
      case "client":
        return "23%";
      case "personal":
        return "37%";
      default:
        return "0%";
    }
  };

  return (
    <div>
      {/* For Desktop */}
      <div className="portfolio-filter text-center desktop">
        <div className="button-group">
          <button
            className={`button ${activeFilter === "All" ? "active" : ""}`}
            onClick={() => handleFilterClick("All")}
          >
            All
          </button>
          <button
            className={`button ${activeFilter === "office" ? "active" : ""}`}
            onClick={() => handleFilterClick("office")}
          >
            Work / Office Projects
          </button>
          <button
            className={`button ${activeFilter === "client" ? "active" : ""}`}
            onClick={() => handleFilterClick("client")}
          >
            Clients Projects
          </button>
          <button
            className={`button ${activeFilter === "personal" ? "active" : ""}`}
            onClick={() => handleFilterClick("personal")}
          >
            Personal Practice Projects
          </button>
          <div
            className="active-bg"
            style={{
              left: calculateLeft(activeFilter),
              width: calculateWidth(activeFilter),
            }}
          ></div>
        </div>
      </div>

      {/* For Mobile */}
      <div className="portfolio-filter text-center mobile">
        <select
          id="portfolio-filter"
          name="portfolio-filter"
          className="dropdown"
          value={activeFilter}
          onChange={(e) => handleFilterClick(e.target.value)}
        >
          <option value="All">All</option>
          <option value="office">Work / Office Projects</option>
          <option value="client">Clients Projects</option>
          <option value="personal">Personal Practice Projects</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;