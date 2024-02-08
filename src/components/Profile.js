import React from "react";
import data from '../Data/data.js'; // data.js dosyasını import et
import { useLanguage } from '../context/LanguageContext'; // useLanguage hook'unu import et


function Profile() {
    const { language } = useLanguage(); // Aktif dili al
    const { profile } = data[language]; // Aktif dildeki profile bilgilerini al
  return (
    <div className="container mx-auto dark:bg-myDarkC bg-header pt-[25px] pb-[72px] ">
      <h2 className="dark:text-white text-3xl text-center p-16">{profile.titlee}</h2>
      <div className="flex flex-col items-center gap-[64px] lg:flex-row justify-center">
        <div className="bg-white dark:bg-darkPi dark:text-white p-4 w-2/3 rounded-xl shadow-[8px_9px_rgba(82,82,82,0.5)] lg:max-w-[500px] lg:pl-[41px] lg:py-[36px]">
          <div className="text-medium text-[#ea2678] mb-8">{profile.infoms}</div>
          <div className="flex flex-col gap-[22px]">
                {profile.information.map((info, index) => (
              <div key={index} className="flex flex-col text-base lg:flex-row">
                <p className="w-2/3 font-semibold">{info.label}</p>
                <p className="w-3/5">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" dark:text-white flex flex-col w-2/3 gap-[20px] p-[9px] lg:w-1/3 lg:pt-9">
          <div className="font-playfair text-medium relative pl-[2px] after:content-[''] after:bg-[#82BBFF] after:block after:absolute after:rounded after:w-[90px] after:h-[18px] after:-z-50 after:right-40 after:top-5 after:left-0">
           {profile.aboutMe}
          </div>
          <p className="text-base">
           {profile.introText}
          </p>
          <p className="text-base">
          {profile.purposeText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
