import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { Button } from './ui/button';

const Projects = ({ githubUsername }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`);
        const data = await response.json();
        
        // Filter out forks and sort by stars
        const filteredProjects = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        
        setProjects(filteredProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        setLoading(false);
      }
    };
    
    fetchGithubProjects();
  }, [githubUsername]);

  return (
    <section id="projects" className="py-20 bg-black border-t-2 border-green-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <span className="text-green-500 font-mono text-sm">[05]</span>
              <h2 className="text-4xl md:text-5xl font-bold text-green-400 font-mono text-glow">
                PROJECTS
              </h2>
            </div>
            <div className="w-32 h-1 bg-green-500 mx-auto"></div>
          </div>

          {loading ? (
            <div className="text-center text-green-400 font-mono">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
              <p className="mt-4">&gt; LOADING_PROJECTS...</p>
            </div>
          ) : projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-black border-2 border-green-500/40 hover:border-green-400 transition-all duration-300 group flex flex-col box-glow-hover"
                >
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <Github className="w-8 h-8 text-green-400" />
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>

                    <h3 className="text-xl font-semibold text-green-300 mb-3 group-hover:text-green-400 transition-colors font-mono">
                      &gt; {project.name}
                    </h3>

                    <p className="text-green-400/70 text-sm mb-4 flex-grow font-mono">
                      {project.description || 'No description available'}
                    </p>

                    {project.language && (
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs bg-green-950 text-green-400 border border-green-500/50 font-mono">
                          {project.language}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-sm text-green-500/70 font-mono">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {project.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {project.forks_count}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center text-green-400 font-mono">
              <p>&gt; NO_PUBLIC_PROJECTS_FOUND</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-black hover:bg-green-950 text-green-400 border-2 border-green-500 hover:border-green-400 font-bold px-8 py-6 text-lg font-mono shadow-lg shadow-green-500/30 hover:shadow-green-400/50 transition-all duration-300"
            >
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                &gt; VIEW_ALL_ON_GITHUB
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;