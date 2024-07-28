"use client";

import Social from "@/components/Social";

const services = [
  {
    num: 1,
    title: 'Web Development',
    description: 'Specializing in building responsive and scalable websites, I utilize the latest in HTML, CSS, JavaScript, and React to deliver user-centric solutions that enhance engagement and accessibility.',
    href: "#web-development"
  },
  {
    num: 2,
    title: 'App Development',
    description: 'Drawing on my extensive experience with platforms like Node.js and mobile development frameworks, I develop applications that prioritize smooth functionality and innovative features.',
    href: "#app-development"
  },
  {
    num: 3,
    title: 'Cloud Computing',
    description: 'With a deep understanding of AWS, Kubernetes, and Docker, I provide cloud solutions that enhance system efficiency and data security, driving scalable infrastructure deployments.',
    href: "#cloud-computing"
  },
  {
    num: 4,
    title: 'Data Science',
    description: 'Applying machine learning algorithms and data analysis to extract actionable insights, I leverage Python and its data-centric libraries to solve complex problems and enhance business intelligence.',
    href: "#data-science"
  }
];

const AboutMe = () => {
  return (
    <section className="min-h-screen text-white p-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6"> <span className="text-accent">About Me</span></h1>
        <p className="text-xl">
            As a <span className="text-accent">Masters in Computer Science</span> student at <span className="text-accent">Texas A&M University</span>, I have gained extensive experience in software development, cloud computing, and data visualization. My professional journey includes roles such as a Student Assistant at Texas A&M and an Associate Member of Technical Staff at Platform9 Systems, where I enhanced network security, developed APIs, and streamlined Kubernetes setups. I completed my <span className="text-accent">Bachelors in Engineering in Information Technology</span> from <span className="text-accent">University of Pune</span> in 2021.
        </p>
        <p className="text-xl mt-6 mb-4">
            Beyond my professional life, I enjoy playing tennis, following football and Formula 1, and reading a variety of literature, from mythological tales to murder mysteries.
        </p>
        <p className="text-xl mt-6 mb-4">
            I am broadly interested in <span className="text-accent">Full Stack software development</span>, <span className="text-accent">Machine Learning</span>, <span className="text-accent">NLP</span> and <span className="text-accent">Cloud Computing</span>. Currently, I am looking for Full time opportunities starting from May 2025. I am eager to leverage my academic foundation and industry experience to contribute effectively to innovative projects and teams!
        </p>
        <p className="text-xl mt-6 mb-4">
            Thank you for taking the time to learn about my journey. Feel free to reach out to me for collaborations or discussions!
        </p>
        <br/>
        <div className="mb-8 xl:mb-0">
              <Social 
              containerStyles="flex gap-6" 
              iconStyles="w-9 h-9 border border-accent rounded-full flex 
              justify-center items-center text-accent text-base hover:bg-accent 
              hover:text-primary hover:transition-all duration-500"
              />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
