import React, { useEffect, useState } from 'react';
import { Shield, Terminal, Lock, Code, Skull } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = '> INITIALIZING_SECURITY_PROTOCOLS...';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Scanline Effect */}
      <div className="scanline"></div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <Skull className="absolute top-20 left-10 w-8 h-8 text-green-500/20 animate-float" />
        <Lock className="absolute top-40 right-20 w-6 h-6 text-green-400/20 animate-float-delay-1" />
        <Terminal className="absolute bottom-32 left-32 w-7 h-7 text-green-500/20 animate-float-delay-2" />
        <Code className="absolute bottom-20 right-40 w-8 h-8 text-green-400/20 animate-float" />
        <Shield className="absolute top-1/2 left-20 w-6 h-6 text-green-500/20 animate-float-delay-1" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-5xl mx-auto">
          {/* Terminal Header */}
          <div className="mb-8 font-mono text-sm text-green-400 border-2 border-green-500/30 bg-black/80 p-4 box-glow">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-green-400">root@cybersec:~#</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400">{text}</span>
              <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>▊</span>
            </div>
          </div>

          {/* Main Heading with Glitch Effect */}
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-green-400 font-mono text-glow-strong text-center flicker"
            data-text={data.personal.name}
          >
            {data.personal.name}
          </h1>
          
          <div className="text-center mb-8">
            <p className="text-2xl md:text-3xl text-green-500 font-semibold mb-3 font-mono">
              [ {data.personal.title} ]
            </p>
            
            <p className="text-lg text-green-400/80 mb-6 font-mono">
              {data.personal.subtitle}
            </p>

            {/* ASCII Art Divider */}
            <div className="text-green-500/50 font-mono text-xs mb-6">
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            </div>

            {/* Bio */}
            <div className="max-w-3xl mx-auto mb-8 border border-green-500/30 bg-black/60 p-6 box-glow">
              <p className="text-green-300/90 text-base leading-relaxed font-mono">
                {data.personal.bio}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-lg font-mono border-2 border-green-400 shadow-lg shadow-green-500/50 hover:shadow-green-400/70 transition-all duration-300"
            >
              &gt; ESTABLISH_CONNECTION
            </Button>
            <Button
              onClick={() => scrollToSection('experience')}
              className="bg-black hover:bg-green-950 text-green-400 border-2 border-green-500 hover:border-green-400 font-bold px-8 py-6 text-lg font-mono shadow-lg shadow-green-500/30 hover:shadow-green-400/50 transition-all duration-300"
            >
              &gt; VIEW_PROTOCOLS
            </Button>
          </div>

          {/* Stats - Terminal Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className="p-5 border-2 border-green-500/40 bg-black/70 hover:border-green-400 hover:bg-green-950/30 transition-all duration-300 box-glow-hover"
              >
                <div className="font-mono text-xs text-green-500/70 mb-2">[{String(index + 1).padStart(2, '0')}]</div>
                <div className="text-3xl font-bold text-green-400 mb-2 font-mono text-glow">{stat.value}</div>
                <div className="text-xs text-green-500/80 font-mono uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col items-center animate-bounce">
              <div className="text-green-500 font-mono text-xs mb-2">SCROLL_DOWN</div>
              <div className="w-6 h-10 border-2 border-green-500 flex items-start justify-center p-2">
                <div className="w-1 h-2 bg-green-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
