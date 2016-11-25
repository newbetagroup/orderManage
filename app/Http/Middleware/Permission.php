<?php

namespace App\Http\Middleware;

use Closure;

class Permission
{
    protected $except = [
        '/',
        'home'
    ];
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $permit = $this->getPermission($request);

        if($permit == 'undefined') {
            return $next($request);
        }

        if($permit == '*') {
            return $next($request);
        }

        //当前账户
        $admin = \Auth::user();

        if ($admin->hasPermission($permit)) {
            return $next($request);
        }

        return ['status' => 0, 'msg' => 'permission denied'];
    }

    /**
     * 获取当前路由需要的权限
     * @param $request
     * @return mixed
     */
    public function getPermission($request)
    {
        $actions = $request->route()->getAction();
        //这里要不要对没有设置权限的路由进行处理呢？？？
        if(empty($actions['as'])) {
            return 'undefined';
        }
        return $actions['as'];
    }
}
