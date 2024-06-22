import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useLanguage } from "../context/LanguageContext";
import data from '../data/data';

function Footer() {
  const { language } = useLanguage();
  const { footer } = data[language];
  const typedRef = useRef(null);
  const elRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [footer.invitation],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    if (elRef.current) {
      typedRef.current = new Typed(elRef.current, options);
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [footer.invitation]);

  return (
    <div className="footer-container container mx-auto bg-white dark:bg-myDarkG dark:text-white flex flex-col items-center pt-24 pb-6 lg:justify-center lg:flex-row">
      <div className="text-4xl font-medium text-center w-1/2 lg:text-center lg:p-6">
        <h3 className="font-playfair relative">
          <span ref={elRef}></span>
        </h3>
      </div>
      <div className="flex flex-col mt-3 font-medium links">
        <a href="https://github.com/irtassedat" className="text-[#1769FF]">{footer.links.github}</a>
        <a href="https://www.linkedin.com/in/sedat-irta%C5%9F-04a441137/" className="text-[#0077B5] linkedin">{footer.links.linkedin}</a>
        <a href="mailto:sedatirtas.1@gmail.com" className="text-[#AF0C48] email">{footer.links.email}</a>
      </div>
    </div>
  );
}

export default Footer;
