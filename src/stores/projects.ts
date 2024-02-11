import { atom } from "nanostores";
import type { CollectionEntry } from "astro:content";

type ProjectAtomState = null | CollectionEntry<"projects">;

export const $project = atom<ProjectAtomState>(null);
