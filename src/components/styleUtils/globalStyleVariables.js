export const colors = {
  white: '#ffffff',
  black: '#000000',
  blue: '#176DDC',
  hoverBlue: '#0B356C',
  lightGray: '#DDDDDD',
};

/**
 * Transform pixel to rem values, considering a base of 16px = 1rem
 * @param {number} px The pixel value to be transformed
 */
export const px2rem = (px) => `${px / 16}rem`;

/**
 * Breakpoints for media types
 */
export const mediaTypes = {
  xs: { min: 0, max: 575 },
  sm: { min: 576, max: 768 },
  md: { min: 769, max: 991 },
  lg: { min: 992, max: 1199 },
  xl: { min: 1200, max: 2500 },
};

// Iterate through mediaTypes to create templates
const mediaTypeArray = Object.keys(mediaTypes);

/**
 * Generate media query object with down direction for a media type specified by its label.
 * Includes the current media selection. For instance, mediaDown.md is equivalent to
 * media query with the md max-width value.
 */
export const mediaDown = mediaTypeArray.reduce((acc, label) => {
  acc[label] = styles => `
    @media (max-width: ${mediaTypes[label].max}px) {
      ${styles}
    }
  `;
  return acc;
}, {});

/**
 * Generate media query object with up direction for a media type specified by its label
 * Includes the current media selection. For instance, mediaUp.md is equivalent to
 * media query with the md min-width value.
 */
export const mediaUp = mediaTypeArray.reduce((acc, label) => {
  acc[label] = styles => `
    @media (min-width: ${mediaTypes[label].min}px) {
      ${styles}
    }
  `;
  return acc;
}, {});

/**
 * Font factory
 */
export const fontFactory = (
  color,
  fontSizeD,
  fontSizeM,
  lineHeightD,
  lineHeightM,
  letterSpaceD,
  letterSpaceM,
  fontWeight,
) => {
  return `
    font-weight: ${fontWeight || '300'};
    font-style: normal;
    color: ${color};
    font-size: ${fontSizeD};
    line-height: ${lineHeightD || 'normal'};
    letter-spacing: ${letterSpaceD || 'normal'};

    ${mediaDown.sm(`
      font-size: ${fontSizeM};
      line-height: ${lineHeightM || 'normal'};
      letter-spacing: ${letterSpaceM || 'normal'};
    `)}
  `;
};

/**
 * Font collection. Pass in the following as arguments to the factory. D: Desktop, M: Mobile
 * color, fontSizeD, fontSizeM, lineHeightD, lineHeightM, letterSpaceD, letterSpaceM, fontWeight
 */
export const fonts = {
  H1: fontFactory(colors.black, px2rem(45), px2rem(34), px2rem(62), px2rem(48), px2rem(1.23), px2rem(0.93)),
  H2: fontFactory(colors.black, px2rem(35), px2rem(26), px2rem(50), px2rem(40), px2rem(0.95), px2rem(0.71)),
  H3: fontFactory(colors.black, px2rem(20), px2rem(20), px2rem(30), px2rem(30), px2rem(0.55), px2rem(0.55), 400),
  H4: fontFactory(colors.black, px2rem(14), px2rem(14), px2rem(20), px2rem(20), px2rem(0.55), px2rem(0.55), 400),
};
