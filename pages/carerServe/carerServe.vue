<template>
	<view>
		<!-- 该页面需要实现:上拉加载,下拉刷新 -->
		<view>车主服务</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		// 下拉刷新
		onPullDownRefresh() {
		    this.getRes()    
		},
		// 上拉加载
		onReachBottom(){
			 
		},
		methods: {
			getRes(){
				setTimeout(function () {
				    uni.stopPullDownRefresh()
				}, 1000);
			}
		}
	}
</script>

<style>

</style>
