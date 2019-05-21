import React from 'react';
import {Linking, Text, View,} from 'react-native';
import BaseApp from '../BaseApp'
import BasePresenter from "../presenter/BasePresenter";
import TestPresenter from "../presenter/TestPresenter";
let mPresenter = null;

export default class TestScreen extends BaseApp{

    constructor(props) {
        super(props);
    }

    getPresenter(): BasePresenter {
		mPresenter = TestPresenter.getInstance(this);
        return mPresenter;
    }

    getBookOrderList(){
        let params = {};//请求参数
        mPresenter.getBookOrderList(params);
    }

	//请求失败并返回失败信息
    failed(msg) {
        super.failed(msg);
    }

	//请求成功并返回数据
    success(result) {
        super.success(result);
        switch (result.tag) {
            case 1:
                //做数据渲染操作
                break;
            default:
                break;
        }
    }
}