import Ajax from "../utils/myRequest.js"
//获取视频列表
export const GET_VIDEO_LIST= params=>{
	return new Ajax({url:"/uniapp/getVideo",params:params})
}
//测试请求
export const TEST_REQUEST= params=>{
	return new Ajax({url:"/uniapp/getVideo",params:params,showLoad:true})
}