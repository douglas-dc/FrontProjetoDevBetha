angular.module("projetoDevBetha").config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('')

    $routeProvider.when("/login", {
        templateUrl: "view/login.html",
        controller: "loginController"
    })

    $routeProvider.when("/homepage", {
        templateUrl: "view/homepage.html"
    })

    $routeProvider.when("/clientes", {
        templateUrl: "view/clientes.html",
        controller: "clientesController"
    })

    $routeProvider.when("/novocliente", {
        templateUrl: "view/novoCliente.html",
        controller: "inserirClienteController"
    })

    $routeProvider.when("/alterarcliente/:id", {
        templateUrl: "view/alterarCliente.html",
        controller: "alterarClienteController"
    })

    $routeProvider.when("/funcionarios", {
        templateUrl: "view/funcionarios.html",
        controller: "funcionariosController"
    })

    $routeProvider.when("/novofuncionario", {
        templateUrl: "view/novofuncionario.html",
        controller: "inserirFuncionarioController"
    })

    $routeProvider.when("/alterarfuncionario/:id", {
        templateUrl: "view/alterarFuncionario.html",
        controller: "alterarFuncionarioController"
    })

    $routeProvider.when("/ordens", {
        templateUrl: "view/ordensDeServico.html",
        controller: "ordensDeServicoController"
    })

    $routeProvider.when("/novaordemdeservico", {
        templateUrl: "view/novaOrdemDeServico.html",
        controller: "inserirOrdemDeServicoController"
    })

    $routeProvider.when("/alterarordemdeservico/:id", {
        templateUrl: "view/alterarOrdemDeServico.html",
        controller: "alterarOrdemDeServicoController"
    })
});