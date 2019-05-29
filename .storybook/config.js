import { configure } from '@storybook/html';
import '!style-loader!css-loader!../web/app/themes/sv-theme/style.css';

// automatically import all files ending in *.stories.js
const req = require.context('../web/app/themes/sv-theme/stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
