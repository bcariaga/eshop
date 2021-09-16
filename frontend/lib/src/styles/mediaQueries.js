/* eslint-disable max-len */

/**
 * Media Queries for Mobile Devices (320px to 480px)
 * @param {Object} styles styles to be wraping to Media Queries
 * @return {Object} wrapping styles
 */
export const mobileStyles = (styles) => ({
  '@media only screen and (min-width : 320px) and (max-width : 480px)': {
    ...styles,
  },
});
/**
 * Media Queries for Tablets (481px to 768px)
 * @param {Object} styles styles to be wraping to Media Queries
 * @return {Object} wrapping styles
 */
export const tabletStyles = (styles) => ({
  '@media only screen and (min-width : 481px) and (max-width : 768px)': {
    ...styles,
  },
});
/**
 * Media Queries for Mobile Devices (769px to 1024px)
 * @param {Object} styles styles to be wraping to Media Queries
 * @return {Object} wrapping styles
 */
export const laptopStyles = (styles) => ({
  '@media only screen and (min-width : 769px) and (max-width : 1024px)': {
    ...styles,
  },
});
/**
 * Media Queries for Mobile Devices (up to 1025px)
 * @param {Object} styles styles to be wraping to Media Queries
 * @return {Object} wrapping styles
 */
export const largeStyles = (styles) => ({
  '@media only screen and (min-width : 1025px)': {
    ...styles,
  },
});
