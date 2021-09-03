angular.module("projetoDevBetha").controller("alterarClienteController", function ($scope, clienteService, $routeParams, $location){

    $scope.findClienteById = function(clienteId) {
        clienteService.getClienteById(clienteId).then(function(response) {
            $scope.cliente = response.data;
            console.log(response.data)
        })
    }

    $scope.findClienteById($routeParams.id)

    $scope.updateCliente = function(cliente) { 
        clienteService.putCliente(cliente).then(function() {
            $location.path("/clientes")
        }, function (error) {
            if (error.status == 403) {
                alert("Você não tem permissão para esta ação!")
            } else {
                alert("Insira todas as informações corretamente!")
            }      
        })
    }
})