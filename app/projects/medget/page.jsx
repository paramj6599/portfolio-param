import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const MedGetPage = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-[#0d0d0d] text-white">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">MedGet</h1>

        <Image
          src="/assets/work/MedGet.png"
          alt="MedGet"
          width={900}
          height={500}
          className="rounded-lg mb-8 object-cover"
        />

        <p className="text-lg text-white/80 mb-6">
          MedGet is a comprehensive drug research platform that provides real-time analysis and visualization of FDA-approved drugs. It integrates clinical data with financial insights and offers an AI-powered interface for medical researchers, investors, and the public to explore drug approval history, related publications, and stock trends.
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {["Python", "React.js", "Next.js", "LangChain", "PostgreSQL"].map((tech, index) => (
            <span
              key={index}
              className="bg-white/10 px-3 py-1 rounded text-accent text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href="https://github.com/Aggies-Create-NeuroX1/MedGet"
          target="_blank"
          className="inline-flex items-center gap-2 text-accent hover:underline"
        >
          <BsGithub /> View on GitHub
        </Link>
      </div>
    </section>
  );
};

export default MedGetPage;