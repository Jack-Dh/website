$(function () {
    bangQuery()
})

/*
* 轮播
* */
function bangQuery() {
    $.ajax({
        url: window.globaCponfig.contentlist,
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

            // 内容营销
            let firstListdom = `   <div style="font-family: myfont;line-height: 2rem;padding: 0 10% 0 10%">
            <p>
            <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">${res.data.firstList[0].title}</h3></p>
${res.data.firstList[0].content}

        </div>`
            $('#firstListdom').append(firstListdom)


            //内容营销重要性
            let secondListdom = `
       <div style="font-family: myfont;line-height: 2rem;padding: 0 15% 0 15%">
            <p>
            <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">${res.data.secondList[0].title}</h3></p>
           ${res.data.secondList[0].content}
        </div>`
            $('#secondListdom').append(secondListdom)

            let secondListimg=`<img src=${res.data.secondList[0].picUrl} style="max-width: 100%;margin-top: 10%">`
            $('#secondListimg').append(secondListimg)




            //悦为优势
            let thirdListdom = `
 
        <div style="font-family: myfontl;font-weight: bold">${res.data.thirdList[0].content}</div>
     <img style="max-width: 100%;margin-top: 5%" src=${res.data.thirdList[0].picUrl}>`
            $('#thirdListdom').append(thirdListdom)


            //服务案例
            res.data.caseList.forEach(item => {
                let casedom = `
             <div class="col-md-3">
                <img style="max-width: 100%" src=${item.picUrl}>
                </div> `
                $('#case').append(casedom)
            })


            //合作流程
            let fifthListdom = ` <img style="max-width: 100%" src=${res.data.fifthList[0].picUrl}>`
            $('#fifthListdom').append(fifthListdom)
        }
    })
}
