angular.module("projetoDevBetha").service("funcionarioService", function ($http, config) {
    
    this.getFuncionarios = function() {
        return $http.get(config.baseUrl + "/funcionarios")
    }

    this.getFuncionarioById = function(funcionarioId) {
        return $http.get(config.baseUrl + "/funcionarios/" + funcionarioId)
    }

    this.postFuncionario = function(funcionario) {
        return $http.post(config.baseUrl + "/funcionarios", funcionario)
    }

    this.putFuncionario = function(funcionario) {
        return $http.put(config.baseUrl + "/funcionarios/" + funcionario.id, funcionario)
    }

    this.deleteFuncionario = function(funcionarioId) {
        return $http.delete(config.baseUrl + "/funcionarios/" + funcionarioId)
    }
});