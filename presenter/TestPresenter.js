import BasePresenter from "./BasePresenter";
import BaseApp from "../BaseApp";
import {getBookOrderList} from "../net/HttpURLConstant";
let baseApp:BaseApp;
let instance = null;

export default class TestPresenter extends BasePresenter{

    static getInstance(base:BaseApp){
        baseApp = base;
        if(!instance){
            instance = new TestPresenter();
        }
        return instance;
    }

    getBaseApp(): BaseApp {
        return baseApp;
    }

    success(result) {
        super.success(result);
        baseApp.success(result);
    }

    failed(msg) {
        super.failed(msg);
        baseApp.failed(error);
    }

    //如：获取包厢订单列表
    getBookOrderList(params){
        this.requestPost(1,getBookOrderList,params);
    }
}