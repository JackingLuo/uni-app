<template>
	<view>
		<view class="topBanner">
			<swiper class="swiper" autoplay="true" interval="2000" circular="true">
				<swiper-item>
					<view class="swiper-item">
						<view :style="{backgroundImage:`url(${bannerBgi})`}" class="oneItem">
							<view>示例</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view :style="{backgroundImage:`url(${bannerBgi})`}" class="oneItem">
							<view>示例</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view :style="{backgroundImage:`url(${bannerBgi})`}" class="oneItem">
							<view>示例</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 以下代码模拟一个tab切换 -->
		<view>
			<!-- tab标题 -->
			<view class="titList">
				<view class="oneTab" v-for="(item,index) in titles" :key="index" @tap="checkTab" :data-index="index">
					<text :class="current==index?'tabText active':'tabText'">{{item.lable}}</text>
				</view>
			</view>
			<!-- tab内容 -->
			<view class="tabPage" v-if="current==0">
				<uni-card :cardList="firstList"></uni-card>
			</view>
			<view class="tabPage" v-else-if="current==1">
				健康
			</view>
			<view class="tabPage" v-else-if="current==2">
				家财
			</view>
		</view>
	</view>
</template>

<script>
	import uniCard from "../../components/uni-card.vue"
	export default {
		components:{
			uniCard
		},
		data() {
			return {
				bannerBgi:require("@/static/images/banner_bgi.png"),
				titles:[{
					lable:'意外'
				},{
					lable:'健康'
				},{
					lable:'家财'
				}],
				firstList:[{
					title:'产品标题',
					details:'产品描述',
					price:'30元起',
					botTips:[{
						text:'12-26岁',
						other:"承保年龄"
					},{
						text:'1年',
						other:"保障期限"
						
					},{
						text:'6万',
						other:"最高保额"
					}]
				},{
					title:'产品标题',
					details:'产品描述',
					price:'30元起',
					botTips:[{
						text:'12-26岁',
						other:"承保年龄"
					},{
						text:'1年',
						other:"保障期限"
						
					},{
						text:'6万',
						other:"最高保额"
					}]
				}],
				current:0
			}
		},
		onNavigationBarSearchInputChanged:function(e){
			console.log(e.text)
		},
		methods: {
			/*事件,切换tab页,获取循环中的数据*/
			checkTab(e){
				this.current=e.currentTarget.dataset.index;
			}
		}
	}
</script>

<style>
.topBanner{
	
}
.swiper{
	height: 240upx;
	text-align: center;
}
.oneItem{
	width:100%;
	height: 240upx;
	background-repeat: no-repeat;
	background-size: cover;
}
.titList{
	width: 100%;
	display: flex;
}
.oneTab{
	flex: 1;
	text-align: center;
}
.tabText{
	display: inline-block;
	padding: 20upx 0;
	color: #333;
}
.active{
	color: #007AFF;
	border-bottom: 1px solid #007AFF;
}
</style>
