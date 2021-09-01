angular.module("projetoDevBetha").service("loginService", function ($http, config) {

    this.postLogin = function(usuario) {
        return $http.post(config.baseUrl + "/login", usuario)
    }
})