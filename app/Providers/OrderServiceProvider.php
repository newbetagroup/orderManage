<?php

namespace App\Providers;

use App\Helpers\OrderHelper;
use Illuminate\Support\ServiceProvider;

class OrderServiceProvider extends ServiceProvider
{
    protected $defer = true;//在需要的时候才加载

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('App\Helpers\Contracts\OrderHelperContract', function() {

            return new OrderHelper();

        });
    }

    /**
     * Get the services provided by the provider.
     * 
     * @return array
     */
    public function provides()
    {
        return ['App\Helpers\Contracts\OrderHelperContract'];
    }
}
