app.controller('MainController', ['$scope', function($scope){
  $scope.title = 'My Books';
  $scope.promo = 'Books on the study of JavaScript';
  $scope.products = [ 
    { 
      name: 'JavaScript for Web Developers Third Edition', 
      price: 19, 
      pubdate: new Date('2015', '03', '08'), 
      cover: 'img/Nicholas-С-Zakas.jpg',
      likes: 0,
      dislikes: 0
    }, 
    { 
      name: 'Marijn Haverbeke Выразительный Javascript', 
      price: 8, 
      pubdate: new Date('2015', '08', '01'), 
      cover: 'img/Marijn-Haverbeke.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Douglas Crockford The Good Parts', 
      price: 22, 
      pubdate: new Date('2012', '03', '08'), 
      cover: 'img/javascript-the-good-parts.jpg',
      likes: 0,
      dislikes: 0
    }, 
    { 
      name: 'Stoyan Stefanov JavaScript Patterns', 
      price: 18, 
      pubdate: new Date('2011', '08', '01'), 
      cover: 'img/JavaScript_Shablony-2011.jpg',
      likes: 0,
      dislikes: 0
    }
  ];
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes ++;
  };
  
}]);