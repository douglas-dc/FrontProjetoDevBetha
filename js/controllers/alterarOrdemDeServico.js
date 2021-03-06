angular.module("projetoDevBetha").controller("alterarOrdemDeServicoController", function ($scope, ordemDeServicoService, clienteService, $routeParams, $location){

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

    $scope.uploadImagem = function(equipamentos) {
        if (equipamentos.length > 1) {
            for(var i=0; i < equipamentos.length; i++) {
                var equipamentoId = equipamentos[i].id;
                if (file[i].files[0] != null || file[i].files[0] != undefined) {
                    ordemDeServicoService.postImagem(equipamentoId,
                        file[i].files[0]).then(function() {
                            //window.location.reload();
                        }, function(error) {
                            alert(error.data.message)
                        })
                }    
            }
        } else {
            var img = document.getElementById("file").files[0]
            equipamentoId = equipamentos[0].id; 
            console.log(img)
            ordemDeServicoService.postImagem(equipamentoId, img).then(function() {
                //window.location.reload();
            }, function(error) {
                alert(error.data.message)
            })
        }
    }

    $scope.updateOrdemDeServico = function(ordemDeServico) {
        ordemDeServicoService.putOrdemDeServico(ordemDeServico).then(function() {
            $location.path("/ordens")
        }, function (error) {
            if (error.status == 403) {
                alert("Voc?? n??o tem permiss??o para esta a????o!")
            } else {
                alert("Insira todas as informa????es corretamente!")
            }      
        })
    }

    $scope.findOrdemDeServicoById($routeParams.id);
});