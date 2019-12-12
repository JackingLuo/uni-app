/*
封装一个请求类来统一处理错误请求,在页面中只用处理正确的返回
get方法,get请求
post方法,post请求
stop方法,终止请求方法
*/
//公共前缀
const baseUrl = "";

//是否是完整url
const completeUrl = (url) => {
  if (!url.includes('://')) {
      url = baseUrl + url;
    }
    return url
}
class Ajax{
	constructor(result) {
	    this.url = completeUrl(result.url);
		this.params = result.params || {};
		this.method = result.method || "GET";
		this.showLoad = result.showLoad || true;
		this.other = result.other || {};
		this.requestTask = null;
	}
	request(){
		if(this.showLoad){
			uni.showToast({
			    title: '请稍候...',
				icon:"loading"
			});
		}
		return new Promise((resolve, reject)=>{
			this.requestTask = uni.request({
			    url: this.url,
				method:this.method,
			    data:this.params,
				...this.other,
			    success: res=> {
					if(this.showLoad)uni.hideToast();
					//根据自己的业务场景来调整
			        if(res.data.succ){
						resolve(res.data)
					}else{
						uni.showToast({
						    title: res.data.errMsg,
							duration: 2000,
							icon:"none"
						});
						reject(res.data)
					}
			    },
				fail:err=>{
					if(this.showLoad)uni.hideToast();
					uni.showToast({
					    title: err.errMsg,
						duration: 2000,
						icon:"none"
					});
					reject(err)
				}
			})
		})
	}
	get(){
		this.method ="GET";	
		return this.request()
	}
	post(){
		this.method ="POST";
		return this.request()
	}
	stop(){//中断请求方法
		if(this.requestTask){
			uni.hideToast();
			this.requestTask.abort()
		}
	}
}
export default Ajax;
// const myAjax=(url,params,method,showLoad,other)=>{
// 	if(showLoad){
// 		uni.showToast({
// 		    title: '请稍候...',
// 			icon:"loading"
// 		});
// 	}
// 	let requestTask = null;
// 	return new Promise((resolve, reject)=>{
// 		requestTask = uni.request({
// 		    url: completeUrl(url),
// 			method:method,
// 		    data:params,
// 			...other
// 		    success: function(res) {
// 				if(showLoad)uni.hideToast();
// 		        resolve(res.data)
// 		    },
// 			fail:function(err){
// 				if(showLoad)uni.hideToast();
// 				uni.showToast({
// 				    title: err.errMsg,
// 					duration: 2000,
// 					icon:"none"
// 				});
// 				reject(err)
// 			}
// 		})
// 	})
// }