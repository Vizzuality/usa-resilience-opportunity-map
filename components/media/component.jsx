import { createMedia } from "@artsy/fresnel"

// breakpoints for grid
export const SCREEN_S = 768;
export const SCREEN_M = 860;
export const SCREEN_L = 1024;
export const SCREEN_XL = 1080;

const ExampleAppMedia = createMedia({
  breakpoints: {
    base: 0,
    small: SCREEN_S,
    medium: SCREEN_M,
    large: SCREEN_L,
    xlarge: SCREEN_XL,
  },
})

// Generate CSS to be injected into the head
export const mediaStyle = ExampleAppMedia.createMediaStyle()
export const { Media, MediaContextProvider } = ExampleAppMedia
