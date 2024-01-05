export const path = {
  Home: "/",
} as const;
export type Path = (typeof path)[keyof typeof path];

export const route = {
  Home: {
    path: path.Home,
    label: "Home",
  },
} as const;
export type Route = (typeof route)[keyof typeof route];
