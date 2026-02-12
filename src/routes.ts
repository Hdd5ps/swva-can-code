import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { FindCamp } from "./pages/FindCamp";
import { Showcase } from "./pages/Showcase";
import { SWVACanCreate } from "./pages/SWVACanCreate";
import { Curriculum } from "./pages/Curriculum";
import { Contact } from "./pages/Contact";
import { Sponsor } from "./pages/Sponsor";
import { Root } from "./components/Root";
import { Overview } from "./components/Overview";
import { UserStoriesParents } from "./components/UserStoriesParents";
import { UserStoriesStudents } from "./components/UserStoriesStudents";
import { UserStoriesEducators } from "./components/UserStoriesEducators";
import { UserStoriesSponsors } from "./components/UserStoriesSponsors";
import { UserStoriesOrganizers } from "./components/UserStoriesOrganizers";
import { KeyFlows } from "./components/KeyFlows";
import { CurriculumStructure } from "./components/CurriculumStructure";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "find-camp", Component: FindCamp },
      { path: "showcase", Component: Showcase },
      { path: "swva-can-create", Component: SWVACanCreate },
      { path: "curriculum", Component: Curriculum },
      { path: "contact", Component: Contact },
      { path: "sponsor", Component: Sponsor },
    ],
  },
  {
    path: "/docs",
    Component: Root,
    children: [
      { index: true, Component: Overview },
      { path: "parents", Component: UserStoriesParents },
      { path: "students", Component: UserStoriesStudents },
      { path: "educators", Component: UserStoriesEducators },
      { path: "sponsors", Component: UserStoriesSponsors },
      { path: "organizers", Component: UserStoriesOrganizers },
      { path: "flows", Component: KeyFlows },
      { path: "curriculum", Component: CurriculumStructure },
    ],
  },
  // Legacy routes redirect to docs
  { path: "/flows", Component: KeyFlows },
  { path: "/parents", Component: UserStoriesParents },
  { path: "/students", Component: UserStoriesStudents },
  { path: "/educators", Component: UserStoriesEducators },
  { path: "/sponsors", Component: UserStoriesSponsors },
  { path: "/organizers", Component: UserStoriesOrganizers },
]);