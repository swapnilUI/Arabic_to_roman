angular.module("ArabictoromanServices",[])
.service('api', ['$http', function($http){
    this.getAllNumbers = function(){
        return $http.get('/addnumber');
    }
    this.checkPrimeNumber = function(value){
        for(var i = 2; i < value; i++) {
			if(value % i === 0) {
				return false;
			}
		}
		return value > 1;
    }
    this.addNewNumber = function(data){
        return $http.post('/addnumber', data);
    }
}]);