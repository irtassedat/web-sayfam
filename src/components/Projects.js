import React from "react";
import { ProjectsData } from "../../public/Data/ProjectsData";

function Projects() {
  return (
    <div className="container mx-auto bg-white dark:bg-myDarkG dark:text-red py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-medium text-center mb-16">Projects</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {ProjectsData.map((project, index) => {
            return (
              <div
                key={project.name}
                className="flex flex-col w-full md:w-1/2 lg:w-1/3 px-4 gap-5 rounded-xl shadow-lg"
                style={{ backgroundColor: project.backgroundColor, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <h2 className="text-xl text-center font-playfair font-bold mt-6 mb-4">
                    {project.name}
                  </h2>
                  <p className="text-center mb-4">{project.explanation}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.libraries.map((library, libIndex) => {
                      return (
                        <span key={`${project.name}-${library}-${libIndex}`}
                          className="bg-white dark:bg-myDarkG font-playfair font-bold text-sm rounded-full px-5 py-2 mb-2">
                          {library}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex justify-around items-center mb-6">
                    <a href={project.gitHubLink} className="text-blue-600 hover:underline">View on GitHub</a>
                    <a href={project.vercelLink} className="text-blue-600 hover:underline">Go to app →</a>
                  </div>
                </div>
                <img
                  src={project.imgsrc}
                  className="rounded-md mt-2 mb-4 w-full h-auto"
                  alt="Projects"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
