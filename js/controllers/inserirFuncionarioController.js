angular.module("projetoDevBetha").controller("inserirFuncionarioController", function ($scope, funcionarioService, $location){

    $scope.insertFuncionario = function(funcionario) {
        funcionarioService.postFuncionario(funcionario).then(function() {
            $location.path("/funcionarios")
        }, function (error) {
            alert("Insira todas as informações corretamente!")
        })
    }
});