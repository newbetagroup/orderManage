<?php

namespace App\Http\Controllers;

use App\Performance;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class PerformanceController extends Controller
{
    protected $field = [
        'user_id' => '',
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    public function createPerformances()
    {
        $currentMonth = 
        $firstDay = date('Y-m-01', strtotime(date("Y-m-d")));
        $totalDay = date('t');//current month total days

        $userId = Auth::user()->id;

        $performance = new Performance();

        $whatDay = date("w",strtotime($firstDay));
        for ($i = 1; $i <= $totalDay; $i++) {
            $performance->user_id = $userId;
            $whatDay = $whatDay == 6 ? 0 : $whatDay;
            if($whatDay == 0) {
                $performance -> //
            } else {
                
            }
            
            $performance->save();
        }
    }
}
