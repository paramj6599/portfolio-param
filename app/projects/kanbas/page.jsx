// app/projects/gradvisor/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const KanbasPage = () => {
  return (
    <section className="min-h-screen px-6 py-12 pt-32 text-white">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Kanbas</h1>
        <Image
          src="/assets/work/kanbas.png"
          alt="Kanbas"
          width={800}
          height={400}
          className="rounded-lg mb-6"
        />
        <p className="text-lg mb-4">
          Developed a replica of the Northeastern University Learning Management System, Canvas, achieving a 48\% enhancement in operational performance.. Full-stack development of the Canvas learning management system using
% MongoDB, Express.js , React , Node.js and RESTful web services.
        </p>
        <p className="text-lg mb-4">
            Implemented user authentication and role-based access control, enabling secure login and differentiated access for students, instructors, and administrators.
        </p>
        <div className="flex gap-3 mt-6">
          <Link
            href="https://github.com/paramj6599/WebDev/tree/a6"
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

export default KanbasPage;