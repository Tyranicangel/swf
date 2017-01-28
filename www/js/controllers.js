angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope,$http,$state,$ionicPopup,$ionicLoading) {
  $scope.user={};
  // $ionicLoading.show({
  //   template: '<ion-spinner icon="spiral"></ion-spinner>'
  // });
  // if(localStorage.getItem('swfToken')=='secy')
  // {

  // }
  // else if(localStorage.getItem('swfToken')=='ddo')
  // {

  // }
  // else
  // {
  //   $ionicLoading.hide();
  // }
  $scope.login=function(){
    if($scope.user.username=='secy')
    {
      $state.go('secy.bills');
    }
    else
    {
      $state.go('ddo.bills');
    }
    // $http({
    //   method:'POST',
    //   url:'http://localhost/swfback/public/login',
    //   data:$scope.user,
    //   headers: {'Content-Type': 'application/json'}
    // }).success(function(result){
    //   $ionicLoading.hide();
    //   $scope.user={};
    //   if(result[0]=="Success")
    //   {
    //     localStorage.setItem('swfToken',result[1]);
    //     // $state.go('tabs');
    //   }
    //   else
    //   {
    //     $ionicPopup.alert({
    //       title:'Error',
    //       template:result[1]
    //     });
    //   }
    // });
  }
})

.controller('RegisterCtrl', function($scope,$http,$ionicPopup,$ionicLoading,$state){
  $scope.check={};
  $scope.mainuser={};
  $scope.checkuser=function(){
    $ionicLoading.show({
      template: '<ion-spinner icon="spiral"></ion-spinner>'
    });
    $http({
      method:'GET',
      url:'http://localhost/swfback/public/checkuser',
      params: {username:$scope.check.name},
      headers: {'Content-Type': 'application/json'}
    }).success(function(result){
      $ionicLoading.hide();
      if(result[0]=="Error")
      {
        $ionicPopup.alert({
          title:'Error',
          template:result[1]
        });
      }
      else
      {
        $scope.mainuser=result[1];
      }
      $scope.questions=result[2];
    });
  }

  $scope.register=function(){
    if($scope.mainuser.password==$scope.mainuser.confirm)
    {
      $ionicLoading.show({
        template: '<ion-spinner icon="spiral"></ion-spinner>'
      });
      $http({
        method:'POST',
        url:'http://localhost/swfback/public/registeruser',
        data: $scope.mainuser,
        headers: {'Content-Type': 'application/json'}
      }).success(function(result){
        $ionicLoading.hide();
        if(result[0]=="Error")
        {
          $ionicPopup.alert({
            title:'Error',
            template:result[1]
          });
        }
        else
        {
          $scope.mainuser={};
          $scope.check={};
          var rpop=$ionicPopup.alert({
            title:'Success',
            template:result[1]
          });
          rpop.then(function(res){
            $state.go('login');
          });
        }
      });
    }
    else
    {
      $ionicPopup.alert({
        title:"Error",
        template:"Password and Confirm password do not match"
      });
    }
  }
})

.controller('ForgotCtrl', function($scope,$http,$state,$ionicPopup,$ionicLoading){
  $scope.check={};
  $scope.mainuser={};
  $scope.checkuser=function(){
    $ionicLoading.show({
      template: '<ion-spinner icon="spiral"></ion-spinner>'
    });
    $http({
      method:'GET',
      url:'http://localhost/swfback/public/checkuser_forgot',
      params: {username:$scope.check.name},
      headers: {'Content-Type': 'application/json'}
    }).success(function(result){
      $ionicLoading.hide();
      if(result[0]=="Error")
      {
        $ionicPopup.alert({
          title:'Error',
          template:result[1]
        });
      }
      else
      {
        $scope.mainuser=result[1];
      }
    });
  }

  $scope.forgot=function(){
    if($scope.mainuser.password==$scope.mainuser.confirm)
    {
      $ionicLoading.show({
        template: '<ion-spinner icon="spiral"></ion-spinner>'
      });
      $http({
        method:'POST',
        url:'http://localhost/swfback/public/forgotuser',
        data: $scope.mainuser,
        headers: {'Content-Type': 'application/json'}
      }).success(function(result){
        $ionicLoading.hide();
        if(result[0]=="Error")
        {
          $ionicPopup.alert({
            title:'Error',
            template:result[1]
          });
        }
        else
        {
          $scope.mainuser={};
          $scope.check={};
          var rpop=$ionicPopup.alert({
            title:'Success',
            template:result[1]
          });
          rpop.then(function(res){
            $state.go('login');
          });
        }
      });
    }
    else
    {
      $ionicPopup.alert({
        title:"Error",
        template:"Password and Confirm password do not match"
      });
    }
  }
})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
