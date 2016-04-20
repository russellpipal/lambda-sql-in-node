var app = angular.module('app', []);

app.controller('PersonController', ['$http', function($http){
  var controller = this;
  controller.name = '';
  controller.address = '';
  controller.sendData = function() {
    $http.post('/people', {name: controller.name, address: controller.address, city: controller.city, state: controller.state, zip: controller.zip}).then(getPeople());
  };

  getPeople = function(){
    $http.get('/people').then(function(response){
      controller.results = response.data;
    });
  };

  getPeople();
}]);
