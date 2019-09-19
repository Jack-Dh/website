$(function () {
// 经典案例轮播
    bangQuery()

})

function category(val) {
    console.log(val)
    bangQuery(2, val)
}

/*
* 轮播and品牌集锦信息查询
* */
function bangQuery(type = 2, category = '服饰') {

    $.ajax({
        url: window.globaCponfig.caseList,
        method: 'GET',
        data: {'type': type, 'category': category},
        success: function (res) {
            console.log(res)
            /**
             * 轮播
             * */
            let liNum = $('#banner li').length
            let i=`<img style="max-width: 100%" src="${res.data.bannerList[0].picUrl}">`
            $('#L').children().remove()
            $('#L').append(i)
        //     if (liNum === 0) {
        //         // 轮播
        //         let dom
        //         res.data.bannerList.forEach((item, index) => {
        //             let dogdom=` <li data-target="#carousel-example-generic" data-slide-to=${index} class=""></li>`
        //
        //             if (index === 0) {
        //                 dom = `<div class="item active">
        //   <img data-src="holder.js/900x500/auto/#666:#444/text:Second slide" alt="Second slide [900x500]" src=${item.picUrl} data-holder-rendered="true">
        // </div>`
        //             } else {
        //                 dom = `<div class="item">
        //    <img data-src="holder.js/900x500/auto/#666:#444/text:Second slide" alt="Second slide [900x500]" src=${item.picUrl} data-holder-rendered="true">
        // </div>`
        //             }
        //
        //             $('#dog').append(dogdom)
        //             $('#shuffling').append(dom)
        //         })
        //     }


            /**
             * 品牌集锦
             * */
            let length=$('.bandImg').children().length
            if (length===0){
                let arr=res.data.casesList.splice(0,4)
                let twoarr=res.data.casesList.splice(0,4)
                let threearr=res.data.casesList.splice(0,4)
                let fourtwoarr=res.data.casesList.splice(0,4)
                arr.forEach(item=>{
                    let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                    $('.one').append(dom)
                })
                twoarr.forEach(item=>{
                    let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                    $('.two').append(dom)
                })
                threearr.forEach(item=>{
                    let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                    $('.three').append(dom)
                })
                fourtwoarr.forEach(item=>{
                    let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                    $('.four').append(dom)
                })
                // res.data.casesList.forEach((item, index) => {
                //     if (index < 4) {
                //         let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                //         $('.one').append(dom)
                //     } else if (index < 8) {
                //         let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                //         $('.two').append(dom)
                //     } else if (index < 12) {
                //         console.log(index)
                //         let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                //         $('.three').append(dom)
                //     } else if (index < 16) {
                //         let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                //         $('.four').append(dom)
                //     }
                //
                // })
            } else {
                $(".bandImg").empty()
                let arr=res.data.casesList.splice(0,4)
                let twoarr=res.data.casesList.splice(0,4)
                let threearr=res.data.casesList.splice(0,4)
                let fourtwoarr=res.data.casesList.splice(0,4)
                arr.forEach(item=>{
                    let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                    $('.one').append(dom)
                })
                twoarr.forEach(item=>{
                    let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                    $('.two').append(dom)
                })
                threearr.forEach(item=>{
                    let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                    $('.three').append(dom)
                })
                fourtwoarr.forEach(item=>{
                    let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                    $('.four').append(dom)
                })
                // res.data.casesList.forEach((item, index) => {
                //     if (index < 4) {
                //         let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                //         $('.one').append(dom)
                //     } else if (index < 8) {
                //         let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                //         $('.two').append(dom)
                //     } else if (index < 12) {
                //         let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                //         $('.three').append(dom)
                //     } else if (index < 16) {
                //         let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                //         $('.four').append(dom)
                //     }
                //
                // })

            }



        }
    })

}
