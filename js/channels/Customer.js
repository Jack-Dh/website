$(function () {
    bangQuery()
})

/*
* 轮播
* */
function bangQuery() {
    $.ajax({
        url: window.globaCponfig.customerlist,
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

            // 客服服务
            let olanningDom=`   <div class="col-md-6">
            <img style="max-width: 100%" class="img-responsive center-block"
                 src=${res.data.customerList[0].picUrl}>
        </div>
        <div class="col-md-6" style="margin-top: 80px;font-family: myfont;line-height: 2rem;">
            <p>
            <h3 style="margin-bottom: 5%;font-family: SourceHanSansCN-Bold">客服服务</h3></p>

         ${res.data.customerList[0].content}


        </div>`
            $('#Customer').append(olanningDom)




            // 悦为优势
            let ysDom=` <div class="col-md-4 text-center CustomerIng">
                <p><i style="font-size: 3rem" class="fontFamily hhtx-weibiaoti--"></i></p>
                <p style="margin-top: 3%">
                <h3>${res.data.advantageList[0].title}</h3></p>
                <div style="margin-top: 5%;font-family: myfont;line-height: 1.5rem">
                   ${res.data.advantageList[0].content}
                </div>
            </div>
            <div class="col-md-4 text-center CustomerIng">
                <p><i style="font-size: 3rem" class="fontFamily hhtx--tiexinguanli"></i></p>
                <p style="margin-top: 3%">
                 <h3>${res.data.advantageList[1].title}</h3></p>
                <div style="margin-top: 5%;font-family: myfont;line-height: 1.5rem">
                   ${res.data.advantageList[2].content}
                </div>
            </div>
            <div class="col-md-4 text-center CustomerIng">
                <p><i style="font-size: 3rem" class="fontFamily hhtx-handcoins"></i></p>
                <p style="margin-top: 3%">
                <h3>${res.data.advantageList[2].title}</h3></p>
                <div style="margin-top: 5%;font-family: myfont;line-height: 1.5rem">
                   ${res.data.advantageList[2].content}
                </div>
            </div>`
            $('#advantageOne').append(ysDom)


            let ysDomtwo=` <div class="col-md-4 text-center CustomerIng">
                <p><i style="font-size: 3rem" class="fontFamily hhtx-weibiaoti--"></i></p>
                <p style="margin-top: 3%">
                <h3>${res.data.advantageList[3].title}</h3></p>
                <div style="margin-top: 5%;font-family: myfont;line-height: 1.5rem">
                   ${res.data.advantageList[3].content}
                </div>
            </div>
            <div class="col-md-4 text-center CustomerIng">
                <p><i style="font-size: 3rem" class="fontFamily hhtx--tiexinguanli"></i></p>
                <p style="margin-top: 3%">
                 <h3>${res.data.advantageList[4].title}</h3></p>
                <div style="margin-top: 5%;font-family: myfont;line-height: 1.5rem">
                   ${res.data.advantageList[4].content}
                </div>
            </div>
            <div class="col-md-4 text-center CustomerIng">
                <p><i style="font-size: 3rem" class="fontFamily hhtx-handcoins"></i></p>
                <p style="margin-top: 3%">
                <h3>${res.data.advantageList[5].title}</h3></p>
                <div style="margin-top: 5%;font-family: myfont;line-height: 1.5rem">
                   ${res.data.advantageList[5].content}
                </div>
            </div>`
            $('#advantagetwo').append(ysDomtwo)








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
