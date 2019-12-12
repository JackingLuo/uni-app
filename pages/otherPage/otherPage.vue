<template>
	<view>
		 <button type="primary" @tap="startRequest">开始请求</button>
		 <button type="primary" @tap="stopRequest">终止请求</button>
	</view>
</template>

<script>
	import Ajax from "../../common/utils/myRequest.js"
	export default {
		data() {
			return {
				requestCont:null
			}
		},
		onLoad:function(options){
			uni.showToast({
			    title: options.test,
			    duration: 2000,
				icon:"none"
			});
		},
		methods: {
			startRequest(){
				this.requestCont = new Ajax({url:"http://www.luojiaxin.com/api/allArticle"});
				this.requestCont.get().then(res=>{
					console.log(res)
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
