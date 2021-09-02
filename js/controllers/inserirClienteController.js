angular.module("projetoDevBetha").controller("inserirClienteController", function ($scope, clienteService, $location){

    $scope.insertCliente = function(cliente) {
        console.log(cliente)
        clienteService.postCliente(cliente).then(function() {
            $location.path("/clientes")
        }, function () {
           alert("Insira todas as informações corretamente!")
        })
    }
});
