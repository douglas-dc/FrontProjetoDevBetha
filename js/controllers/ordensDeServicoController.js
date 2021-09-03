angular.module("projetoDevBetha").controller("ordensDeServicoController", function ($scope, ordemDeServicoService, $location){
    $scope.ordensDeServico = [];
    $scope.equipamentos = [];

    let findOrdensDeServico = function() {
        ordemDeServicoService.getOrdensDeServico().then(function(response) {
            $scope.ordensDeServico = response.data;
            console.log(response.data)
        })
    }  
    
    $scope.deleteOrdemDeServicoById = function(ordemDeServicoId) {
        ordemDeServicoService.deleteOrdemDeServico(ordemDeServicoId).then(function(){
            window.location.reload();
        }, function(error) {
            if (error.status == 403) {
                alert("Você não tem permissão para esta ação!")
            }
        })
    }
    
    findOrdensDeServico()
});
