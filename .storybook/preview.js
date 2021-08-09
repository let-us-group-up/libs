import { ThemeProvider } from '../packages/ui-kit/src/styles';
import CssBaseline from '../packages/ui-kit/src/components/CssBaseline';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
