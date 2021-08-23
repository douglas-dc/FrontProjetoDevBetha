angular.module("projetoDevBetha").controller("inserirClienteController", function ($scope, clienteService, $location){

    $scope.insertCliente = function(cliente) {
        console.log(cliente)
        clienteService.postCliente(cliente).then(function() {
            $location.path("/clientes")
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
