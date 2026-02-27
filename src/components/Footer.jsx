import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

const Footer = ({ data }) => {
  return (
    <footer className="bg-black border-t-2 border-green-500/30 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-green-400/70 text-center md:text-left">
              <p className="font-mono text-sm flex items-center gap-2 justify-center md:justify-start">
                <Terminal className="w-4 h-4" />
                &copy; {new Date().getFullYear()} {data.personal.name}
              </p>
              <p className="text-xs mt-1 font-mono">[ BUILT_WITH: React + TailwindCSS ]</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400/70 hover:text-green-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400/70 hover:text-green-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${data.personal.email}`}
                className="text-green-400/70 hover:text-green-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* Quote */}
            <div className="text-green-500/50 text-xs font-mono text-center md:text-right">
              <p>&gt; "Security is not a product,</p>
              <p>but a process."</p>
            </div>
          </div>

          {/* ASCII Art */}
          <div className="mt-8 text-center text-green-500/30 font-mono text-xs">
            <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;