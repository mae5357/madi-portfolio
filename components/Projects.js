import React from "react";

const Projects = () => {
  return (
    <div className="flex-1 my-20 space-y-8 flex-col container px-10 mx auto text-xl">
      <p className=" text-left font-bold text-base-peach"> PROJECTS </p>
      <div className=" text-left">
        <p className="font-bold text-base-dark">
          Cancer Cell Sample Visualization using T-SNE
        </p>
        <a
          href="https://github.com/mae5357/notebooks/blob/main/notebooks/cancer-tsne.ipynb"
          className="font-light text-base-light-dark transition-colors hover:text-base-peach"
        >
          I wanted to explore the mechanics behind the dimentionality reduction
          tool “t-SNE”. To demonstrate through a real-life example, I used the
          NKI Breast Cancer dataset which contains 273 samples of over 1000 gene
          attributes. I was able to use t-SNE to plot these samples in 2D.
        </a>
      </div>
      <div className=" text-left">
        <p className="font-bold text-base-dark">Sports Scores Twitter Bot</p>
        <a
          href="https://twitter.com/thesportchirp"
          className="font-light text-base-light-dark transition-colors hover:text-base-peach"
        >
          I enjoy following the English Premier League, but I found it hard to
          keep up with all the games. I created a simple feed that shows the
          scores from the weekend, ordering the suprising results first. Now,
          I'm working to make this data public in a twitter API.
        </a>
      </div>
    </div>
  );
};

export default Projects;
