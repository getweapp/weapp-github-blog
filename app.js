var config = __wxConfig.config;

//app.js
App({
  onLaunch: function () {

  },
  globalData:{
    config: {
      apiUrl: config.server + '/blog?user=' + config.github.user,
      repoUrl: 'http://github.com/' + config.github.user + '/' + config.github.repo,
      github: config.github
    },
    site: {
      title: 'Eyas'
    }
  }
})
