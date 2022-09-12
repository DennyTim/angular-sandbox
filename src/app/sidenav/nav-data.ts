import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routerLink: "dashboard",
    icon: "fa fa-home",
    label: "Dashboard"
  },
  {
    routerLink: "articles",
    icon: "fa-solid fa-newspaper",
    label: "Articles",
    items: [
      {
        routerLink: "articles/medium",
        label: "Medium",
        items: []
      },
      {
        routerLink: "articles/dev-community",
        label: "Dev Community"
      }
    ]
  },
  {
    routerLink: "projects",
    icon: "fa-solid fa-diagram-project",
    label: "Projects",
    items: [
      {
        routerLink: "projects/js",
        label: "JS",
        items: [
          {
            routerLink: "projects/js-first",
            label: "One"
          },
          {
            routerLink: "projects/js-second",
            label: "Second"
          }
        ]
      },
      {
        routerLink: "projects/angular",
        label: "Angular",
        items: [
          {
            routerLink: "projects/accordion",
            label: "Accordion"
          },
          {
            routerLink: "projects/card-component",
            label: "Card Component"
          },
          {
            routerLink: "projects/chips",
            label: "Chips"
          },
          {
            routerLink: "projects/progress-bar",
            label: "Progress Bar"
          },
          {
            routerLink: "projects/star-ratings",
            label: "Star Ratings"
          }
        ]
      }
    ]
  }
];
