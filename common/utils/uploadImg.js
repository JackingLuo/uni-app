/**
 * (多)图片上传方法(该方法接受一个options:需要什么就传什么)
 * @url: string,上传的路径(非必传))
 * @count: number,允许单次上传的数量(非必传:1-9)
 * @fn: function,操作本地图片路径的回调函数(非必传)
 * failCallback:function,某张照片上传失败的回调函数(非必传)
 * @storageName: string上传成功之后的缓存的name值(非必传)
 * @formData: object,上传时携带的额外参数(非必传)
 */
const uploadImg = options=>{
  let { 
    url = "http://luojiaxin.com/api/qiniuUp",
    count =9, 
    fn = null,
    failCallback=null,
    storageName = '', 
    formData = {} 
  } = options;
  let num = 0;
  let succList=[];
  return new Promise((resolve, reject) => {
    uni.chooseImage({
      count: count,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        let imgs = res.tempFilePaths;
        if(fn)fn(imgs);//执行传递进来的方法,用来操作图片路径的数组
        for(let val of imgs){
          //上传至服务器
          uni.uploadFile({
            url: url,//地址
            filePath: val,
            name: 'file',//文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
            formData: formData,
            header: {
              'content-type': 'multipart/form-data'
            },
            success(res) {
				console.log(res)
              let data = JSON.parse(res.data);
              if (res.statusCode != 200) {
                uni.showToast({
                  title: res.data.errMsg || "上传失败,请重新上传!",
                  icon: 'none',
                  duration: 2500
                })
                if (failCallback) failCallback(val)
              } else {
                //上传成功之后，添加照片的缓存,num+1
                if (storageName!='')uni.setStorageSync(storageName, val);
                num++;
				succList.push(res.data.url);
                //全部照片上传完毕,resolve出去
                if (num == count){
                  resolve({data:succList})
                }
              }
            },
            fail: function (err) {
              uni.showToast({
                title: "上传接口调用失败",
                icon: 'none',
                duration: 2500
              })
              if (failCallback) failCallback(val)
            }
          })
        }
      }
    })
  })
}
export default uploadImg;
