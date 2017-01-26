const rp = require('request-promise');

//news source
var source = 'bloomberg';

getSources = (req, res, next) => {
  var options = {
    uri: `https://newsapi.org/v1/sources?language=en&apiKey=ed1e554a5cd946e0a3484aad663655e1`,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }

  rp(options)
  .then(function (data){

    console.log('data ' + data.sources[0].name);
    res.render('sources', {"data":data});
  })
  .catch(function (err){
    return next(err);
  })
};


getNewsFromSource = (req, res, next) => {
  var sourceID = req.params.id;
  console.log('url ' + sourceID);
  var options = {
      uri: `https://newsapi.org/v1/articles?source=${sourceID}&sortBy=top&apiKey=ed1e554a5cd946e0a3484aad663655e1`,
      headers: {
          'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
  }

  rp(options)
      .then(function (repos) {

          console.log('repos ' + repos.articles[0].author);
          var data = repos;
          res.render("news-from-source", {"data":data});
        })
      .catch(function (err) {
          return next(err);
      })
    };

    getNews = (req, res, next) => {
      var options = {
          uri: `https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=ed1e554a5cd946e0a3484aad663655e1`,
          headers: {
              'User-Agent': 'Request-Promise'
          },
          json: true // Automatically parses the JSON string in the response
      }

      rp(options)
          .then(function (repos) {

              console.log('repos ' + repos.articles[0].author);
              var data = repos;
              res.render("news", {"data":data});
            })
          .catch(function (err) {
              return next(err);
          })
        };


module.exports = {
  getnews: getNews,
  getSources: getSources,
  getNewsFromSource: getNewsFromSource
};
