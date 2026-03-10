import ProjectsHero from "@/components/sections/project/ProjectsHero";
import ProjectsGallery from "@/components/sections/project/ProjectsGallery";
import ProjectsCTA from "@/components/sections/project/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <main className="w-full flex flex-col bg-[#fbf8f3] min-h-screen">
      <ProjectsHero />
      <ProjectsGallery />
      <ProjectsCTA />
    </main>
  );
}