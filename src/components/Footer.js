import React from "react";
import { useLanguage } from "../context/LanguageContext";
import data from '../Data/data';

function Footer() {
  const { language } = useLanguage();
  const { footer } = data[language]; // Seçili dilde footer verilerini çekiyoruz

  return (
    <div className="container mx-auto bg-white dark:bg-myDarkG dark:text-white flex flex-col items-center pt-24 pb-6 lg:justify-center lg:flex-row">
      <div className="text-4xl font-medium text-center w-1/2 lg:text-center lg:p-6">
        <h3 className="font-playfair relative after:content-[''] after:bg-[#82BBFF] after:block after:absolute after:w-[275px] after:h-[18px] after:opacity-65 after:right-6 after:top-3 after:left-2">
          {footer.invitation}
        </h3>
      </div>
      <div className="flex flex-col mt-3 font-medium">
        <a href="#" className="text-[#1769FF]">{footer.links.github}</a>
        <a href="#" className="dark:text-white text-[#0A0A14]">{footer.links.blog}</a>
        <a href="#" className="text-[#0077B5]">{footer.links.linkedin}</a>
        <a href="#" className="text-[#AF0C48]">{footer.links.email}</a>
      </div>
      {/* SVG dosyalarınızı burada ekleyin */}
    
    </div>
  );
}

export default Footer;
