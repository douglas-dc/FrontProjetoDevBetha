angular.module("projetoDevBetha").controller("inserirOrdemDeServicoController", function ($scope, ordemDeServicoService, clienteService, $location) {
    $scope.equipamentos = [];
    $scope.ordemDeServico = {
        "cliente": {
            "id": undefined
        },
        "equipamentos": []
    };

    let buscarClientes = function () {
        clienteService.getClientes().then(function (response) {
            $scope.clientes = response.data;
        }, function (error) {
            console.log(error)
        })
    }

    $scope.insertEquipamento = function (equipamento) {
        if (equipamento === null || equipamento === undefined) {
            alert("Insira as todas as informações corretamente!")
        } else {
            $scope.ordemDeServico.equipamentos.push(equipamento)
            delete ($scope.equipamento);
        }
    }

    $scope.insertOrdemDeServico = function (ordemDeServico) {
        if (ordemDeServico.cliente.id == null || ordemDeServico.equipamentos.length == 0) {
            alert("Insira as todas as informações corretamente!")
        } else {
            ordemDeServicoService.postOrdemDeServico(ordemDeServico).then(function () {
                $location.path("/ordens")
            }, function (error) {
                if (error.status == 403) {
                    alert("Você não tem permissão para esta ação!")
                }
            })
        }
    }

    buscarClientes();
});