// Centralized content for Aryan Dev portfolio
export const hero = {
  name: "Aryan Dev",
  title: "Creative Mind | Tech Enthusiast | Dream Builder",
};

export const stats = [
  { label: "Projects", value: 24 },
  { label: "Years", value: 3 },
  { label: "Happy Clients", value: 12 },
];

export const skills = [
  { name: "React", level: 90 },
  { name: "Node", level: 80 },
  { name: "Python", level: 85 },
  { name: "Photoshop", level: 70 },
  { name: "Tailwind", level: 88 },
  { name: "FastAPI", level: 75 },
];

export const projects = [
  {
    id: "p1",
    title: "Dreamscape UI Kit",
    tags: ["React", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop",
    description:
      "An elegant pastel design system with animated components and glassmorphism aesthetics.",
    tech: ["React", "Tailwind", "Framer Motion"],
    links: { visit: "#", source: "#" },
  },
  {
    id: "p2",
    title: "Aurora Analytics",
    tags: ["FastAPI", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1200&auto=format&fit=crop",
    description:
      "Insightful dashboards with buttery-smooth transitions and real-time charts.",
    tech: ["FastAPI", "MongoDB", "ECharts"],
    links: { visit: "#", source: "#" },
  },
  {
    id: "p3",
    title: "Nebula Portfolio",
    tags: ["Vite", "SEO"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    description:
      "A cinematic portfolio template optimized for speed, SEO, and serene interactions.",
    tech: ["Vite", "Inter", "Netlify"],
    links: { visit: "#", source: "#" },
  },
];

export const artworks = [
  {
    id: "a1",
    title: "Pastel Peaks",
    tags: ["abstract", "cinematic"],
    model: "SDXL",
    seed: 7421,
    ar: "16:9",
    style: ["soft", "dreamy"],
    prompt:
      "Cinematic pastel mountain ranges with soft haze, dreamy lighting, glassy reflections, gentle bokeh, film grain, premium art style",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "a2",
    title: "Neon Blossoms",
    tags: ["portrait", "abstract"],
    model: "Midjourney",
    seed: 1024,
    ar: "1:1",
    style: ["vibrant", "glow"],
    prompt:
      "Soft-focus portrait formed by swirling petals, neon pastel palette, ethereal glow, immaculate composition, studio quality",
    image:
      "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "a3",
    title: "Glass City",
    tags: ["cinematic"],
    model: "Gemini",
    seed: 5566,
    ar: "21:9",
    style: ["futuristic", "calm"],
    prompt:
      "Futuristic glass city at dawn, pastel gradients, foggy atmosphere, soft reflections, calm premium vibe",
    image:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop",
  },
];

export const socials = {
  github: "https://github.com/aryan-dev",
  linkedin: "https://www.linkedin.com/in/aryan-dev/",
  discord: "https://discord.gg/",
};
