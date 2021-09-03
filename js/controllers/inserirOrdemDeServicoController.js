angular.module("projetoDevBetha").controller("inserirOrdemDeServicoController", function ($scope, ordemDeServicoService, clienteService, $location){
    $scope.equipamentos = [];
    $scope.ordemDeServico = {
        "cliente": {
            "id": undefined
        },
        "equipamentos": []
    };
    
    let buscarClientes = function() {
        clienteService.getClientes().then(function(response) {
            $scope.clientes = response.data;
        }, function(error){
            console.log(error)
        })
    }

    $scope.insertEquipamento = function(equipamento) {
        $scope.ordemDeServico.equipamentos.push(equipamento)
        delete($scope.equipamento);
    }

    $scope.insertOrdemDeServico = function(ordemDeServico) {
        ordemDeServicoService.postOrdemDeServico(ordemDeServico).then(function() {
            $location.path("/ordens")
        }, function (error) {
            if (error.status == 403) {
                alert("Você não tem permissão para esta ação!")
            } else {
                alert("Insira todas as informações corretamente!")
            }      
        })
    }

    buscarClientes();
});