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
        })
    }

    findOrdensDeServico()
});
/*
$scope.onAdicionarImagem = function (id) {
    let equipamentosOrdem = $scope.ordemDeServico.equipamentos;
    let inputElement;

    for (let i = 0; i < equipamentosOrdem.length; i++) {
      if (equipamentosOrdem[i].id === id) {
        inputElement = document.getElementsByClassName(
          "addImagemEquipamento"
        )[i].files[0];
      }
    }

    adicionarImagem(id, inputElement);
  };

  var adicionarImagem = function (ordemDeServicoId, imageFile) {
    ordemDeServicoService.adicionarImagem(ordemDeServicoId, imageFile).then(
      function (response) {
        console.log(response);
        $route.reload();
      },
      function (err) {
        console.log(err);
      }
    );
  };
}
);*/