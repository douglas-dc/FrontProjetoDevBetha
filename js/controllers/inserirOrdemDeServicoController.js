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