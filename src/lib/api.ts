import { supabase } from "./supabase";
import type { Project, Skill, Profile, Experience } from "@/types";

// Fallback data for development (no Supabase configured)
import {
  fallbackProfile,
  fallbackExperiences,
  fallbackProjects,
  fallbackSkills,
} from "./fallback";

export async function getProfile(): Promise<Profile | null> {
  if (!supabase) return fallbackProfile;
  const { data } = await supabase
    .from("profile")
    .select("*")
    .single();
  return data as Profile | null;
}

export async function getExperiences(): Promise<Experience[]> {
  if (!supabase) return fallbackExperiences;
  const { data } = await supabase
    .from("experiences")
    .select("*")
    .order("sort_order", { ascending: true });
  return (data as Experience[]) ?? [];
}

export async function getProjects(): Promise<Project[]> {
  if (!supabase) return fallbackProjects;
  const { data } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });
  return (data as Project[]) ?? [];
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (!supabase) return fallbackProjects.filter((p) => p.featured);
  const { data } = await supabase
    .from("projects")
    .select("*")
    .eq("featured", true)
    .order("sort_order", { ascending: true });
  return (data as Project[]) ?? [];
}

export async function getSkills(): Promise<Skill[]> {
  if (!supabase) return fallbackSkills;
  const { data } = await supabase
    .from("skills")
    .select("*")
    .order("sort_order", { ascending: true });
  return (data as Skill[]) ?? [];
}
