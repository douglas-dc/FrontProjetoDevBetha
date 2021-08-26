angular.module("projetoDevBetha").controller("alterarOrdemDeServicoController", function ($scope, ordemDeServicoService, clienteService, $routeParams){

    $scope.listStatus = ["PENDENTE", "AGUARDANDO_CLIENTE", "APROVADA", "RECUSADA", "CONCLUIDA"];
    
    let buscarClientes = function() {
        clienteService.getClientes().then(function(response) {
            $scope.clientes = response.data;
            console.log(response)
        }, function(error){
            console.log(error)
        })
    }

    $scope.findOrdemDeServicoById = function(ordemDeServicoId) {
        ordemDeServicoService.getOrdemDeServicoById(ordemDeServicoId).then(function(response) {
            $scope.ordemDeServico = response.data
            console.log(response.data)
        }, function(error) {
            console.log(error);
        })
    }
    buscarClientes();
    
    $scope.findOrdemDeServicoById($routeParams.id);
    
});