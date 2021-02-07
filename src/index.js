// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './lib/searchYoutube.js';

let test = _.debounce(searchYouTube, 500);

ReactDOM.render(<App searchYouTube={test}/>, document.getElementById('app'));