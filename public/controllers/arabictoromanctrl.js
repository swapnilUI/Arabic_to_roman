angular.module('ArabicToRomanApp', [])
.controller('ArabicToRomanCtrl', ['$scope','api', function($scope,api) {

	//First converted numbers call
    function reloadList(){
		api.getAllNumbers().then(function(res){
			$scope.numbersList =  res.data.sort(function(a,b){
				return a.arabic - b.arabic;
			});
		});
	}
	reloadList();
	//Fuction to check if number is prime or not.
	$scope.isPrime = function(value) {
		return api.checkPrimeNumber(value);
	}
	
	function checkAlreadyExist(nameKey){
		for (var i=0; i < $scope.numbersList.length; i++) {
			if ($scope.numbersList[i].arabic === nameKey) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	//Submit function for new number
	$scope.submitNumber = function(){
		if($scope.numberform.number != "" && checkAlreadyExist($cope.numberform.number)){		
			api.addNewNumber($scope.numberform).then(function(){
				reloadList();
			});
		}
	};	
}]);


