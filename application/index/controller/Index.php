<?php
namespace app\index\controller;

use think\Controller;

class Index extends Controller
{
    //Ĭ�Ͻ���ҳ��
    public function index()
    {
        return $this->fetch('index/index');
    }
    
    //��¼
    public function deng()
    {
        return $this->fetch('index/login');
    }
    
    //ע��
    public function note()
    {
        return $this->fetch('index/register');
    }
}
