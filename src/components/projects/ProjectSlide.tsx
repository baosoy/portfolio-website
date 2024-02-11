import type { CollectionEntry } from "astro:content";
interface Props {
  projects: CollectionEntry<"projects">[];
}

import { useStore } from "@nanostores/preact";
import { $project } from "../../stores/projects";

const ProjectSlide = ({ projects }: Props) => {
  console.log(projects);
  const $p = useStore($project);

  return (
    <>
      <div class="mt-8 relative mx-auto xl:max-w-[50vw] w-full">
        {projects.map((project) => (
          <div
            id={project.id}
            class={[
              "flex  flex-col project px-8  mx-auto transiition-all duration-200 opacity-0 absolute top-0 left-0",
              $p?.id === project.id ? "opacity-100" : " ",
            ].join(" ")}
          >
            <img
              class="w-full"
              src={project.data.heroImage.src}
              alt={project.data.title}
            />

            <div class="pt-4">
              <div class="flex justify-between items-center pb-8">
                <h2>
                  {project.data.title}{" "}
                  <>
                    <span class="text-yellow-dark">—</span>{" "}
                    <span class="text-yellow-dark italic">
                      {project.data.source}
                    </span>
                  </>
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectSlide;
