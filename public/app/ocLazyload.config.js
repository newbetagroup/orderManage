/**
 * Created by Geek-zwb on 2016/12/2 0002.
 */

"use strict";
myApp.constant("Modules_Config",[
        {
            name:"ngTable",
            files:[
                "/plugins/ng-table/ng-table.min.css",
                "/plugins/ng-table/ng-table.min.js"
            ]
        },
        {
            name:"ui.bootstrap",
            files:[
                "/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js"
            ]
        },
        {
            name:"userDashboard",
            files:[
                "app/user/user.js"
            ]
        },
        {
            name:"managerDashboard",
            files:[
                "app/manager/manager.js"
            ]
        },
        {
            name:"postDashboard",
            files:[
                "app/post/post.js"
            ]
        },
        {
            name:"textAngular",
            files:[
                "/app/post/textAngular.min.js"
            ]
        },
        {
            name:"dialogs.main",
            files:[
                "/node_modules/angular-ui-bootstrap/dist/dialogs.min.js"
            ]
        }
    ])
    .config([
        "$ocLazyLoadProvider",
        "Modules_Config",
        function ($ocLazyLoadProvider,Modules_Config){
        $ocLazyLoadProvider.config({
            debug:true,
            events:true,
            modules:Modules_Config
        });
    }]);