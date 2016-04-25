

var child2 = {
        name: "home.child2",
        url: "/child2",
        template: "<h1>Child2</h1><p>home.child2 state</p>"
    },
    // Using Parent Property
    child3 = {
        parent:"home",
        name: "child3",
        url: "/child3",
        template: "<h1>Child3</h1><p>home.child3 state</p>"
    },
    /*
    * Absolute Routing
    * https://github.com/angular-ui/ui-router/wiki/URL-Routing#absolute-routes-
    * */
    child4 = {
        name: "home.child4",
        url: "^/child4",
        template: "<h1>Child4</h1><p>home.child4 state</p>"
    };


angular.module("nestedState", ["ui.router"])
    .config(function($stateProvider){
        $stateProvider
            .state("home",{
            url: "/home",
            template: "<h1>Home</h1><p>Home state</p><div ui-view></div>"
        })
            .state("home.child1",{
                url: "/child1",
                template: "<h1>Child1</h1><p>home.child1 state</p>"
            })
            .state(child2)
            .state(child3)
            .state(child4);


    });


angular.module("stateHelper", ["ui.router"])
    .config(function($stateProvider){
        $stateProvider
            .state("parent",{
                url: "/parent",
                template: "<h1>Parent</h1><p>Parent state</p><div ui-view></div>"
            })



    });