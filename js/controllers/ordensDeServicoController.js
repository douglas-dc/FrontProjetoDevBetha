angular.module("projetoDevBetha").controller("ordensDeServicoController", function ($scope, ordemDeServicoService){
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
        })
    }

    findOrdensDeServico()
});