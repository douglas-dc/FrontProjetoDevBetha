angular.module("projetoDevBetha").factory("tokenAuthenticationInterceptor", function() {
    return {
        request: function(config) {
            config.headers.Authorization = localStorage.getItem("authorization");
            return config;
        }
    }
})
