import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpg";

const About = () => {
  return (
    <div className="container px-4 mx min-h-screen item-center auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4  flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12">
          <h1 className="text-5xl font-bold text-base-dark lg:text-5xl">
            Hi, I'm Madi.
          </h1>
          <div className="mt-6 text-lg text-base-dark">
            <p className="mb-4">
              I’m an engineer turned data scientist and developer. I like
              building models, products, and tools that help others.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            // todo: why so blurry?
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={300}
            height={300}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
