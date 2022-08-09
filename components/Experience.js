import React from "react";

const Experience = () => {
  return (
    <div className="flex-1 space-y-8 flex-col container px-10 mx auto text-xl">
      <p className=" text-right font-bold text-base-peach"> EXPERIENCE </p>
      <div className=" text-right">
        <p className="font-bold text-base-dark">Founding Data Scientist @</p>
        <a
          href="https://perygee.com/"
          className="font-light text-base-light-dark transition-colors hover:text-base-peach"
        >
          Perygee
        </a>
      </div>
      <div className=" text-right">
        <p className="font-bold text-base-dark">Data Science Intern @</p>
        <a
          href="https://www.tempoautomation.com/"
          className="font-light text-base-light-dark transition-colors hover:text-base-peach"
        >
          Tempo Automations
        </a>
      </div>
      <div className=" text-right">
        <p className="font-bold text-base-dark">
          Process Engineering Intern/Co-op @
        </p>
        <a
          href="https://www.qorvo.com/"
          className="font-light text-base-light-dark transition-colors hover:text-base-peach"
        >
          Qorvo
        </a>
      </div>
      <div className=" text-right">
        <p className="font-bold text-base-dark">Web App developer @</p>
        <a
          href="https://www.midcentralenergy.com/"
          className="font-light text-base-light-dark transition-colors hover:text-base-peach"
        >
          Mid Central Energy
        </a>
      </div>
      <div className=" text-right">
        <p className="font-bold text-base-dark">Bio-Electronic Researcher @</p>
        <a
          href="https://sites.psu.edu/ebrahimilab/"
          className="font-light text-base-light-dark transition-colors hover:text-base-peach"
        >
          E-Bio-Electronics Lab
        </a>
      </div>
      <div className=" text-right">
        <p className="font-bold text-base-dark">
          Undergraduate Research Assistant @
        </p>
        <a
          href="https://www.internships.giant-grenoble.org/"
          className="font-light text-base-light-dark transition-colors hover:text-base-peach"
        >
          French Alternative Energies and Atomic Energy Commission
        </a>
      </div>
    </div>
  );
};

export default Experience;
