import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Terminal } from 'lucide-react';

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(data.skills)[0]);

  return (
    <section id="skills" className="py-20 bg-black border-t-2 border-green-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <span className="text-green-500 font-mono text-sm">[02]</span>
              <h2 className="text-4xl md:text-5xl font-bold text-green-400 font-mono text-glow">
                TECHNICAL_ARSENAL
              </h2>
            </div>
            <div className="w-32 h-1 bg-green-500 mx-auto"></div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {Object.keys(data.skills).map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 font-mono text-sm border-2 transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-green-500 text-black border-green-400 shadow-lg shadow-green-500/50 font-bold'
                    : 'bg-black text-green-400 border-green-500/40 hover:border-green-400 hover:bg-green-950/30'
                }`}
              >
                [{String(index + 1).padStart(2, '0')}] {category.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <Card className="bg-black border-2 border-green-500/40 box-glow">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-5 h-5 text-green-500" />
                <h3 className="text-2xl font-semibold text-green-400 font-mono">&gt; {activeCategory.toUpperCase()}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {data.skills[activeCategory].map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-4 py-2 text-sm font-mono border-green-500/40 bg-black text-green-300 hover:border-green-400 hover:bg-green-950/50 hover:text-green-400 transition-all duration-300 cursor-default box-glow-hover"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* All Categories Overview */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {Object.entries(data.skills).map(([category, skills]) => (
              <Card
                key={category}
                className="bg-black border-2 border-green-500/30 hover:border-green-400 transition-all duration-300 cursor-pointer box-glow-hover"
                onClick={() => setActiveCategory(category)}
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3 font-mono">&gt; {category}</h4>
                  <p className="text-green-500/70 text-sm font-mono">[{skills.length}] TECHNOLOGIES</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;