//important data
import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';
//gives array of objects
//map


class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-list">
        <VideoListEntry />
      </div>);
  }
}

//{VideoList videos={}}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};


// let video = (props) => (
//   <div>
//     {props.videos.map(video =>
//       <VideoList video={video} />
//     )}
//   </div>
// );


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
