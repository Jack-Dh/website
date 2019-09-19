$(function () {
    bangQuery()
})

/*
* 轮播
* */
function bangQuery() {
    $.ajax({
        url: window.globaCponfig.crossBorder,
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
        //     let doms
        //     res.data.bannerList.forEach((item, index) => {
        //         let dogdom=` <li data-target="#carousel-example-generic" data-slide-to=${index} class=""></li>`
        //
        //         if (index === 0) {
        //             doms = `<div class="item active">
        //   <img data-src="holder.js/900x500/auto/#666:#444/text:Second slide" alt="Second slide [900x500]" src=${item.picUrl} data-holder-rendered="true">
        // </div>`
        //         } else {
        //             doms = `<div class="item">
        //    <img data-src="holder.js/900x500/auto/#666:#444/text:Second slide" alt="Second slide [900x500]" src=${item.picUrl} data-holder-rendered="true">
        // </div>`
        //         }
        //
        //         $('#dog').append(dogdom)
        //         $('#shuffling').append(doms)
        //     })


            // 跨境业务
            let crossdom = ` <div class="col-md-6" style="margin-top: 80px;font-family: myfont;line-height: 2rem">
            <p>
            <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">${res.data.crossList[0].title}</h3></p>
            ${res.data.crossList[0].content}
            </span>
        </div>
             <div class="col-md-6" style="margin-top: 20px">
            <img style="max-width: 70%" class="img-responsive center-block" src=${res.data.crossList[0].picUrl}>
            </div>
`
            // $(crossdom).appendTo('#cross-border')
            $('#cross-border').append(crossdom)

            // 跨境业务痛点
            let dom =
                ` <div style="position: absolute;left: 55%;top: 150px;z-index: 98;min-width: 30%;max-width: 40%;background-color: #ebebeb;padding: 5%;font-size: 2rem;padding-left: 10%">
                
        <h2 class="text-nowrap">${res.data.painList[0].title}</h2>
        <div style="font-size: 1rem">
        ${res.data.painList[0].content}
        </div>
    </div>`

            //跨境服务案例
            res.data.caseList.forEach(item=>{
                let caseDom=` <div class="col-md-3">
                     <img style="" src=${item.picUrl}>
                </div>`
                $('#case').append(caseDom)
            })

            //合作流程
            let fifthListdom = ` <img style="max-width: 100%" src=${res.data.cooperateList[0].picUrl}>`
            $('#fifthListdom').append(fifthListdom)
        }
    })

}
