import React from 'react';
import { Card, CardContent } from './ui/card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 bg-black border-t-2 border-green-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <span className="text-green-500 font-mono text-sm">[03]</span>
              <h2 className="text-4xl md:text-5xl font-bold text-green-400 font-mono text-glow">
                PROFESSIONAL_EXPERIENCE
              </h2>
            </div>
            <div className="w-32 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-green-500/50"></div>

            <div className="space-y-12">
              {data.experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 border-4 border-black shadow-lg shadow-green-500/50"></div>

                  {/* Content Card */}
                  <div className="md:w-1/2">
                    <Card className="bg-black border-2 border-green-500/40 hover:border-green-400 transition-all duration-300 group box-glow-hover">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="mb-4">
                          <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                            <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors font-mono">
                              &gt; {exp.title}
                            </h3>
                            <span className="text-xs px-3 py-1 bg-green-950 text-green-400 border border-green-500/50 whitespace-nowrap font-mono">
                              {exp.type}
                            </span>
                          </div>
                          <p className="text-xl text-green-300 font-semibold mb-2 font-mono">{exp.company}</p>
                          <div className="flex flex-wrap gap-3 text-xs text-green-500/70 font-mono">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        {/* Achievements */}
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex gap-3 text-green-300 text-sm font-mono">
                              <span className="text-green-500 mt-1 flex-shrink-0">[✓]</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for timeline */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;