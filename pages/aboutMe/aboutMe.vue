<template>
	<view class="myBody">
		<!-- 这个页面重点实现某些功能,如扫码识别,上传修改图片 -->
		<view class="content" :style="{backgroundImage:`url(${topBgI})`}"></view>
		<view class="location">
			<!-- #ifndef H5 -->
				<view class="getQr">
					<uni-icon type="" class="iconfont icon-saoma iconOther"  @tap="saoyisao"></uni-icon>
				</view>
			<!-- #endif -->
			<view class="userInfo">
				<view class="leftInfo" @tap="updateHead">
					<image :src="headImg" mode="aspectFill" class="head"></image>
				</view>
				<view class="rightInfo">
					<view class="carNo">鄂A·88888</view>
					<view>靓仔</view>
				</view>
			</view>
		</view>
		<view class="titleList">
			<view class="optionsBox">
				<view class="flex-item" v-for="(item,index) in myList.topTit" :key="index" @tap="checkFunc(index)">
					<image :src="item.icon" mode="aspectFit"></image>
					<view>{{item.lable}}</view>
				</view>
			</view>
		</view>
		<view class="allMoudle">
			<view class="aMoudle" v-for="(item,index) in myList.detailedInfo" :key="index">
				<view class="title">
					<text>{{item.title}}</text>
					<uni-icon type="" class="iconfont icon-arrow-right lickIcon"></uni-icon>
				</view>
				<view class="iconBox">
					<view class="aIcon" v-for="(sonItem,sonIndex) in item.child" :key = "sonIndex">
						<image :src="sonItem.icon" mode="aspectFit"></image>
						<view>{{sonItem.lable}}</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uploadImg from "../../common/utils/uploadImg.js"
	import myList from "../../common/dictionaries/aboutMeDic.js"
	export default {
		data() {
			return {
				headImg:require("@/static/images/bgi_hw.png"),
				topBgI:require("@/static/images/mybgi.png"),
				myList:myList
			}
		},
		onLoad:function(){
			uni.onNetworkStatusChange(function (res) {
				if(!res.isConnected){
					uni.showToast({
					    title: "网络断开",
					    duration: 2000,
						icon:"none"
					});
				}
			});
		},
		methods: {
			// 扫码功能
			saoyisao(){
				uni.scanCode({
				    success: function (res) {
						uni.showToast({
						    title: res.result,
						    duration: 2000,
							icon:"none"
						});
				        // console.log('条码类型：' + res.scanType);
				        // console.log('条码内容：' + res.result);
				    }
				})
			},
			//图片上传功能
			updateHead(){
				let that = this;
				//操作照片的本地路径
				let fn=(imgs)=>{}
				//上传失败的回调函数
				let failCallback = (img)=>{}
				let options = {
				  count:9,
				  fn: fn,
				  failCallback: failCallback,
				  storageName:'',
				  formData: {}
				}
				uploadImg(options).then(res=>{
					console.log(res)
				})
			},
			//其他功能校验
			checkFunc(index){
				switch(index){
					case 0:
						//查看网络
						uni.getNetworkType({
						    success: function (res) {
								uni.showToast({
								    title: '当前网络连接是:'+res.networkType,
								    duration: 2000,
									icon:"none"
								});
						    }
						});
						break;
					case 1:
						uni.getLocation({
						    type: 'wgs84',
						    success: function (res) {
								uni.showToast({
								    title:'经度:' + res.longitude+'纬度:' + res.latitude,
								    duration: 2000,
									icon:"none"
								})
						    }
						});
						 break;
					case 2:
						uni.navigateTo({
						    url: '../otherPage/otherPage?test=previousPageInfo'
						});
						 break;
					case 3:
						
						 break;
					default:
				}
			}
		}
	}
</script>

<style scoped>
.myBody{
	position: relative;
	width: 100%;
}
.content{
	width:100%;
	height: 474upx;
	background-repeat: no-repeat;
	background-size: cover;
}
.location{
	position: absolute;
	z-index: 9;
	top: 60upx;
	/* #ifdef APP-PLUS */
	top: 110upx;
	/* #endif */
	left: 0;
	width: 100%;
	padding: 0 4%;
	box-sizing: border-box;
}
.userInfo{
	display: flex;
	align-items: center;
}
.getQr{
	height: 60upx;
}
.iconOther{
	float: right;
	color: #fff;
	font-size: 50upx;
	margin-right: 30upx;
}
.leftInfo{
	padding: 8upx;
	overflow: hidden;
	margin-right: 20upx;
}
.head{
	border-radius: 50%;
	width: 120upx;
	height: 120upx;
}
.rightInfo{
	color: #fff;
}
.carNo{
	font-size: 32upx;
	font-weight: 700;
	padding-bottom:12upx ;
}
.titleList{
	position: absolute;
	top: 300upx;
	/* #ifdef APP-PLUS */
	top: 350upx;
	/* #endif */
	left: 0;
	width: 92%;
	margin: 0 4%;
	z-index: 9;
}
.optionsBox{
	display: flex;
	background-color: #fff;
	box-shadow: 0 4px 10px #ececec;
	padding: 30upx 0;
	border-radius: 12upx;
}
.flex-item{
	flex: 1;
	text-align: center;
}
.flex-item uni-image,.flex-item image{
	width: 100upx;
	height: 100upx !important;
}
.allMoudle{
	/* #ifdef APP-PLUS */
	padding-top: 80upx;
	/* #endif */
	width: 92%;
	margin: 0 4%;
	padding-bottom: 40upx;
}
.aMoudle{
	margin-top: 40upx;
	box-shadow: 0 4px 10px #ececec;
	padding: 0 30upx;
}
.title{
	padding: 30upx;
	font-size: 34upx;
	font-weight: 700;
}
.iconBox{
	display: flex;
	flex-wrap:wrap;
}
.aIcon{
	width: 25%;
	text-align: center;
	margin-bottom: 30upx;
}
.aIcon uni-image,.aIcon image{
	width: 110upx;
	height: 110upx !important;
	border: 1px dashed #777;
}
.lickIcon{
	float: right;
	font-size: 24upx;
}
</style>
