// import ReactDOM from 'react-dom';
import Adapter from '../packages/ui-kit/src/styles/adapter';
import { themes } from '../packages/ui-kit/src/styles/theme/ThemeProvider';
import CssBaseline from '../packages/ui-kit/src/components/CssBaseline';

/* Hot fix which enables createRoot. It doesn't work with Chromatic */
// const nodes = new Map();
// ReactDOM.render = (app, rootNode) => {
// 	let root = nodes.get(rootNode);
// 	if (!root) {
// 		root = ReactDOM.createRoot(rootNode);
// 		nodes.set(rootNode, root);
// 	}
// 	root.render(app);
// };

// ReactDOM.unmountComponentAtNode = (component) => {
// 	const root = nodes.get(component);
// 	if (root) {
// 		root.unmount();
// 		return true;
// 	} else {
// 		console.error("ReactDOM injection: can't unmount the given component");
// 		return false;
// 	}
// };

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  },
  layout: 'centered',
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: '0',
    toolbar: {
      icon: 'circlehollow',
      items: [{ value: '0', title: 'light' }, { value: '1', title: 'dark' }],
      showName: true,
    },
  },
};

const getTheme = (themeName) => themes[themeName];

export const decorators = [
  (Story, context) => {
    const theme = getTheme(context.globals.theme);

    return (
      <Adapter.ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </Adapter.ThemeProvider>
    );
  },
];
