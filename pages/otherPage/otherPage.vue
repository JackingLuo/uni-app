<template>
	<view>
		 <button type="primary" @tap="startRequest">开始请求</button>
		 <button type="primary" @tap="stopRequest">终止请求</button>
	</view>
</template>

<script>
	import {GET_VIDEO_LIST} from "../../common/api/api.js";
	export default {
		data() {
			return {
				requestCont:null
			}
		},
		onLoad:function(options){
			uni.showToast({
			    title: '上一页路由带过来的参数'+options.test,
			    duration: 2000,
				icon:"none"
			});
		},
		methods: {
			startRequest(){
				this.requestCont = GET_VIDEO_LIST();
				this.requestCont.post().then(res=>{
					uni.showToast({
					    title: res.data,
					    duration: 2000,
						icon:"none"
					});
				})
			},
			stopRequest(){
				this.requestCont.stop()
			}
		}
	}
</script>

<style>

</style>
