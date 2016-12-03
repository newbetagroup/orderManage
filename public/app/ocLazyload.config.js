/**
 * Created by Geek-zwb on 2016/12/2 0002.
 */

"use strict";
myApp.constant("Modules_Config",[
        {
            name:"ngTable",
            module:true,
            files:[
                "/plugins/ng-table/ng-table.min.css",
                "/plugins/ng-table/ng-table.min.js"
            ]
        },
        {
            name:"ui.bootstrap",
            module:true,
            files:[
                "Scripts/angular-bootstrap/ui-bootstrap-tpls-0.14.3.min.js"
            ]
        },
        {
            name:"userDashboard",
            module:true,
            files:[
                "app/user/user.js"
            ]
        },
        {
            name:"managerDashboard",
            module:true,
            files:[
                "app/manager/manager.js"
            ]
        }
    ])
    .config([
        "$ocLazyLoadProvider",
        "Modules_Config",
        function ($ocLazyLoadProvider,Modules_Config){
        $ocLazyLoadProvider.config({
            debug:false,
            events:false,
            modules:Modules_Config
        });
    }]);