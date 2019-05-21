import HttpUtil from "../net/HttpUtil";
import BaseApp from "../BaseApp";

export default class BasePresenter {

    requestPost(tag,url,params){
        this._request(tag,HttpUtil.getInstance().post(url,params,this.getBaseApp().getUserToken()));
    }

    requestGet(tag,url,params){
        this._request(tag,HttpUtil.getInstance().get(url,params));
    }

    _request(tag,promise:Promise){
        promise.then(result=>{
            result.tag = tag;
            this.success(result);
        })
        .catch(error=>{
            this.failed(this.errorMsg(error));
        })
    }

    //在子类重写
    getBaseApp():BaseApp{
    }

    //请求成功
    success(result){
    }

    //请求失败
    failed(msg){
    }

    //错误码统一处理
    errorMsg(error){
		//....做相关处理
		return error;
    }
}