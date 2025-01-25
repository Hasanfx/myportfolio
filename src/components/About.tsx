import React from 'react'

const About2: React.FC = () => {
  return (
    <section className="bg-gray-100">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-2xl">I'm Hasan Al-Haddad</h2>
                <h2 className="text-m font-semibold text-gray-900 sm:text-m">Senior Computer Science student</h2>
                <p className="mt-4 text-gray-600 text-lg"> Motivated and detail-oriented Computer Science student with a strong foundation in software development,
 algorithms, and data structures. Proficient in programming languages such as Python, C#, and PHP.
 Experienced in collaborative projects that emphasize problem-solving and innovation..</p>
                <div className="mt-8">
                    <a href="#projects" className="text-blue-500 hover:text-blue-600 font-medium">Check out my Work
                        <span className="ml-2">&#8594;</span></a>
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <img src="../img/myimage.avif" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>
  )
}
export default About2
