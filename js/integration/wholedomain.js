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

            // 全域运营
            let wholedomaindom = `<div style="font-family: myfont;line-height: 2rem;padding: 0 10% 0 10%">
            <p>
            <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">${res.data.firstList[0].title}</h3></p>
            ${res.data.firstList[0].content}
              </div>`
            $('#wholedomain').append(wholedomaindom)


            //全域矩阵
            let matrixdom = `
 <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">${res.data.secondList[0].title}</h3></p>
    <img style="max-width: 100%" src=${res.data.secondList[0].picUrl}>`
            $('#matrix').append(matrixdom)


            //悦为优势
            let ywysdom = `  <h3 style="font-family: SourceHanSansCN-Bold">${res.data.thirdList[0].title}</h3>
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
