// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('login',{
      url:'/login',
      templateUrl:'templates/login.html',
      controller:'LoginCtrl'
  })
  .state('register',{
      url:'/register',
      templateUrl:'templates/register.html',
      controller:'RegisterCtrl'
  })
  .state('forgot',{
      url:'/forgot',
      templateUrl:'templates/forgot.html',
      controller:'ForgotCtrl'
  })
  .state('secy', {
    url: '/secy',
    abstract: true,
    templateUrl: 'templates/secy.html'
  })
  .state('ddo', {
    url: '/ddo',
    abstract: true,
    templateUrl: 'templates/ddo.html'
  })
  .state('secy.bills', {
      url: '/bills',
      views: {
        'secy-bills': {
          templateUrl: 'templates/secybills.html',
          controller: 'DashCtrl'
        }
      }
    })

  .state('secy.billsindi', {
      url: '/billsindi',
      views: {
        'secy-bills': {
          templateUrl: 'templates/billsindi.html',
          controller: 'DashCtrl'
        }
      }
    })
  .state('ddo.bills', {
    url: '/bills',
    views: {
      'ddo-bills': {
        templateUrl: 'templates/ddobills.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('secy.paid', {
    url: '/paid',
    views: {
      'secy-paid': {
        templateUrl: 'templates/secypaid.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('secy.paidindi', {
    url: '/paidindi',
    views: {
      'secy-paid': {
        templateUrl: 'templates/paidindi.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('ddo.paid', {
    url: '/paid',
    views: {
      'ddo-paid': {
        templateUrl: 'templates/ddopaid.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('secy.budget', {
      url: '/budget',
      views: {
        'secy-budget': {
          templateUrl: 'templates/secybudget.html',
          controller: 'ChatsCtrl'
        }
      }
  })
  .state('secy.budgetdist', {
      url: '/budgetdist',
      views: {
        'secy-budget': {
          templateUrl: 'templates/budgetdist.html',
          controller: 'ChatsCtrl'
        }
      }
  })
  .state('secy.budgetindi', {
      url: '/budgetindi',
      views: {
        'secy-budget': {
          templateUrl: 'templates/budgetindi.html',
          controller: 'ChatsCtrl'
        }
      }
  })
  .state('ddo.budget', {
      url: '/budget',
      views: {
        'ddo-budget': {
          templateUrl: 'templates/ddobudget.html',
          controller: 'ChatsCtrl'
        }
      }
  })
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/login.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');

});
