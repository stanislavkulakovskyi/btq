import { MainLayout } from "../../components/layouts";
import { Artists, Services, About, Music } from "../../components/pages";

export const ROOT = "/about";
export const ARTISTS = "/artists";
export const SERVICES = "/services";
export const MUSIC = "/music";

export const PUBLIC_ROUTES = [
  { layout: MainLayout, page: About, path: ROOT, title: "about", id: 0 },
  { layout: MainLayout, page: Artists, path: ARTISTS, title: "artists", id: 1 },
  { layout: MainLayout, page: Services, path: SERVICES, title: "services", id: 2 },
  { layout: MainLayout, page: Music, path: MUSIC, title: "music", id: 3 },
];
