$(function () {
    bangQuery()
})

/*
* 轮播
* */
function bangQuery() {
    $.ajax({
        url: window.globaCponfig.logisticslist,
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

            // 仓储物流
            let olanningDom=` <div class="text-center">
       <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">${res.data.logisticsList[0].title}</h3>
        </div>
         <div style="margin-top: 5%;padding: 0% 10% 0% 10%;font-family: myfont;text-align: center;line-height: 1.5rem">
             ${res.data.logisticsList[0].content}
        </div>`
            $('#logistics').append(olanningDom)


            //仓储物流痛点
            let arr=res.data.painList.splice(0,3)
                arr.forEach(item=>{
                    let dom=`        <div class="col-md-4">
            <div class="w3_agile_event_grid1">
                <img src=${item.picUrl} alt=" " class="img-responsive"/>
            </div>
            <div class="agileits_w3layouts_event_grid1 text-center">
                <h5><a href="#" data-toggle="modal" data-target="#myModal"
                       style="font-family: myfont;font-size: 1.25rem;">${item.title}</a></h5>
                    ${item.content}
                <p>&nbsp;</p>
            </div>
        </div>`
                    $('#pointsOne').append(dom)
                })


            res.data.painList.forEach(item=>{
                let dom=`        <div class="col-md-4">
            <div class="w3_agile_event_grid1">
                <img src=${item.picUrl} alt=" " class="img-responsive"/>
            </div>
            <div class="agileits_w3layouts_event_grid1 text-center">
                <h5><a href="#" data-toggle="modal" data-target="#myModal"
                       style="font-family: myfont;font-size: 1.25rem;">${item.title}</a></h5>
                    ${item.content}
                <p>&nbsp;</p>
            </div>
        </div>`
                $('#pointsTwo').append(dom)
            })




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
