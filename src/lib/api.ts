import type { Project, Skill, Profile, Experience } from "@/types";
import { fallbackProfile, fallbackExperiences, fallbackProjects, fallbackSkills } from "./fallback";

async function fetchJSON<T>(url: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`API ${res.status}`);
    return await res.json();
  } catch {
    return fallback;
  }
}

export function getProfile(): Promise<Profile | null> {
  return fetchJSON("/api/profile", fallbackProfile);
}

export function getExperiences(): Promise<Experience[]> {
  return fetchJSON("/api/experiences", fallbackExperiences);
}

export function getProjects(): Promise<Project[]> {
  return fetchJSON("/api/projects", fallbackProjects);
}

export function getFeaturedProjects(): Promise<Project[]> {
  return getProjects().then((projects) => projects.filter((p) => p.featured));
}

export function getSkills(): Promise<Skill[]> {
  return fetchJSON("/api/skills", fallbackSkills);
}
