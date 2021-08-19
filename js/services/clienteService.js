angular.module("projetoDevBetha").service("clienteService", function ($http, config) {
    this.getClientes = function() {
        return $http.get(config.baseUrl + "/clientes")
    }

    this.postCliente = function(cliente) {
        return $http.post(config.baseUrl + "/clientes", cliente)
    }

    this.putCliente = function(cliente) {
        return $http.put(config.baseUrl + "/clientes/" + cliente.id, cliente)
    }
});