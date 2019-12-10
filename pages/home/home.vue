<template>
	<view class="homeBody">
		<view class="content" :style="{backgroundImage:`url(${homgBgI})`}"></view>
		<view class="topTit uni-flex uni-row">
			<view class="flex-item" v-for="(item,index) in homeList.topTit" :key="index">
				<image :src="item.icon" mode="aspectFit"></image>
				<view>{{item.lable}}</view>
			</view>
		</view>
		<view class="hotFunc">
			<view class="funcTit">热门功能<text class="more">更多></text></view>
			<view class="iconsBox">
				<view  class="iconItem" v-for="(item,index) in homeList.centerCont" :key="index" @tap="toWhere(item)">
					<image :src="item.icon" mode="aspectFit"></image>
					<view>{{item.lable}}</view>
				</view>
			</view>
		</view>
		<view class="goodProduct">
			<view class="goodTit">好产品</view>
			<swiper class="swiper" autoplay="true" interval="2000" circular="true">
				<swiper-item v-for="(item,index) in homeList.bottomBanner" :key="index">
					<view class="swiper-item">
						<view :style="{backgroundImage:`url(${bannerBgi})`}" class="oneItem">
							<view class="itemLeft">
								<view class="leftTit">{{item.title}}</view>
								<view class="leftDetail">{{item.details}}</view>
								<view class="leftPrice">{{item.price}}</view>
							</view>
							<view class="itemRight">
								<image :src="item.icon" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import homeList from "../../common/dictionaries/homeDic.js"
	export default {
		data() {
			return {
				homgBgI:require("@/static/images/home_bgc1.png"),
				bannerBgi:require("@/static/images/banner_bgi.png"),
				homeList:homeList
			}
		},
		onLoad:function (){
			
		},
		methods: {
			toWhere(val){
				uni.showToast({
				    title:val.lable,
				    duration: 2000,
					icon:"none"
				});
			}
		}
	}
</script>

<style scoped>
.homeBody{
	position: relative;
	font-size: 26upx;
}
.content{
	width:100%;
	height: 436upx;
	background-repeat: no-repeat;
	background-size: cover;
}
.content uni-image{
	width: 100%;
}
.topTit{
	position: absolute;
	top: 320upx;
	left: 50%;
	z-index: 9;
	transform: translateX(-50%);
	width: 92%;
	background-color: #fff;
	display: flex;
	text-align: center;
	border-radius: 10upx;
	box-shadow: 0 4px 10px #ececec;
	padding: 30upx 0;
}
.flex-item{
	flex: 1;
}
.topTit uni-image,.topTit image{
	width: 60%;
	height: 120upx;
}
.hotFunc{
	margin-top: 160upx;
}
.funcTit,.goodProduct{
	padding: 0 40upx;
	font-size: 32upx;
	font-weight: 600;
}
.more{
	font-size: 26upx;
	font-weight: 500;
	float: right;
}
.iconsBox{
	width:100%;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
}
.iconItem{
	width: 25%;
}
.iconItem uni-image,.iconItem image{
	width: 60%;
	height: 120upx;
}
.goodProduct{
	margin-top: 60upx;
}
.goodTit{
	padding-bottom: 30upx;
}
.swiper{
	height: 240upx;
	margin-bottom: 40upx;
}
.oneItem{
	width:100%;
	height: 240upx;
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;
	border-radius: 12upx;
	display: flex;
	justify-content:space-between;
}
.itemLeft{
	padding: 24upx;
}
.leftDetail{
	color: #666;
	font-size: 20upx;
	margin: 20upx;
}
.leftPrice{
	color: #007AFF;
	font-weight: 600;
	font-size: 26upx;
}
.itemRight uni-image,.itemRight image{
	width: 240upx;
	height: 240upx;
}
</style>
