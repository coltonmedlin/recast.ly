//important data
import VideoListEntry from './VideoListEntry.js';


class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-list"> {
        this.props.videos.map(video => <VideoListEntry video={video}/> )
      }
      </div>);
  }
}

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
