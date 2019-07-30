$(function () {
    bangQuery()
})

/*
* 轮播
* */
function bangQuery() {
    $.ajax({
        url: window.globaCponfig.microlist,
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

            // 双微代运营
            let firstListdom = `    <div style="font-family: myfont;line-height: 2rem;padding: 0 10% 0 10%">
            <p>
            <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">${res.data.firstList[0].title}</h3></p>

           ${res.data.firstList[0].content}
`
            $('#firstListdom').append(firstListdom)


            //双微特点
            let secondListdom = `
            <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">${res.data.secondList[0].title}</h3></p>
            <span>内容品质进化：厌倦了重复和跟风，观众评判内容品质的标准主要集中为这4方面</span>`
            $('#secondListdom').append(secondListdom)

            let secondListImg = `
               <img src=${res.data.secondList[0].picUrl} style="max-width: 100%">`
            $('#secondListImg').append(secondListImg)





            //悦为优势
            let thirdList = ` <img style="max-width: 100%;margin-top: 5%" src=${res.data.thirdList[0].picUrl}>`
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
            let fifthListdom = ` <img style="max-width: 100%" src=${res.data.fifthList[0].picUrl}>`
            $('#fifthListdom').append(fifthListdom)
        }
    })
}
