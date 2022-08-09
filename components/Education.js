import React from "react";

const Education = () => {
  return (
    <div className="flex-1 my-20 space-y-8 flex-col container px-10 mx auto text-xl">
      <p className=" text-left font-bold text-base-peach"> EDUCATION </p>
      <div className=" text-left">
        <p className="font-bold text-base-dark">M.S. in Data Analytics</p>
        <a
          href="https://pe.gatech.edu/degrees/analytics"
          className="font-light text-base-light-dark transition-colors hover:text-base-peach"
        >
          Georgia Institute of Technology (current)
        </a>
      </div>
      <div className=" text-left">
        <p className="font-bold text-base-dark">B.S. in Engineering Science</p>
        <a
          href="https://www.esm.psu.edu/academics/undergraduate/engineering-science-major.aspx"
          className="font-light text-base-light-dark transition-colors hover:text-base-peach"
        >
          The Pennsylvania State University
        </a>
      </div>
    </div>
  );
};

export default Education;
