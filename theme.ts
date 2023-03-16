import { buildLegacyTheme, defineConfig } from "sanity";

const props = {
  "--prestige-primary": "#a4101d",
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--my-blue": "#4285f4",
  "--my-red": "#a4101d",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  /* Brand */
  "--brand-primary": props["--prestige-primary"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--prestige-primary"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--prestige-primary"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--prestige-primary"],
});
