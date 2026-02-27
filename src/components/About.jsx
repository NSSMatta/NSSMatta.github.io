import React from 'react';
import { GraduationCap, MapPin, Mail, Phone, User } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <span className="text-green-500 font-mono text-sm">[01]</span>
              <h2 className="text-4xl md:text-5xl font-bold text-green-400 font-mono text-glow">
                ABOUT_ME
              </h2>
            </div>
            <div className="w-32 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold text-green-400 mb-6 flex items-center gap-2 font-mono">
                <GraduationCap className="text-green-500" />
                &gt; EDUCATION
              </h3>
              <div className="space-y-6">
                {data.education.map((edu) => (
                  <Card key={edu.id} className="bg-black border-2 border-green-500/40 hover:border-green-400 transition-all duration-300 box-glow-hover">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold text-green-400 font-mono">{edu.degree}</h4>
                        <span className="text-xs px-3 py-1 bg-green-950 text-green-400 border border-green-500/50 font-mono">
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-lg text-green-300 mb-2 font-mono">{edu.field}</p>
                      <p className="text-green-400/80 mb-1 font-mono text-sm">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-xs text-green-500/70 font-mono">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                        <span>{edu.period}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-green-400 mb-6 font-mono">&gt; CONTACT_INFO</h3>
              <Card className="bg-black border-2 border-green-500/40 hover:border-green-400 transition-all duration-300 box-glow-hover mb-6">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-green-300 font-mono text-sm">
                    <Mail className="w-5 h-5 text-green-500" />
                    <a href={`mailto:${data.personal.email}`} className="hover:text-green-400 transition-colors break-all">
                      {data.personal.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-green-300 font-mono text-sm">
                    <Phone className="w-5 h-5 text-green-500" />
                    <a href={`tel:${data.personal.phone}`} className="hover:text-green-400 transition-colors">
                      {data.personal.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-green-300 font-mono text-sm">
                    <MapPin className="w-5 h-5 text-green-500" />
                    <span>{data.personal.location}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Key Highlights */}
              <div>
                <h3 className="text-2xl font-semibold text-green-400 mb-6 font-mono">&gt; KEY_CAPABILITIES</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-black border border-green-500/40 hover:border-green-400 transition-all duration-300 box-glow-hover">
                    <p className="text-green-300 font-mono text-sm">[✓] 4+ years in threat detection & incident response</p>
                  </div>
                  <div className="p-4 bg-black border border-green-500/40 hover:border-green-400 transition-all duration-300 box-glow-hover">
                    <p className="text-green-300 font-mono text-sm">[✓] 5 industry-recognized certifications</p>
                  </div>
                  <div className="p-4 bg-black border border-green-500/40 hover:border-green-400 transition-all duration-300 box-glow-hover">
                    <p className="text-green-300 font-mono text-sm">[✓] Expert in GRC, SIEM, and Cloud Security</p>
                  </div>
                  <div className="p-4 bg-black border border-green-500/40 hover:border-green-400 transition-all duration-300 box-glow-hover">
                    <p className="text-green-300 font-mono text-sm">[✓] Proven track record in reducing security incidents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;