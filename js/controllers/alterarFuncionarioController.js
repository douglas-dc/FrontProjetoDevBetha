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
            if (error.status == 403) {
                alert("Você não tem permissão para esta ação!")
            } else {
                alert("Insira todas as informações corretamente!")
            }      
        })
    }
})