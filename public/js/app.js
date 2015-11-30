var app = angular.module('orderFoodApp', []);

app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

    $scope.duck={
      icon: 'duck.jpg',
      name: 'Peking Duck',
      description: 'a famous duck dish from Beijing that has been prepared since the imperial era. ',
      price: 8.99,
      image: 'like.jpg'
    };

    $scope.bun={
      icon: '3.jpg',
      name: 'Apple Pie',
      description: 'a fruit pie in which the principal filling ingredient is apple. It is, on occasion, served with whipped cream ',
      price: 8.99,
      image: 'like.jpg'
    };

    $scope.noodle={
      icon: '2.jpg',
      name: 'Shanghai Noddle',
      description: 'a dish made from Shanghai .',
      price: 8.99,
      image: 'like.jpg'
    };

    $scope.pork={
        icon: '4.jpg',
        name: 'kung pao pork',
        description: 'Spicy pork with peanuts, substitute cashews for peants',
        price: 8.99,
        image: 'like.jpg'
    };

    $scope.chicken={
      icon: '5.jpg',
      name: 'drunk chicken',
      description: 'Wine and green onion mix to make you feel high, and soft in head',
      price: 8.99,
      image: 'like.jpg'
    };

    $scope.beef={
      icon: '6.jpg',
      name: 'beef with soup noodle',
      description: 'Hot spicy with soft noodle, mix beef, and secret ingredients',
      price: 8.99,
      image: 'like.jpg'
    };


    $scope.count = 0;
}]);


app.controller('CreateController', ['$http', function($http){
  var controller = this;
  $http.get('/orders').success(function(data){
    controller.food = data;
  });

  this.create = function(){
    $http.post('/orders', { 
      fname: this.fname,
      lname: this.lname,
      phone: this.phone,
      quantity: this.quantity,
      // note:  this.note
      price: this.price
    }).success(function(data){
      console.log('test');
      console.log(data);
      controller.food = data; 

    }).error(function (err){
      console.log(err)
    })
  }
}]);











