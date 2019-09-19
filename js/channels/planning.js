$(function () {
    bangQuery()
})

/*
* 轮播
* */
function bangQuery() {
    $.ajax({
        url: window.globaCponfig.planlist,
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

            // 品牌策划
            let olanningDom=`  <h3 style="font-family: SourceHanSansCN-Bold">${res.data.planList[0].title}</h3></p>
    <div style="font-family: myfont;margin-top: 5%;text-indent:2em">${res.data.planList[0].content}</div>`
            $('#planning').append(olanningDom)



            //高转化

            let heiPliadom=`    <div class="col-md-6" style="margin-top: 80px;font-family: myfont;line-height: 2rem">
                <p>
                <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">${res.data.productList[0].title}</h3></p>

               ${res.data.productList[0].content}

            </div>
            <div class="col-md-6">
                <img style="max-width: 100%" class="img-responsive center-block"
                     src=  ${res.data.productList[0].picUrl}>
            </div>`
                $('#heightPlanning').append(heiPliadom)



            // 品牌策划优势
            let ysDom=`  <div class="col-md-4">
                <p><i style="font-size: 3rem;color: #224e6b" class="fontFamily hhtx-pinpaifenxi"></i></p>
                <p style="margin-top: 3%">
                <h3>${res.data.advantageList[0].title}</h3></p>
                <div style="margin-top: 5%;font-family: myfont;line-height: 2rem">
                   ${res.data.advantageList[0].content}
                </div>
            </div>
            <div class="col-md-4    ">
                <p><i style="font-size: 3rem;color: #224e6b" class="fontFamily hhtx-xiangqing"></i></p>
                <p style="margin-top: 3%">
                <h3>${res.data.advantageList[1].title}</h3></p>
                <div style="margin-top: 5%;font-family: myfont;line-height: 2rem">
                   ${res.data.advantageList[1].content}
                </div>
            </div>
            <div class="col-md-4 ">
                <p><i style="font-size: 3rem;color: #224e6b" class="fontFamily hhtx-tuanduisvg"></i></p>
                <p style="margin-top: 3%">
                <h3>${res.data.advantageList[2].title}</h3></p>
                <div style="margin-top: 5%;font-family: myfont;line-height: 2rem">
                     ${res.data.advantageList[2].content}
                </p>
            </div>`
        $('#advantage').append(ysDom)

            //服务案例
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
            $('#LIc').append(processDom)
        }
    })

}
