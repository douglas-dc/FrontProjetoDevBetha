angular.module("projetoDevBetha").service("funcionarioService", function ($http, config) {
    this.getFuncionarios = function() {
        return $http.get(config.baseUrl + "/funcionarios")
    }

    // this.getClienteById = function(clienteId) {
    //     return $http.get(config.baseUrl + "/clientes/" + clienteId)
    // }

    this.postFuncionario = function(funcionarios) {
        return $http.post(config.baseUrl + "/funcionarios", funcionarios)
    }

    // this.putCliente = function(cliente) {
    //     return $http.put(config.baseUrl + "/clientes/" + cliente.id, cliente)
    // }
});