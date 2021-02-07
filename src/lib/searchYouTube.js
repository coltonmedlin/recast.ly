import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://youtube.googleapis.com/youtube/v3/search?key=${options.key}&part=snippet`,
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      type: 'video',
      videoEmbeddable: 'true'
    },
    contentType: 'application/json',
    success: function(data) {
      callback(data.items);
    },
    error: function(error) {
      console.error('yt Failed', error);
    }
  });

};

// searchYouTube({
//   key: YOUTUBE_API_KEY,
//   query: 'react',
//   max: 5
// }, (data) => {console.log(data)});

export default searchYouTube;


