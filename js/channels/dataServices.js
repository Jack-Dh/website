$(function () {
    bangQuery()
})

/*
* 轮播
* */
function bangQuery() {
    $.ajax({
        url: window.globaCponfig.dataList,
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

            // 数据服务
            let crossdom = `
  <div class="col-md-5" style="margin-top: 80px;font-family: myfont;line-height: 2rem">
            <p>
            <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">数据服务</h3></p>

            ${res.data.dataList[0].content}
        </div>
        <div class="col-md-7">
            <img style="max-width: 100%" class="img-responsive center-block"
                 src=${res.data.dataList[0].picUrl}>
        </div>

`
            // $(crossdom).appendTo('#cross-border')
            $('#dataserver').append(crossdom)


            //数据服务案例
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
            $('#process').append(processDom)
        }
    })

}
