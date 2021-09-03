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
        if(equipamentos.length > 1){
            var verifica = true;
            for(var i=0; i<equipamentos.length; i++) {
                if(file[i].files[0] == null){
                    verifica = false
                }
            }
        }

        if(verifica == true) {
            for(var i=0;i<equipamentos.length;i++) {
                var equipamentoId = equipamentos[i].id;    
                ordemDeServicoService.postImagem(equipamentoId,
                file[i].files[0]).then(function() {
                     //window.location.reload();
                    console.log("upload concluído");
                }, function(error) {
                    alert(error.data.message)
                })
            }
        }

        var img = document.getElementById("file").files[0]
        equipamentoId = equipamentos[0].id; 
        console.log(img)
        ordemDeServicoService.postImagem(equipamentoId, img).then(function() {
            //window.location.reload();
            console.log("upload concluído")
        }, function(error) {
            alert(error.data.message)
        })
    }

    $scope.updateOrdemDeServico = function(ordemDeServico) {
        ordemDeServicoService.putOrdemDeServico(ordemDeServico).then(function() {
            $location.path("/ordens")
        }, function (error) {
            if (error.status == 403) {
                alert("Você não tem permissão para esta ação!")
            } else {
                alert("Insira todas as informações corretamente!")
            }      
        })
    }

    $scope.findOrdemDeServicoById($routeParams.id);
    
});