<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\User;
use App\Product;

class ProductController extends Controller
{
    public function product (Request $request)
    {
        $validator = Validator::make($request->all(),[
            'subject'   => 'required|string|min:6|max:255',
            'description'   => 'required|string|min:6|max:255',
            'country'   => 'required|string|min:6|max:255',
            'city'  => 'required|string|min:6|max:255'
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 404);
        }
        dd($request->all());
        $product = Product::create($request->toArray());

        $response = ['product' => $product];

        return response($response, 200);
    }
}
