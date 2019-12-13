<template>
	<view>
		<!-- #ifndef MP-WEIXIN -->
		<view class="isLoding borderBot" v-if="showLoding">正在刷新...</view>
		<!-- #endif -->
		<!-- 该页面需要实现:上拉加载,下拉刷新 -->
		<view class="videoBody" v-for="(item,index) in videoList" :key="index">
			<view class="item">
				 <view>
					<video :id="'myVideo'+index" :src="item.video_src"  v-if="item.showVideo"
						@error="videoErrorCallback" :danmu-list="item.danmuList" enable-danmu danmu-btn controls>
					</video>
					<view class="defaultImg" v-else>
						<!-- 默认视频的图片,暂停按钮 -->
						<image :src="item.default_img" mode="aspectFill"></image>
						<uni-icon type="" class="iconfont icon-bofang otherStyle"  @tap="whereVideo(index)"></uni-icon>
					</view>
				</view>
			</view>
			<view class="bottomTip">
				<view class="descrip">{{item.text}}</view>
				<view class="botItem">
					<view class="authorInfo">
						<uni-icon type="" class="iconfont icon-touxiang-copy"></uni-icon>
						<text style="margin-left: 10px;">{{item.author}}</text>
					</view>
					<view class="videoGoods">
						<uni-icon type="" class="iconfont icon-dianzan"></uni-icon>
						<text>{{item.goods}}</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="isLoding borderTop" v-if="showMore">{{moreTip}}</view>
	</view>
</template>

<script>
	import {GET_VIDEO_LIST} from "../../common/api/api.js";
	export default {
		data() {
			return {
				showLoding:false,
				showMore:false,
				moreTip:"加载中...",
				requestCont:null,
				currentPage:1,
				nums:2,
				videoList:[],
				timer:null
			}
		},
		onLoad:function(){
			this.getVideoList()
		},
		//页面隐藏时暂停
		onHide:function(){
			if(this.videoContext){
				this.videoContext.pause()
			}
		},
		// 监听下拉刷新过程
		onPullDownRefresh() {
			this.showLoding = true;
		    this.getRes()    
		},
		// 监听上拉加载过程
		onReachBottom(){
			 // console.log("到底了,要重新拉取数据了")
			 clearTimeout(this.timer)
			 this.showMore = true;
			 this.currentPage++;
			 this.getVideoList()
		},
		methods: {
			//请求:获取video视频列表
			getVideoList(){
				this.requestCont = GET_VIDEO_LIST({currentPage:this.currentPage,nums:this.nums});
				this.requestCont.post().then(res=>{
					if(res.data.length>0){
						for(let val of res.data){
							val.showVideo = false;
							this.videoList.push(val)
						}
					}else{
						this.moreTip = "没有更多了";
						this.timer = setTimeout(()=>{
							this.showMore = false;
							this.moreTip = "加载中...";
						},500)
					}
				})
			},
			// 刷新数据
			getRes(){
				setTimeout(()=> {
				    uni.stopPullDownRefresh()
					this.showLoding = false;
				}, 1000);
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg || "该环境不支持播放此视频",
					showCancel: false
				})
			},
			whereVideo(index){
				let nowItem = this.videoList;
				for(let i=0;i<nowItem.length;i++){
					if(i==index){
						nowItem[i].showVideo = true;
					}else{
						nowItem[i].showVideo = false;
					}
				}
				this.videoList = nowItem;
				// #ifndef MP-ALIPAY
				this.videoContext = uni.createVideoContext('myVideo'+index);
				this.videoContext.play();
				// #endif
			}
		}
	}
</script>

<style scoped>
.isLoding{
	padding: 30upx;
	text-align: center;
}
.videoBody{
	width: 100%;
	padding:40upx 30upx 0 30upx;
	border-bottom: 30upx solid #ECECEC;
	box-sizing: border-box;
}
.borderTop{
	border-top: 1px solid #ECECEC;
}
.borderBot{
	border-bottom: 1px solid #ECECEC;
}
.descrip{
	padding: 24upx 0;
	border-bottom:  1px solid #ECECEC; 
}
.botItem{
	display: flex;
	justify-content: space-between;
	padding: 24upx 0;
}
.item uni-video,.item video{
	width: 100%;
	border-radius: 16upx;
}
.defaultImg{
	border-radius: 16upx;
	width: 100%;
	height: 450upx;
	background-color: rgba(1,1,1,.5);
	position: relative;
}
.defaultImg uni-image,.defaultImg image{
	width: 100%;
	height: 450upx;
}
.otherStyle{
	position: absolute;
	top:50%;
	left: 50%;
	transform: translate(-50%,-50%);
	color: #fff;
	font-size: 100upx;
}
</style>
