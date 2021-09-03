angular.module("projetoDevBetha").controller("inserirFuncionarioController", function ($scope, funcionarioService, $location){

    $scope.insertFuncionario = function(funcionario) {
        funcionarioService.postFuncionario(funcionario).then(function() {
            $location.path("/funcionarios")
        }, function (error) {
            if (error.status == 403) {
                alert("Você não tem permissão para esta ação!")
            } else {
                alert("Insira todas as informações corretamente!")
            }      
        })
    }
});