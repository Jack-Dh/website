$(function () {
    bangQuery()
})

/*
* 轮播
* */
function bangQuery() {
    $.ajax({
        url: window.globaCponfig.explosivelist,
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

            // 爆款计划
            let firstListdom = ` <div class="col-md-6" style="margin-top: 80px;font-family: myfont;line-height: 2rem;padding-right: 10%">
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

        //悦为优势
            let arr=res.data.thirdList.splice(0,3)
            arr.forEach(item=>{
                let dom=`  <div >
            <img  class="advantageImg" src=${item.picUrl} style="max-width: 100%">
            <div class="advantageP"  style="background-color: #ffffff;padding: 8% 5% 8% 5%;font-family: SourceHanSansCN">
                ${item.content}
            </div>
        </div>`
                $('#advantageOne').append(dom)
            })

            res.data.thirdList.forEach(item=>{
                let dom=`  <div >
            <img  class="advantageImg" src=${item.picUrl} style="max-width: 100%">
            <div class="advantageP"  style="background-color: #ffffff;padding: 8% 5% 8% 5%;font-family: SourceHanSansCN">
                ${item.content}
            </div>
        </div>`
                $('#advantageTwo').append(dom)
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
