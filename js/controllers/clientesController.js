angular.module("projetoDevBetha").controller("clientesController", function ($scope, clienteService){
    $scope.clientes = [];

    let findClientes = function() {
        clienteService.getClientes().then(function(response) {
            $scope.clientes = response.data;
            console.log(response.data)
        })
    }

    findClientes()
});