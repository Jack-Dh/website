$(function () {
    bangQuery()
})

/*
* 轮播
* */
function bangQuery() {
    $.ajax({
        url: window.globaCponfig.visionlist,
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

            // 品牌视觉
            let crossdom = `
 <div class="col-md-6" style="margin-top: 80px;font-family: myfont;line-height: 2rem">
            <p>
            <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">品牌视觉</h3></p>
${res.data.visionList[0].content}
        </div>
        <div class="col-md-6">
            <img style="max-width: 100%" class="img-responsive center-block"
                 src="${res.data.visionList[0].picUrl}">
        </div>
`
            // $(crossdom).appendTo('#cross-border')
            $('#dataserver').append(crossdom)







            //视觉服务案例
            res.data.caseList.forEach(item=>{
                let dom=`
                    <div class="col-md-3">
        <img style="max-width: 100%" src=${item.picUrl}>
    </div>
                `
                $('#case').append(dom)
            })

            //合作流程
            let processDom=` <img style="max-width: 100%" src=${res.data.cooperateList[0].picUrl}>`
            $('#process').append(processDom)
        }
    })

}
