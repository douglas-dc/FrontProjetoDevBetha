angular.module("projetoDevBetha").controller("inserirFuncionarioController", function ($scope, funcionarioService, $location){

    $scope.insertFuncionario = function(funcionario) {
        funcionarioService.postFuncionario(funcionario).then(function() {
            $location.path("/funcionarios")
        }, function (error) {
            if(error.data.status == 400){
                alert(error.data.error)
            }
            if(error.data.status == 422){
                alert(error.data.errors[0].message)
            } 
        })
    }
});