import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import fakeVideoData from '../../spec/data/fakeVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';
import searchYoutube from '../lib/searchYoutube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from './Search.js';





class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      video: {
        etag: '',
        id: {
          videoId: ''
        },
        snippet: {
          title: '',
          description: '',
          thumbnails: {
            default: {
              url: '',
            }
          }
        }
      },
      videos: []
    };
    this.test = this.test.bind(this);
    this.dataHandle = this.dataHandle.bind(this);
    this.searchHandle = this.searchHandle.bind(this);
  }


  componentDidMount() {
    this.props.searchYouTube({key: YOUTUBE_API_KEY, query: 'cat', max: 5}, this.dataHandle);
  }

  searchHandle (searchBar) {
    this.props.searchYouTube({key: YOUTUBE_API_KEY, query: searchBar.target.value, max: 5}, this.dataHandle);
  }


  dataHandle(videos) {
    this.setState({
      video: videos[0],
      videos: videos
    });
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
            <Search func={this.searchHandle} />
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

