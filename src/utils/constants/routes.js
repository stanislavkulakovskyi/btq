import { MainLayout } from "../../components/layouts";
import { Main, Artists, Services, About, Music } from "../../components/pages";

export const ROOT = "/";
export const ARTISTS = "/artists";
export const SERVICES = "/services";
export const MUSIC = "/music";

export const PUBLIC_ROUTES = [
  { layout: MainLayout, page: About, path: ROOT, title: "about", id: 0 },
  { layout: MainLayout, page: Artists, path: ARTISTS, title: "artists", id: 1 },
  { layout: MainLayout, page: Services, path: SERVICES, title: "services", id: 2 },
  { layout: MainLayout, page: Music, path: MUSIC, title: "music", id: 3 },
];

export const PUBLIC_ROUTEqweS = {
  [ROOT]: { page: Main, layout: MainLayout, title: "about" },
  [ARTISTS]: { page: Main, layout: MainLayout, title: "artists" },
  [SERVICES]: { page: Main, layout: MainLayout, title: "services" },
  [MUSIC]: { page: Main, layout: MainLayout, title: "music" },
};
