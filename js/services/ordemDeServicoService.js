angular.module("projetoDevBetha").service("ordemDeServicoService", function ($http, config) {
    
    this.getOrdensDeServico = function() {
        return $http.get(config.baseUrl + "/ordens")
    }

    this.getOrdemDeServicoById = function(ordemDeServicoId) {
        return $http.get(config.baseUrl + "/ordens/" + ordemDeServicoId)
    }

    this.deleteOrdemDeServico = function(ordemDeServicoId) {
        return $http.delete(config.baseUrl + "/ordens/" + ordemDeServicoId)
    }

    this.postOrdemDeServico = function(ordemDeServico) {
        return $http.post(config.baseUrl + "/ordens/", ordemDeServico)
    }

    this.putOrdemDeServico = function(ordemDeServico) {
        return $http.put(config.baseUrl + "/ordens/" + ordemDeServico.id, ordemDeServico)
    }

});