import React,{Component} from 'react';
import {Alert, DeviceEventEmitter,Platform,NativeModules} from "react-native";
import BasePresenter from "./presenter/BasePresenter";
let mPresenter:BasePresenter;

export default class BaseApp extends React.Component{

    componentDidMount() {
        mPresenter = this.getPresenter();
		this.loadData();
    }
	
	//加载数据
    loadData(){
    }

    getUserToken(){
        return userToken;
    }

	//获得逻辑层对象
    getPresenter():BasePresenter{
    }

	//请求成功
    success(result){
        this.hidLoading();
    }

	//请求失败
    failed(msg){
        this.hidLoading();
    }
	
	componentWillUnmount() {
        //页面退出时可以在此方法统一对Presenter做相关处理
    };
}
