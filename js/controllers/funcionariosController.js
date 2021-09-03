angular.module("projetoDevBetha").controller("funcionariosController", function ($scope, funcionarioService){
    $scope.funcionarios = [];

    let findFuncionarios = function() {
        funcionarioService.getFuncionarios().then(function(response) {
            $scope.funcionarios = response.data;
            console.log(response.data)
        }, function(error) {
            if (error.status == 403) {
                alert("Você não tem permissão para visualizar os dados!")
            }
        })
    }

    $scope.deleteFuncionarioById = function(funcionarioId) {
        funcionarioService.deleteFuncionario(funcionarioId).then(function(){
            window.location.reload();
        })
    }

    findFuncionarios()
});