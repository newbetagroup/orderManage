/**
 * Created by Geek-zwb on 2016/12/2 0002.
 */

"use strict";
orderApp.constant("Modules_Config",[
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
        }
    ])
    .config([
        "$ocLazyLoadProvider",
        "Modules_Config",
        function ($ocLazyLoadProvider,Modules_Config){
        $ocLazyLoadProvider.config({
            debug:false,
            events:true,
            modules:Modules_Config
        });
    }]);