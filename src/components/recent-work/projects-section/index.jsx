import React, { useEffect, useMemo } from "react";
import abiba from "../../../assets/images/adiba.png";
import toyama from "../../../assets/images/toyama.png";
import bbs from "../../../assets/images/bbs.png";
import bodhi from "../../../assets/images/bodhi.png";
import hasanMagic from "../../../assets/images/hasanMagic.png";
import hiloGame from "../../../assets/images/hiloGame.png";
import eComm from "../../../assets/images/eComm.png";
import millenium from "../../../assets/images/millenium.png";
import { BsArrowUpRight } from "react-icons/bs";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

// npm install react-lazy-load-image-component
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const projects = [
  {
    id: 1,
    title: "Adiba",
    description: "Project was about precision and information.",
    link: "https://dev.adiba.ai/",
    image: abiba,
    category: "office",
  },
  {
    id: 2,
    title: "Toyama",
    description: " Geographic Information System (GIS) platform",
    link: "https://www.vultus.se/",
    image: toyama,
    category: "office",
  },
  {
    id: 3,
    title: "BBS Group of College",
    description:
      "Next.js College App and a Strapi backend for a powerful Admin Panel",
    link: "https://bbs.ac.in/",
    image: bbs,
    category: "client",
  },
  {
    id: 4,
    title: "Bodhi Charity",
    description: "Charity App with Admin Panel",
    link: "https://bodhicharity.org/",
    image: bodhi,
    category: "client",
  },
  {
    id: 5,
    title: "Hasan Web Magic",
    description: "Magician's App with Particle Background",
    link: "https://hasanrizvimagic.com/",
    image: hasanMagic,
    category: "client",
  },
  {
    id: 6,
    title: "HI-LO | THE GAME",
    description: "The Game App Test your card prediction skills",
    link: "https://hi-lo-the-game.vercel.app/",
    image: hiloGame,
    category: "personal",
  },
  {
    id: 7,
    title: "Minimalist E-Commerse",
    description: "React e-commerce app, enhanced with Redux Toolkit",
    link: "https://shop-fusion-six.vercel.app/",
    image: eComm,
    category: "personal",
  },
  {
    id: 8,
    title: "Little Millenium School",
    description:
      "Website is an online platform that enables users explore schools online, contact ",
    link: "https://little-millenium-nursey-school.vercel.app/",
    image: millenium,
    category: "personal",
  },
];

const ProjectsSection = ({
  activeFilter,
  currentPage,
  setCurrentPage,
  itemsPerPage,
}) => {
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (activeFilter === "All") return true;
      return project.category === activeFilter;
    });
  }, [activeFilter]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages, setCurrentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="projectSection-main">
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <CiCircleChevLeft />
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <CiCircleChevRight />
        </button>
      </div>
      <div className="projects-section">
        {currentProjects.map((project) => (
          <div
            className="portfolio-item"
            key={project.id}
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="image-box">
              <LazyLoadImage
                src={project.image}
                alt={project.title}
                effect="blur"
              />
            </div>
            <div className="content-box">
              <div>
                <h3 className="portfolio-title">{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <a href={project.link} target="_blank" referrerPolicy="no">
                <BsArrowUpRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
