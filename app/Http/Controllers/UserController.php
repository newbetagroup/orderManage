<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    protected $fields = [
        'name' => '',
        'email' => '',
        'roles' => []
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
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
        $data = [];
        foreach ($this->fields as $field => $default) {
            $data[$field] = old($field, $default);
        }
        $data['groupsAll'] = Role::all()->toArray();
        return ['status' => 1, 'data' => $data];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User();
        foreach (array_keys($this->fields) as $field) {
            $user->$field = $request->get($field);
        }
        unset($user->groups);
        $user->save();

        //用户分组
        if (is_array($request->get('groups'))) {
            $user->giveGroupTo($request->get('groups'));
        }

        //监听？
        //event(new \App\Events\userActionEvent('\App\Models\User', $user->id, 1, '添加了用户' . $user->name));
        //return redirect('/admin/user')->withSuccess('添加成功！');//怎么将withSuccess或withError弄成接口？
        return ['status' => '1', 'msg' => '添加成功'];
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

    /**
     * Auth user information
     */
    public function authUser()
    {
        if (Auth::check()) {
            //已登录，记住我
            return ['status' => 1, 'data' => Auth::user()];
        } else {
            return ['status' => 0, 'msg' => 'login required'];
        }

    }
}
