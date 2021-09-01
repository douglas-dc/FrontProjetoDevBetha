angular.module("projetoDevBetha").controller("loginController", function ($scope, $location, loginService) {

    $scope.entrar = function(usuario) {        
        loginService.postLogin(usuario).then(function(response) {
            const authorization = response.headers("authorization");
            localStorage.setItem("token", authorization);
            $location.path("/homepage");
        }, function(){
            alert("Credenciais de usuário incorretas");
        })
    };
});
    