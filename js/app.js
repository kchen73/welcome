var myApp = angular.module('myApp', ['ngRoute'])

.config(function($routeProvider) {
    
  $routeProvider
  
    .when('/', { 
        templateUrl: 'templates/landing.html',
        controller: 'LandingController', 
    })

    .when('/about/', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController', 
    })

    .when('/officers/', { 
        templateUrl: 'templates/officers.html',
        controller: 'OfficerController', 
    })

    .when('/awards/', { 
        templateUrl: 'templates/awards.html',
        controller: 'AwardController', 
    })

    .when('/events/', { 
        templateUrl: 'templates/events.html',
        controller: 'EventController', 
    })

    .when('/case-comp/', { 
        templateUrl: 'templates/case-comp.html',
        controller: 'CasecompController', 
    })

    .when('/mentorship/', { 
        templateUrl: 'templates/mentorship.html',
        controller: 'MentorshipController', 
    })

    .when('/speakers/', { 
        templateUrl: 'templates/speakers.html',
        controller: 'SpeakerController', 
    })

    .when('/sponsors/', { 
        templateUrl: 'templates/sponsors.html',
        controller: 'SponsorController', 
    })

    .when('/partners/', { 
        templateUrl: 'templates/partners.html',
        controller: 'PartnerController', 
    })

    .when('/membership/', { 
        templateUrl: 'templates/membership.html',
        controller: 'MembershipController', 
    })

    .when('/officer-app/', { 
        templateUrl: 'templates/officer-app.html',
        controller: 'OfficerappController', 
    })

    .when('/au16/', { 
        templateUrl: 'templates/au16.html',
        controller: 'Au16Controller', 
    })

    .when('/wi16/', { 
        templateUrl: 'templates/wi16.html',
        controller: 'Wi16Controller', 
    })
  })

  .controller('IndexController', function($scope) {
    $scope.number = 0;
  })

  .controller('AboutController', function($scope) {
    $scope.number = 1;
  })

  .controller('OfficerController', function($scope) {
    $scope.number = 2;
  })

  .controller('AwardController', function($scope) {
    $scope.number = 3;
  })

  .controller('EventController', function($scope) {
    $scope.number = 4;
  })

  .controller('CasecompController', function($scope) {
    $scope.number = 5;
  })

  .controller('MentorshipController', function($scope) {
    $scope.number = 6;
  })

  .controller('OfficerController', function($scope) {
    $scope.number = 7;
  })

  .controller('SpeakerController', function($scope) {
    $scope.number = 8;
  })

  .controller('SponsorController', function($scope) {
    $scope.number = 9;
  })

  .controller('PartnerController', function($scope) {
    $scope.number = 10;
  })

  .controller('MembershipController', function($scope) {
    $scope.number = 11;
  })

  .controller('OfficerappController', function($scope) {
    $scope.number = 12;
  })

  .controller('Au16Controller', function($scope) {
    $scope.number = 13;  
  })

  .controller('Wi16Controller', function($scope) {
    $scope.number = 14;  
  });