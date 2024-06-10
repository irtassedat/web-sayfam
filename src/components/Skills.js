import React from "react";
import { useLanguage } from '../context/LanguageContext';
import { SkillsData } from "../data/SkillsData";
import data from '../data/data'; // Ensure you have this import for accessing other data if needed

function Skills() {
  const { language } = useLanguage(); // Use the custom hook to access current language
  const skillsTitle = data[language].skillsTitle; // Access the title based on current language

  return (
    <div className="container mx-auto flex flex-col pt-20 pb-12 items-center bg-white text-center dark:bg-myDarkG">
      <h1 className="dark:text-white text-4xl mb-12">{skillsTitle}</h1>
      <div className="flex flex-wrap flex-col gap-12 lg:flex-row">
        {SkillsData.map((skill, index) => {
          return (
            <div key={skill.id} className="flex flex-col items-center gap-1">
              <img
                className="rounded-md bg-contain"
                src={skill.imgsrc}
                alt={skill.name}
              />
              <p className="dark:text-white text-medium text-neutral-500 mt-1 pb-8">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
      {/* Add SVG images here, ensure the paths are correct based on your public folder structure */}
      <img
        src="/svg/Rectangle_22.svg"
        alt=""
        className="relative top-[130px] right-[710px] hidden sm:block "
      />
      <img
        src="/svg/Ellipse_12.svg"
        alt=""
        className="relative top-[130px] left-[730px] hidden sm:block"
      />
    </div>
  );
}

export default Skills;
