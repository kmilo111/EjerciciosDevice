angular.module('app.controllers', ['ngCordova'])
     
.controller('dispositvoCtrl', ['$scope', '$stateParams', '$cordovaDevice',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDevice) {
    $scope.DeviceInformation = function(){
	    $scope.device = $cordovaDevice.getDevice();
        $scope.cordova = $cordovaDevice.getCordova();
    	$scope.model = $cordovaDevice.getModel();
    	$scope.platform =  $cordovaDevice.getPlatform();
    	$scope.uuid = $cordovaDevice.getUUID();
    	$scope.version = $cordovaDevice.getVersion();
	}
}])
   
.controller('acelerometroCtrl', ['$scope', '$stateParams', '$cordovaDeviceMotion', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDeviceMotion) {
       $scope.getCurrentDeviceMotion = function(){
		$cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
		      $scope.x = result.x;
		      $scope.y = result.y;
		      $scope.z = result.z;
		      $scope.timeStamp = result.timestamp;
	    }, function(err) {
	      // An error occurred. Show a message to the user
          alert('Algo salio mal');
	    });
     }

}])
   
.controller('redCtrl', ['$scope', '$stateParams', '$cordovaNetwork',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaNetwork) {
    $scope.getNetwork = function(){
       $scope.tipo = $cordovaNetwork.getNetwork();
       $scope.isOnline = $cordovaNetwork.isOnline();
      $scope.isOffline = $cordovaNetwork.isOffline();
    }

}])
   
.controller('brujulaCtrl', ['$scope', '$stateParams', '$cordovaDeviceOrientation', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDeviceOrientation) {
     $scope.getOrientacion = function(){
        $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
         $scope.magneticHeading = result.magneticHeading;
         $scope.trueHeading = result.trueHeading;
         $scope.accuracy = result.headingAccuracy;
         $scope.timeStamp = result.timestamp;
       }, function(err) {
        // An error occurred
         alert('Algo salio mal');
       });
    }

}])
 