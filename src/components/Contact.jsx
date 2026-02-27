import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="py-20 bg-black border-t-2 border-green-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <span className="text-green-500 font-mono text-sm">[06]</span>
              <h2 className="text-4xl md:text-5xl font-bold text-green-400 font-mono text-glow">
                ESTABLISH_CONNECTION
              </h2>
            </div>
            <div className="w-32 h-1 bg-green-500 mx-auto"></div>
          </div>

          <Card className="bg-black border-2 border-green-500/40 box-glow">
            <CardContent className="p-8">
              <p className="text-green-300 text-lg text-center mb-8 font-mono">
                &gt; Always interested in discussing cybersecurity challenges, collaboration opportunities, 
                or potential roles. Feel free to reach out!
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Email */}
                <a
                  href={`mailto:${data.personal.email}`}
                  className="flex items-center gap-4 p-4 border-2 border-green-500/40 bg-black hover:border-green-400 hover:bg-green-950/30 transition-all duration-300 group box-glow-hover"
                >
                  <div className="w-12 h-12 border-2 border-green-500 flex items-center justify-center group-hover:border-green-400 transition-all bg-green-950/30">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-green-500/70 font-mono">EMAIL</p>
                    <p className="text-green-300 group-hover:text-green-400 transition-colors font-mono text-sm break-all">
                      {data.personal.email}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-green-500/70 group-hover:text-green-400 transition-colors" />
                </a>

                {/* Phone */}
                <a
                  href={`tel:${data.personal.phone}`}
                  className="flex items-center gap-4 p-4 border-2 border-green-500/40 bg-black hover:border-green-400 hover:bg-green-950/30 transition-all duration-300 group box-glow-hover"
                >
                  <div className="w-12 h-12 border-2 border-green-500 flex items-center justify-center group-hover:border-green-400 transition-all bg-green-950/30">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-green-500/70 font-mono">PHONE</p>
                    <p className="text-green-300 group-hover:text-green-400 transition-colors font-mono">
                      {data.personal.phone}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-green-500/70 group-hover:text-green-400 transition-colors" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  className="bg-black hover:bg-green-950 text-green-300 border-2 border-green-500/50 hover:border-green-400 transition-all duration-300 px-6 py-6 font-mono"
                >
                  <a
                    href={data.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    &gt; LINKEDIN
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-black hover:bg-green-950 text-green-300 border-2 border-green-500/50 hover:border-green-400 transition-all duration-300 px-6 py-6 font-mono"
                >
                  <a
                    href={data.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    &gt; GITHUB
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;