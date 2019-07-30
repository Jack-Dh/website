$(function () {
    bangQuery()
})

/*
* 轮播
* */
function bangQuery() {
    $.ajax({
        url: window.globaCponfig.privatelist,
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



            //行业趋势
            let trend=`    <div class="text-center"><p style="font-size: 2rem;font-family: SourceHanSansCN-Bold;margin-bottom: 5%">${res.data.secondList[0].title}</p>
        <p style="font-size: 1.5rem;font-family: SourceHanSansCN-Bold;margin-bottom: 5%">从"流量运营"到"消费者运营"</p>
    </div>
    <img style="max-width: 100%" src=${res.data.secondList[0].picUrl}>`
        $('#trend').append(trend)






            //悦为优势
            let thirdList = `  <p>
        <h3 style="font-family: myfontl;font-weight: bold">${res.data.thirdList[0].title}</h3></p>
            <img style="max-width: 100%;margin-top: 5%" src=${res.data.thirdList[0].picUrl}>`
            $('#thirdList').append(thirdList)


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
            let fifthList = ` <img style="max-width: 100%" src=${res.data.fifthList[0].picUrl}>`
            $('#fifthList').append(fifthList)
        }
    })
}
