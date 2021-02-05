var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?key=${ytKey}`,
    type: 'GET',
    options: {
      query: options,
      max: 5,
      key: ytKey
    },
    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('yt Failed', error);
    }
  });

};

searchYouTube('funny cats', () => console.log('success'));

export default searchYouTube;
