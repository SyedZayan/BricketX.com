import ProjectsHero from "@/components/sections/ProjectsHero";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import ProjectsCTA from "@/components/sections/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <main className="w-full flex flex-col bg-[#fbf8f3] min-h-screen">
      <ProjectsHero />
      <ProjectsGallery />
      <ProjectsCTA />
    </main>
  );
}