angular.module("projetoDevBetha").config(function($httpProvider) {
    $httpProvider.interceptors.push("tokenAuthenticationInterceptor");

});
