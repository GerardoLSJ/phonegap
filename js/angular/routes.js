blogSample.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/login.html'
      }).
      when('/about', {
        templateUrl: 'views/dash.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);