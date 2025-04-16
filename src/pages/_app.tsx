import type { AppProps } from 'next/app';
import { CustomThemeProvider } from '../theme/ThemeContext';
import { ThemeToggle } from '../components/ThemeToggle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
      <ThemeToggle />
    </CustomThemeProvider>
  );
}
