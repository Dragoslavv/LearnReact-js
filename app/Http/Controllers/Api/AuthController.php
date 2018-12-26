<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function register (Request $request) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string||min:6|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6||max:255|confirmed',
        ]);


        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 404);
        }

        $request['password']=Hash::make($request['password']);
        $user = User::create($request->toArray());

        if($user) {

            $token = $user->createToken('Laravel Password Grant Client')->accessToken;

            $response = ['token' => $token, 'user' => $user];


            return response($response, 200);
        } else {

            $response = ['warning' => 'Nok'];
            return response($response, 404);

        }

    }

    public function login (Request $request) {

        $user = User::where('email', $request->email)->first();

        if ($user) {

            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $response = ['token' => $token,'user' => $user];
                return response($response, 200);
            } else {
                $response = "Password missing";
                return response($response, 422);
            }

        } else {

            $response = ['warning' => 'Nok'];
            return response($response, 404);
        }

    }

    public function all_users () {

        $user = User::all();

        $response = [ 'all_users' => $user ];

        return response($response, 200);
    }

    public function logout (Request $request) {

        $token = $request->user()->token();
        $token->revoke();

        $response = [ 'logout' => 'You have been succesfully logged out!' ];

        return response($response, 200);

    }
}
