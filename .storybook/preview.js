// import ReactDOM from 'react-dom';
import { ThemeProvider } from '../packages/ui-kit/src/styles';
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
