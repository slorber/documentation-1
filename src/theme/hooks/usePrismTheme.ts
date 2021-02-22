import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import defaultTheme from 'prism-react-renderer/themes/palenight';
import useThemeContext from '@theme/hooks/useThemeContext';

const usePrismTheme = () => {
  const { siteConfig } = useDocusaurusContext();
  const prismTheme = siteConfig.themeConfig.prism;
  const lightModeTheme = prismTheme.theme || defaultTheme;
  const darkModeTheme = prismTheme.darkTheme || lightModeTheme;
  const { isDarkTheme } = useThemeContext();

  return isDarkTheme ? darkModeTheme : lightModeTheme;
};

export default usePrismTheme;
