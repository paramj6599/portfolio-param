// app/projects/epiccaptions/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const EpicCaptionsPage = () => {
  return (
    <section className="min-h-screen px-6 py-12 pt-32 text-white">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">EpicCaptions</h1>
        <Image
          src="/assets/work/subtitle_3.png"
          alt="EpicCaptions"
          width={800}
          height={400}
          className="rounded-lg mb-6"
        />
        <p className="text-lg mb-4">
          EpicCaptions is a video subtitle generator that produces cinematic,
          styled subtitles. It leverages FFmpeg for video parsing and an LLM
          pipeline to enhance subtitle accuracy and creativity.
        </p>
        <p className="text-lg mb-4">
          Built with React, Next.js, and Node.js, the project features real-time
          rendering and editing of captions with future plans for TikTok-style
          templates and language customization.
        </p>
        <div className="flex gap-3 mt-6">
          <Link
            href="https://github.com/paramj6599/EpicCaptions"
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

export default EpicCaptionsPage;