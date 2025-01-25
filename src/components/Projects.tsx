import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects">
    <div className="mx-auto  text-center p-6 dark:bg-gray-900 max-w-full">
      <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-3xl">
        Projects
      </h2>
      <div className="gr mx-auto max-w-3xl items-stretch space-y-4 text-left sm:flex sm:space-y-0 sm:space-x-8 sm:text-center">
        <a
          className="project hidden"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32"
            src="https://swiperjs.com/images/projects/framework7.svg"
            alt="Framework7"
          />
          <div>
            <div className="font-semibold text-black dark:text-white sm:mt-4 sm:mb-2">Framework7</div>
            <div className="text-sm opacity-75">
              Full featured framework for building iOS, Android &amp; desktop apps
            </div>
          </div>
        </a>
        <a
          className="project hidden"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32"
            src="https://swiperjs.com/images/projects/atropos.svg"
            alt="Atropos"
          />
          <div>
            <div className="font-semibold text-black dark:text-white sm:mt-4 sm:mb-2">Atropos</div>
            <div className="text-sm opacity-75">Stunning touch-friendly 3D parallax hover effects</div>
          </div>
        </a>
        <a
          className="project hidden"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32"
            src="https://swiperjs.com/images/projects/konsta.svg"
            alt="Konsta UI"
          />
          <div>
            <div className="font-semibold text-black dark:text-white sm:mt-4 sm:mb-2">Konsta UI</div>
            <div className="text-sm opacity-75">Pixel perfect mobile UI components built with Tailwind CSS</div>
          </div>
        </a>
      </div>
    </div>
    </section>
  );
};

export default Projects;
