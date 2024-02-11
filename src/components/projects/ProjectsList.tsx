import type { CollectionEntry } from "astro:content";
import { $project } from "../../stores/projects";
interface Props {
  projects: CollectionEntry<"projects">[];
  activeId?: string;
}

const ProjectsList = ({ projects, activeId }: Props) => {
  projects.sort((a, b) => (a.data.order < b.data.order ? -1 : 1));

  return (
    <div>
      <ul>
        {projects.map((project, index) => (
          <li
            class={
              activeId && activeId !== project.id
                ? "opacity-50 hover:opacity-100"
                : ""
            }
          >
            <a
              onMouseOver={() => $project.set(project)}
              onMouseOut={() => $project.set(null)}
              id="project-link"
              data-project={project.id}
              href={`/projects/${project.slug}`}
              class="flex gap-4 items-center"
            >
              <span class="inline-block w-4">[{index + 1}]</span>
              <div class="flex gap-1 items-center">
                <h2 class={activeId && activeId === project.id ? "italic" : ""}>
                  {project.data.title}
                </h2>
                <span class="text-black opacity-75">—</span>
                <span class="text-black opacity-75 italic">
                  {project.data.source}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
