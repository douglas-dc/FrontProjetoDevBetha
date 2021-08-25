angular.module("projetoDevBetha").controller("funcionariosController", function ($scope, funcionarioService, $location){
    $scope.funcionarios = [];

    let findFuncionarios = function() {
        funcionarioService.getFuncionarios().then(function(response) {
            $scope.funcionarios = response.data;
            console.log(response.data)
        })
    }

    $scope.deleteFuncionarioById = function(funcionarioId) {
        funcionarioService.deleteFuncionario(funcionarioId).then(function(){
            findFuncionarios()
        })
    }

    findFuncionarios()
});