import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="">
    <div className="bg-black pb-10"> {/* Remove h-screen here */}
    <h2 className="pt-2 mb-12 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-3xl">
        Skills
      </h2>      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-10">
        {/* Python Card */}
        <div className="card hidden">
          <div className="flex justify-center items-center mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
              alt="Python"
              className="w-16"
            />
          </div>
          <h2 className="font-semibold text-white">Python</h2>
        </div>
  
        {/* Web Development Card */}
        <div className="card hidden">
          <div className="flex justify-center items-center mb-4">
            <img
              src="../img/software-development.png"
              alt="Web Development"
              className="w-16"
            />
          </div>
          <h2 className="font-semibold text-white">Web Dev</h2>
        </div>
  
        {/* C# Card */}
        <div className="card hidden">
          <div className="flex justify-center items-center mb-4">
            <img
              src="../img/c-sharp.png"
              alt="C#"
              className="w-16"
            />
          </div>
          <h2 className="font-semibold text-white">C#</h2>
        </div>
  
        {/* Node.js Card */}
        <div className="card hidden">
          <div className="flex justify-center items-center mb-4">
            <img
              src="../img/nodejs.png"
              alt="Node.js"
              className="w-16"
            />
          </div>
          <h2 className="font-semibold text-white">Node.js</h2>
        </div>
  
        {/* Database Management Card */}
        <div className="card hidden">
          <div className="flex justify-center items-center mb-4">
            <img
              src="../img/database-management.png"
              alt="Database Management"
              className="w-16"
            />
          </div>
          <h2 className="font-semibold text-white">DB Management</h2>
        </div>
  
        {/* TypeScript Card */}
        <div className="card hidden">
          <div className="flex justify-center items-center mb-4">
            <img
              src="../img/typescript.png"
              alt="TypeScript"
              className="w-16"
            />
          </div>
          <h2 className="font-semibold text-white">TypeScript</h2>
        </div>
      </div>
    </div>
  </section>
  
  
  
  );
};

export default Skills;
