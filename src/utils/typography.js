import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

fairyGatesTheme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  a: {
    backgroundImage: 'none',
    textShadow: 'none',
  },
  'a:hover, a:active': {
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 1px,
    #1ca086 1px, #1ca086 2px,
    rgba(0, 0, 0, 0) 2px)`,
    textShadow: `0.03em 0 #fff, -0.03em 0 #fff,
    0 0.03em #fff, 0 -0.03em #fff,
    0.06em 0 #fff, -0.06em 0 #fff,
    0.09em 0 #fff, -0.09em 0 #fff,
    0.12em 0 #fff, -0.12em 0 #fff,
    0.15em 0 #fff, -0.15em 0 #fff`,
  },
});

// delete fairyGatesTheme.googleFonts;

const typography = new Typography(fairyGatesTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
