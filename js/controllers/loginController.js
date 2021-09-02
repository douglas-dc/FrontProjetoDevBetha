angular.module("projetoDevBetha").controller("loginController", function ($scope, $location, loginService) {

    $scope.entrar = function(usuario) {        
        loginService.postLogin(usuario).then(function(response) {
            localStorage.setItem("authorization", response.headers("Authorization"));
            $location.path("/homepage");
        }, function() {
            alert("Credenciais de usuário incorretas");
        })
    };
});
    