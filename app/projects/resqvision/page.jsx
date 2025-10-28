"use client";

import Image from "next/image";
import Link from "next/link";

const ResqVision = () => {
  return (
    <section className="min-h-screen px-6 py-20 text-white">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">ResQVision</h1>
        <Image
          src="/assets/work/ResQVision.png"
          alt="ResQVision Dashboard"
          width={1200}
          height={600}
          className="rounded-xl mb-6 border border-white/20"
        />
        <p className="text-white/80 mb-4">
          ResQVision is a dynamic emergency response dashboard visualizing real-time
          metrics from Sydney's integrated emergency dataset (IERAD). It helps
          authorities monitor average response times, incident severity trends,
          and resource bottlenecks across urban and rural areas.
        </p>
        <p className="text-white/80 mb-4">
          The system uses D3.js for interactive charts, and supports filtering by
          region, time, and incident type. It’s fully responsive and optimized
          for clarity and decision-making.
        </p>
        <ul className="text-white/70 mb-6 list-disc list-inside">
          <li>Real-time incident type vs count visualization</li>
          <li>Severity and delay trends across regions</li>
          <li>Time-series analysis of emergency patterns</li>
          <li>Custom CSV upload to test local datasets</li>
        </ul>
        <div className="flex gap-4">
          <Link
            href="https://github.com/paramj6599/ResQVision"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded font-medium hover:bg-accent hover:text-white transition"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResqVision;