$(function () {
    bangQuery()
})

/*
* 轮播
* */
function bangQuery() {
    $.ajax({
        url: window.globaCponfig.gloabllist,
        method: 'GET',
        success: function (res) {
            console.log(res)
            /**
             * 轮播
             * */
                // 轮播
            let domshuffling
            res.data.bannerList.forEach((item, index) => {
                let dogdom=` <li data-target="#carousel-example-generic" data-slide-to=${index} class=""></li>`

                if (index === 0) {
                    domshuffling = `<div class="item active">
          <img data-src="holder.js/900x500/auto/#666:#444/text:Second slide" alt="Second slide [900x500]" src=${item.picUrl} data-holder-rendered="true">
        </div>`
                } else {
                    domshuffling = `<div class="item">
           <img data-src="holder.js/900x500/auto/#666:#444/text:Second slide" alt="Second slide [900x500]" src=${item.picUrl} data-holder-rendered="true">
        </div>`
                }

                $('#dog').append(dogdom)
                $('#shuffling').append(domshuffling)
            })

            // 全域运营
            let wholedomaindom = `<div style="font-family: myfont;line-height: 2rem;padding: 0 10% 0 10%">
            <p>
            <h3 style="margin-bottom: 5%;">${res.data.firstList[0].title}</h3></p>
            <span style="text-indent:2em">
            ${res.data.firstList[0].content}</span>
              </div>`
            $('#wholedomain').append(wholedomaindom)


            //全域矩阵
            let matrixdom = `
 <h3 style="margin-bottom: 5%;">${res.data.secondList[0].title}</h3></p>
    <img style="max-width: 100%" src=${res.data.secondList[0].picUrl}>`
            $('#matrix').append(matrixdom)


            //悦为优势
            let ywysdom = `  <h3>${res.data.thirdList[0].title}</h3>
    <div style="padding: 5% 8% 5% 8% " class="container text-center">
        <img style="max-width: 100%" src=${res.data.thirdList[0].picUrl}>
    </div>`
            $('#ywys').append(ywysdom)


            //服务案例
//             res.data.caseList.forEach(item => {
//                 let casedom = `
//
//     <div class="col-md-3">
//         <img style="max-width: 100%" src=${item.picUrl}>
//     </div>
// `
//                 $('#case').append(casedom)
//             })


            //合作流程
            let fifthListdom = ` <img style="max-width: 100%" src=${res.data.fifthList[0].picUrl}>`
            $('#fifthListdom').append(fifthListdom)
        }
    })
}
