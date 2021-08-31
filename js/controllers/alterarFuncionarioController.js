angular.module("projetoDevBetha").controller("alterarFuncionarioController", function ($scope, funcionarioService, $routeParams, $location){

    $scope.findFuncionarioById = function(funcionarioId) {
        funcionarioService.getFuncionarioById(funcionarioId).then(function(response) {
            $scope.funcionario = response.data;
            console.log(response.data)
        })
    }

    $scope.findFuncionarioById($routeParams.id)

    $scope.updateFuncionario = function(funcionario) { 
        funcionarioService.putFuncionario(funcionario).then(function() {
            $location.path("/funcionarios")
        }, function (error) {
            if(error.data.status == 400){
                alert(error.data.message)
            }
            if(error.data.status == 422){
                alert(error.data.errors[0].message)
            }
        })
    }
})