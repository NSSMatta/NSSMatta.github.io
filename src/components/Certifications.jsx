import React from 'react';
import { Card, CardContent } from './ui/card';
import { Award, ShieldCheck, BadgeCheck, Network } from 'lucide-react';

const iconMap = {
  award: Award,
  'shield-check': ShieldCheck,
  'badge-check': BadgeCheck,
  network: Network
};

const Certifications = ({ data }) => {
  return (
    <section id="certifications" className="py-20 bg-black border-t-2 border-green-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <span className="text-green-500 font-mono text-sm">[04]</span>
              <h2 className="text-4xl md:text-5xl font-bold text-green-400 font-mono text-glow">
                CERTIFICATIONS
              </h2>
            </div>
            <div className="w-32 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.certifications.map((cert) => {
              const Icon = iconMap[cert.icon] || Award;
              return (
                <Card
                  key={cert.id}
                  className="bg-black border-2 border-green-500/40 hover:border-green-400 transition-all duration-300 group box-glow-hover"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 border-2 border-green-500 flex items-center justify-center mb-4 group-hover:border-green-400 transition-all duration-300 bg-green-950/30">
                        <Icon className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="text-lg font-semibold text-green-300 mb-2 group-hover:text-green-400 transition-colors font-mono">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-green-500/70 font-mono">{cert.issuer}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;