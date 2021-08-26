angular.module("projetoDevBetha").controller("novaOrdemDeServicoController", function ($scope, ordemDeServicoService, clienteService, $location){
    $scope.equipamentos = [];
    
    let buscarClientes = function() {
        clienteService.getClientes().then(function(response) {
            $scope.clientes = response.data;
        }, function(error){
            console.log(error)
        })
    }

    $scope.insertEquipamento = function(equipamento) {
        $scope.equipamentos.push(equipamento) 
        delete($scope.equipamento);
    }

    $scope.insertOrdemDeServico = function(ordemDeServico, equipamentos) {
        ordemDeServico.equipamentos = equipamentos;
        ordemDeServicoService.postOrdemDeServico(ordemDeServico).then(function() {
            $location.path("/ordens")
        }, function (error) {
            if(error.data.status == 400){
                alert(error.data.error)
            }
            if(error.data.status == 422){
                alert(error.data.errors[0].message)
            } 
        })
    }

    buscarClientes();
});