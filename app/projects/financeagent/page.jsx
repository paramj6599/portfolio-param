// app/projects/gradvisor/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const ZypherPage = () => {
  return (
    <section className="min-h-screen px-6 py-12 pt-32 text-white">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Zypher</h1>
        <Image
          src="/assets/work/zypher.png"
          alt="Zypher"
          width={800}
          height={400}
          className="rounded-lg mb-6"
        />
        <p className="text-lg mb-4">
            An AI-powered financial planning agent built with Zypher that helps you analyze spending patterns, estimate goal costs, and create personalized savings plans.
        </p>
        <p className="text-lg mb-4">
            Built using Deno for backend services, Zypher integrates with various financial APIs to deliver real-time data and analytics.
        </p>
        <div className="flex gap-3 mt-6">
          <Link
            href="https://github.com/paramj6599/zypher-finance-agent/tree/main"
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

export default ZypherPage;