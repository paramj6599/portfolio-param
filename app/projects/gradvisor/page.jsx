// app/projects/gradvisor/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const GradvisorPage = () => {
  return (
    <section className="min-h-screen px-6 py-12 pt-32 text-white">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Gradvisor</h1>
        <Image
          src="/assets/work/Gradvisor.png"
          alt="Gradvisor"
          width={800}
          height={400}
          className="rounded-lg mb-6"
        />
        <p className="text-lg mb-4">
          Gradvisor is a recommendation system designed to suggest universities
          to students based on their profiles and preferences. It uses form-based
          inputs to gather student data and a scoring algorithm to rank
          institutions.
        </p>
        <p className="text-lg mb-4">
          Built using React.js for the frontend and Django with SQLite for backend
          logic and storage, Gradvisor provides fast feedback and tailored
          suggestions to aid graduate school planning.
        </p>
        <div className="flex gap-3 mt-6">
          <Link
            href="https://mohitsarin-tamu.github.io/Gradvisor/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline text-sm flex items-center gap-1"
          >
            <BsGithub /> GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GradvisorPage;