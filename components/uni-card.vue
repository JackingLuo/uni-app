<template>
	<view>
		<view class="cardBody" v-for="(item,index) in cardList" :key="index">
			<view class="item">
				<view :style="{backgroundImage:`url(${bannerBgi})`}" class="oneItem">
					<view class="itemLeft">
						<view class="leftTit">{{item.title}}</view>
						<view class="leftDetail">{{item.details}}</view>
						<view class="leftPrice">{{item.price}}</view>
					</view>
					<view class="itemRight">
						<image :src="smallImg" mode="aspectFit"></image>
					</view>
				</view>
			</view>
			<view class="bottomTip">
				<view class="botItem" v-for="(sonItem,sonIndex) in item.botTips" :key="sonIndex">
					<view>{{sonItem.text}}</view>
					<view class="sonOther">{{sonItem.other}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			cardList: {
				type:Array,
				default: []
			}
		},
		data() {
			return {
				bannerBgi:require("@/static/images/banner_bgi.png"),
				smallImg:require("@/static/images/bgi_hw.png")
			};
		}
	}
</script>

<style scoped>
.cardBody{
	margin: 30upx 4% 0 4%;
	width: 92%;
	border-radius: 12upx;
	box-shadow: 0 4px 10px #ececec;
}
.oneItem{
	width:100%;
	height: 240upx;
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;
	border-top-left-radius: 12upx;
	border-top-right-radius: 12upx;
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
.bottomTip{
	border: 1px solid #ececec;
	padding: 28upx 0;
	border-top: none;
	border-bottom-right-radius: 12upx;
	border-bottom-left-radius: 12upx;
	display: flex;
	text-align: center;
}
.botItem{
	flex: 1;
}
.sonOther{
	color: #808080;
	margin-top: 10upx;
	font-size: 24upx;
}
</style>
