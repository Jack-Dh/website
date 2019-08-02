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


            //管理对接
            let dockeListtitle=
                `      <div id="dockeListtitle" class="col-md-6" style="padding-left: 6%;margin-top: 80px;font-family: myfont;line-height: 2rem;">
            <p>
            <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN;font-size: 2.25rem;color: #2e6da4;font-weight: 350">
                ${res.data.dockeList.title}</h3></p>
            <div style="font-size: 0.25rem;font-family: myfont;font-weight: bold">
                ${res.data.dockeList.content }
            </div>
        </div>`
            $('#dockeListtitle').append(dockeListtitle)


            res.data.dockeList.imageList.forEach(item=>{
                let flexiselDemo2=`   <li>
                <img style="max-width: 100%" src=${item} alt=" "
                    class="img-responsive"/>-->
            </li>`
                $('#flexiselDemo2').append(flexiselDemo2)
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
