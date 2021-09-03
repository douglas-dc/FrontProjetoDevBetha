angular.module("projetoDevBetha").controller("inserirClienteController", function ($scope, clienteService, $location){

    $scope.insertCliente = function(cliente) {
        console.log(cliente)
        clienteService.postCliente(cliente).then(function() {
            $location.path("/clientes")
        }, function (error) {
            if (error.status == 403) {
                alert("Você não tem permissão para esta ação!")
            } else {
                alert("Insira todas as informações corretamente!")
            }      
        })
    }
});
