angular.module("projetoDevBetha").controller("clientesController", function ($scope, clienteService, $routeParams){
    $scope.clientes = [];

    let findClientes = function() {
        clienteService.getClientes().then(function(response) {
            $scope.clientes = response.data;
            console.log(response.data)
        })
    }

    //novoCliente
    $scope.insertCliente = function(cliente) {
        $scope.clientes.push(clienteService.postCliente(cliente))
    }

    //alterarCliente
    $scope.updateCliente = function(cliente) { 
        cliente.id = $routeParams.id
        clienteService.putCliente(cliente)
    }

    findClientes()
});