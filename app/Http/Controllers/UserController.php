<?php

namespace App\Http\Controllers;

use App\Group;
use App\User;
use Illuminate\Http\Request;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //user所拥有的属性
    protected $fields = [
        'name' => '',
        'email' => '',
        'groups' => []
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
     * create form
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
     * user save
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
        echo $id;
    }

    /**
     * Show the form for editing the specified resource.
     * user/{$id} GET 管理员进行
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::find((int)$id);

        //用户不存在
        if(!$user) {
            return ['status' => 0, 'msg' => 'user not exist'];
        }

        $groups = [];

        //取id
        if($user->groups) {
            foreach ($user->groups as $v) {
                $groups[] = $v->id;
            }
        }

        $user->groups = $groups;

        foreach(array_keys($this->fields) as $field) {
            $data[$field] = old($field, $user->field);
        }

        $data['groupsAll'] = Group::all()->toArray();
        $data['id'] = (int)$id;

        //event();

        //返回修改数据
        return ['status', 'data' => $data];

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
        $user = User::find((int)$id);
        foreach (array_keys($this->fields) as $field) {
            $user->$field = $request->get($field);
        }

        //password required and repassword confirm
        if ($request->get('password') != '' || $request->get('repassword') != '') {
            if ($request->get('password') != '' && $request->get('repassword') != '' && $request->get('password') == $request->get('repassword')) {
                $user->password = bcrypt($request->get('password'));
            } else {
                return ['status' => 0, 'msg' => 'password required and repassword'];
            }
        }

        //清空分组
        unset($user->groups);

        //
        $user->giveGroupTo($request->get('groups',[]));

        return ['status' => 1, 'masg' => '添加成功'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return array
     */
    public function destroy($id)
    {
        $user = User::find((int)$id);
        if ($user && $user->id != 1) {
            //id 为1 设置成超级管理员
            $user->delete();
        } else {
            return ['status' => 0, 'msg' => '删除失败'];
        }

        return ['status' => 1, 'msg' => 'deleted'];
    }

    /**
     * 登陆用户login状态检查
     *
     * @return array
     */
    public function checkLogin()
    {
        if (Auth::check()) {
            //已登录、记住我
            return ['status' => 1, 'data' => Auth::user()];
        } else {
            return ['status' => 0, 'msg' => 'login required'];
        }

    }
}
