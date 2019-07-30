$(function () {
    bangQuery()
})

/*
* 轮播
* */
function bangQuery() {
    $.ajax({
        url: window.globaCponfig.videolist,
        method: 'GET',
        success: function (res) {
            console.log(res)
            /**
             * 轮播
             * */
            res.data.bannerList.forEach(item => {
                let shufflingDom = ` <li>
                <div class="w3layouts-banner-top">
                    <div class="container">
                        <img src=${item.picUrl}>
                    </div>
                </div>
            </li>`
                $('#shuffling').append(shufflingDom)
            })

            // 视频摄影
            let firstListdom = `<div class="col-md-6" style="margin-top: 80px;font-family: myfont;line-height: 2rem;padding-right: 10%">
            <p>
            <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">${res.data.firstList[0].title}</h3></p>
${res.data.firstList[0].content}

        </div>
        <div class="col-md-6">
            <img style="max-width: 50%" class="img-responsive center-block"
                 src=${res.data.firstList[0].picUrl}>
        </div>
`
            $('#firstListdom').append(firstListdom)


        //视频摄影现状
            let secondListdom=`
                <div>
                        <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">${res.data.secondList[0].title}</h3></p>
                         <h5 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">全民视频在线，娱视频稳居C位。视频内容消息具有普通性的移动在线生活方式</h5></p>
                </div>
                 <div style="margin-top: 5%">
                        
                         <img src=${res.data.secondList[0].picUrl} style="max-width: 80%">
                </div>
            `
            $('#secondListdom').append(secondListdom)


            //悦为优势
            let thirdListarr=res.data.thirdList.splice(0,2)
            thirdListarr.forEach(item=>{
                let thirdListdom=`
                  <div class="text-left" >
                <img src=${item.picUrl} style="max-width: 100%">
                <p style="font-family: SourceHanSansCN-Bold">
                <h4 style="margin: 8% 0 8% 0">${item.title}</h4></p>
                <div style="font-family: myfontl;font-weight: bold">
                    <p style="font-family: myfontl;font-weight: bold">${item.content}</p></p>
                </div>

            </div>
                `
                $('#thirdListone').append(thirdListdom)
            })
            res.data.thirdList.forEach(item=>{
                let thirdListdom=`
                  <div class="text-left" >
                <img src=${item.picUrl} style="max-width: 100%">
                <p style="font-family: SourceHanSansCN-Bold">
                <h4 style="margin: 8% 0 8% 0">${item.title}</h4></p>
                <div style="font-family: myfontl;font-weight: bold">
                    <p style="font-family: myfontl;font-weight: bold">${item.content}</p>
                </div>

            </div>
                `
                $('#thirdListtwo').append(thirdListdom)
            })


            //服务案例
            res.data.caseList.forEach(item => {
                let casedom = `
             <div class="col-md-3">
                  <img style="max-width: 100%" src=${item.picUrl}>
             </div>
                `
                $('#case').append(casedom)
            })


            //合作流程
            let fifthListdom = ` <img style="max-width: 100%" src=${res.data.fifthList[0].picUrl}>`
            $('#fifthListdom').append(fifthListdom)
        }
    })
}
