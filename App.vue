<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page,body{
		font-size: 26upx;
	}
	/* 下面这一行home下面的轮播90%(小程序和app不生效) */
	/* .mySwiper .uni-swiper-wrapper{
		overflow: visible;
	} */
</style>
