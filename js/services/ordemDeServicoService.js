angular.module("projetoDevBetha").service("ordemDeServicoService", function ($http, config) {
    
    this.getOrdensDeServico = function() {
        return $http.get(config.baseUrl + "/ordens")
    }

    this.getOrdemDeServicoById = function(ordemDeServicoId) {
        return $http.get(config.baseUrl + "/ordens/" + ordemDeServicoId)
    }
});