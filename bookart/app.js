var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);
myApp.config(function($routeProvider) {
  $routeProvider
    .when("/books", {
      templateUrl: "partials/book-list.html",
      controller: "BookListCtrl"
    })
    .when("/kart", {
      templateUrl: "partials/kart-list.html",
      controller: "KartListCtrl"
    })
    .otherwise({
      redirectTo: "/books"
    });
});
myApp.factory("bookService", function() {
var books = [
  {
    imgUrl: "adultery.jpg",
    name: "Adultery",
    price: "25",
    rating: 4,
    binding: "Paperback",
    publisher: "Random House Media",
    releaseDate: "12-08-2014",
    details: "Linda, In her thirties begins to question the routine and predicability of her days."
  },
  {
    imgUrl: "harry.jpg",
    name: "Harry Potter and the Sorcerer's Stone",
    price: "8.99",
    rating: 4.4,
    binding: "Hardcover",
    publisher: "Scholastic Inc",
    releaseDate: "June 26th 1997",
    details: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft"
  },
  {
    imgUrl: "galaxy.jpg",
    name: "The Hitchhiker's Guide to the Galaxy",
    price: "7.19",
    rating: 4.2,
    binding: "Paperback",
    publisher: "Del Rey Books",
    releaseDate: "January 9th 2009",
    details: "Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor. Together this dynamic pair begin a journey through space aided by quotes from The Hi"
  },
  {
    imgUrl: "way.jpeg",
    name: "The Way I Feel",
    price: "6.40",
    rating: 4,
    binding: "Board Book",
    publisher: "Parenting Press",
    releaseDate: "January, 2005",
    details: "Feelings are a normal part of life for children as well as adults, believes author Janan Cain, who wanted kids both to understand the concept of emotions and be able to express their feelings with words. Her delightful The Way I Feel has drawn praise from parents, educators and medical professionals across the country. It's used at bedtime, when parents want to talk about what happened that day; in classrooms, when teachers want to talk about pride and disappointment; and with sick children who are suffering from fear and confusion as well as pain."
  },
  {
    imgUrl: "glad.jpeg",
    name: "Glad Monster, Sad Monster",
    price: "10.30",
    rating: 4,
    binding: "Hardcover",
    publisher: "Little, Brown Books for Young Readers",
    releaseDate: "September, 1997",
    details: "Sometimes it's hard to tell someone that you are sad, happy, lonely, or glad. This joyful and useful book enables children and adults to discuss feelings in an easy and nonthreatening way.Each spread features a friendly monster that talks about a particular feeling. After reading about each monster, children are encouraged to share their own feelings by using masks that fold out from the book."
  },
  {
    imgUrl: "code.jpeg",
    name: "The Da Vinci Code",
    price: "9.99",
    rating: 4,
    binding: "Paperback",
    publisher: "Anchor, Knopf Doubleday Publishing Group",
    releaseDate: "March, 2006",
    details: "While in Paris on business, Harvard symbologist Robert Langdon receives an urgent late-night phone call. The elderly curator of the Louvre has been murdered inside the museum, a baffling cipher found near the body. As Langdon and a gifted French cryptologist, Sophie Neveu, sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Da Vinci--clues visible for all to see and yet ingeniously disguised by the painter. The stakes are raised when Langdon uncovers a startling link: the late curator was involved in the Priory of Sion--an actual secret society whose members included Sir Isaac Newton, Botticelli, Victor Hugo, and Da Vinci, among others. Langdon suspects they One of the bestselling novels of all time, Dan Brown’s The Da Vinci Code has intrigued and thrilled millions of readers around the world."
  },
  {
    imgUrl: "adultery.jpg",
    name: "Find My Way Home",
    price: "6.99",
    rating: 4,
    binding: "Paperback",
    publisher: "Random House Media",
    releaseDate: "12-08-2014",
    details: "Linda, In her thirties begins to question the routine and predicability of her days."
  },
  {
    imgUrl: "home.jpeg",
    name: "Find My Way Home",
    price: "6.99",
    rating: 4,
    binding: "Paperback",
    publisher: "Jessica Scott",
    releaseDate: "May, 2015",
    details: "Captain Sal Bello wants nothing more than to train his men for their upcoming deployment. But life at home is far more complicated for many of his men. And Sal doesn't know how to stop the unraveling within his formation. First Sergeant Holly Washington has been baptized by fire and come out steel. She knows how to lead soldiers in combat and bring them safely home. But she's not prepared for the strain she finds in her soldiers and the weight carried by the one man she's not supposed to fall for. When a young sergeant is faced with the choice between her career and her life, Holly comes face to face with her past and the life she's tried to forget. When Sal refuses to let her face those demons alone, they'll cross the line between officer and enlisted. And the fallout could be more than either of them are prepared to face."
  },
  {
    imgUrl: "adultery.jpg",
    name: "Adultery",
    price: 205,
    rating: 4,
    binding: "Paperback",
    publisher: "Random House Media",
    releaseDate: "12-08-2014",
    details: "Linda, In her thirties begins to question the routine and predicability of her days."
  },
  {
    imgUrl: "adultery.jpg",
    name: "Adultery",
    price: 205,
    rating: 4,
    binding: "Paperback",
    publisher: "Random House Media",
    releaseDate: "12-08-2014",
    details: "Linda, In her thirties begins to question the routine and predicability of her days."
  }
];
return {
  getBooks : function(){
    return books;
  }
};
});

myApp.factory("kartService", function() {
  var kart = [];
  return {
    getKart : function() {
      return kart;
    },
    addToKart : function(book) {
      kart.push(book);
    },
    buy : function(book) {
      alert("Thanks for buying " + book.name);
    }
  };
});

myApp.controller("HeaderCtrl", function($scope, $location) {
  $scope.appDetails = {
    title: "BooKart",
    tagline: "We have 1 million books for you."
  };
  $scope.nav= {};

  $scope.nav.isActive = function(path) {
    if(path === $location.path()) {
      return true;
    }
    return false;
  }
});

myApp.controller("BookListCtrl", function($scope, bookService, kartService) {
  $scope.books = bookService.getBooks();
  $scope.AddToKart = function(book) {
    kartService.addToKart(book);
  };
});

myApp.controller("KartListCtrl", function($scope, kartService) {
  $scope.kart = kartService.getKart();
  $scope.buy = function(book) {
    kartService.buy(book);
  };
});
