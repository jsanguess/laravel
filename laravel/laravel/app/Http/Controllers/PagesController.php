<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function inicio(){
        return view('welcome');
    }

    public function fotos(){
        return view('fotos');
    }

    public function blog(){
        return view('blog');
    }

    public function nosotros($nombre=null){
        $equipo = ['Nancy','Camila','Denise'];
        // return view('nosotros',['equipo'=>$equipo]);
        return view('nosotros',compact('equipo','nombre'));
    }

}
