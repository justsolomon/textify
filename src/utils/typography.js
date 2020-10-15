import Typography from 'typography';
import githubTheme from 'typography-theme-github';

githubTheme.overrideStyles = () => ({
  a: {
    color: 'rgba(0, 0, 0, 0.7) !important',
    fontSize: '1.1rem',
  },
  'a:hover': {
    color: 'rgba(0, 0, 0, 1) !important',
  },
});

const typography = new Typography(githubTheme);

export default typography;
