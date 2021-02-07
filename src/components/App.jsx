import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import fakeVideoData from '../../spec/data/fakeVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';
import searchYoutube from '../lib/searchYoutube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';





class App extends React.Component {

  constructor(props) {
    super(props);
    props.searchYouTube({key: YOUTUBE_API_KEY, query: 'cat', max: 5}, () => {});
    this.state = {
      video: fakeVideoData[0],
      videos: fakeVideoData
    };
    this.test = this.test.bind(this);
  }


  test(video) {
    this.setState({
      video: video,
    });
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}>
            </VideoPlayer>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos={this.state.videos} func={this.test}>
              </VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

