"use client";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ResumeViewer = () => {
  const [loading, setLoading] = useState(true);
  const resumeLink = "https://drive.google.com/file/d/1XeN9r6JTYStMCZNG8dAd6zdRWYr66MQ9/view?usp=drive_link";
  useEffect(() => {
    // Add a short delay to simulate loading and improve UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#1c1c22]">
      {/* Back button positioned below navbar, subtle design */}
      <div className="container mx-auto pt-27 pb-4">
        <Link href="/">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2 text-white/70 hover:text-accent hover:bg-transparent transition-colors"
          >
            <FaArrowLeft className="text-sm" /> <span>Back to portfolio</span>
          </Button>
        </Link>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-accent"></div>
        </div>
      )}

      {/* Google Drive embedded viewer */}
      <motion.div 
        className="container mx-auto pt-28 pb-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: loading ? 0 : 1,
          transition: { duration: 0.5 }
        }}
      >
        <div className="bg-[#232329] p-2 rounded-xl shadow-lg border border-white/5">
          <iframe 
            src={resumeLink} 
            className="w-full h-[75vh] rounded-lg"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeViewer;
