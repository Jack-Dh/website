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
                // 轮播
            let i=`<img style="max-width: 100%" src="${res.data.bannerList[0].picUrl}">`
            // $('#L').children().remove()
            $('#L').append(i)
        //     let domshuffling
        //     res.data.bannerList.forEach((item, index) => {
        //         let dogdom=` <li data-target="#carousel-example-generic" data-slide-to=${index} class=""></li>`
        //
        //         if (index === 0) {
        //             domshuffling = `<div class="item active">
        //   <img data-src="holder.js/900x500/auto/#666:#444/text:Second slide" alt="Second slide [900x500]" src=${item.picUrl} data-holder-rendered="true">
        // </div>`
        //         } else {
        //             domshuffling = `<div class="item">
        //    <img data-src="holder.js/900x500/auto/#666:#444/text:Second slide" alt="Second slide [900x500]" src=${item.picUrl} data-holder-rendered="true">
        // </div>`
        //         }
        //
        //         $('#dog').append(dogdom)
        //         $('#shuffling').append(domshuffling)
        //     })

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
