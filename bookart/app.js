var myApp = angular.module("myApp", []);

myApp.controller("HeaderCtrl", function($scope) {
  $scope.appDetails = {
    title: "BooKart",
    tagline: "We have 1 million books for you."
  }
});

myApp.controller("BookListCtrl", function($scope) {
  $scope.books = [
    {
      imgUrl: "adultery.jpg",
      name: "Adultery",
      price: "$ 25",
      rating: 4,
      binding: "Paperback",
      publisher: "Random House Media",
      releaseDate: "12-08-2014",
      details: "Linda, In her thirties begins to question the routine and predicability of her days."
    },
    {
      imgUrl: "adultery.jpg",
      name: "Harry Potter and the Sorcerer's Stone",
      price: "$ 8.99",
      rating: 4.4,
      binding: "Hardcover",
      publisher: "Scholastic Inc",
      releaseDate: "June 26th 1997",
      details: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft"
    },
    {
      imgUrl: "galaxy.jpg",
      name: "The Hitchhiker's Guide to the Galaxy",
      price: "$ 7.19",
      rating: 4.2,
      binding: "Paperback",
      publisher: "Del Rey Books",
      releaseDate: "January 9th 2009",
      details: "Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor. Together this dynamic pair begin a journey through space aided by quotes from The Hi"
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
  $scope.AddToKart = function(book) {
    console.log("add to kart :", book);
  };
});
