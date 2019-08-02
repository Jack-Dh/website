let data
$(function () {
    $('#daiyunyin').hide()
    bangQuery()
    $('.yewu').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected')
    })


    /**
     * 实时资讯鼠标滚动事件
     * */
    $('#information').on('mousemove', 'p', function () {
        $(this).addClass('informationselect').siblings().removeClass('informationselect')
        let newsindex = $(this).attr('newid')
        // let data=JSON.parse($.cookie('newslist'))
        console.log(data)
        console.log(data[newsindex])
        let newsdom = ` <div class="col-md-6" style="padding: 0;">

                <img style="width: 100%" class="fa fa-bar-chart" src=${data[newsindex].picUrl}>
            </div>
            <div class=" col-md-6">

                <h4 style="color: #2e6da4;margin-bottom: 10px;margin-top: 6%">${data[newsindex].title}</h4>
                   <div style="color: #8f8f8e;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical">
                ${data[newsindex].content.replace(/<[^>]+>/g, "")}</div>
                  <p style="color: #2e6da4;margin-top: 10%" class="text-left"><a href="nesdeltet.html?id=${data[newsindex].id}"  target="_blank">查看详情</a></p>

            </div>`
        $('#news').children().remove()
        $('#news').append(newsdom)
    })


})

function category(val) {
    console.log(val)
    bangQuery(2, val)
}

/*
* 轮播信息查询
* */
function bangQuery() {

    $('.food,.infant,.makeup,.household,.servicesing').hide()
    $.ajax({
        url: window.globaCponfig.indexbanner,
        method: 'GET',
        success: function (res) {
            console.log(res)
            //轮播
            let liNum = $('#JiSlider li').length

            if (liNum === 0) {
                let dom
                res.data.bannerList.forEach((item, index) => {
                    let dogdom = ` <li data-target="#carousel-example-generic" data-slide-to=${index} class=""></li>`

                    if (index === 0) {
                        dom = `<div class="item active">
          <img data-src="holder.js/900x500/auto/#666:#444/text:Second slide" alt="Second slide [900x500]" src=${item.picUrl} data-holder-rendered="true">
        </div>`
                    } else {
                        dom = `<div class="item">
           <img data-src="holder.js/900x500/auto/#666:#444/text:Second slide" alt="Second slide [900x500]" src=${item.picUrl} data-holder-rendered="true">
        </div>`
                    }

                    $('#dog').append(dogdom)
                    $('#shuffling').append(dom)
                })
                // $('#shuffling').html(dom)
            }

            //品牌客户
            res.data.brandMap.服饰.forEach((item, index) => {

                if (index < 3) {
                    let dom = `
                        <div class="col-xs-4 ">
                            <div class="flex-item">
                                <img class="img-responsive" src=${item.picUrl}>
                            </div>
                             <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                            <div style=" overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;（行数）
    -webkit-box-orient: vertical;">${item.content}</div>
                        </div>
                        </div>
                        `
                    $('#carousel-inner').append(dom)
                } else {
                    let dom = `
                        <div class="col-xs-4 ">
                            <div class="flex-item">
                                <img class="img-responsive" src=${item.picUrl}>
                            </div>
                             <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                                   <div style=" overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;（行数）
    -webkit-box-orient: vertical;">${item.content}</div>
                        </div>
                        </div>
                        `
                    $('#carousel-innertwo').append(dom)
                }


            })


            res.data.brandMap.食品.forEach((item, index) => {
                if (index < 3) {
                    let dom = `
                        <div class="col-xs-4 ">
                            <div class="flex-item">
                                <img class="img-responsive" src=${item.picUrl}>
                            </div>
                             <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                            ${item.content}
                        </div>
                        </div>
                        `
                    $('#carousel-inner_food').append(dom)
                } else {
                    let dom = `
                        <div class="col-xs-4 ">
                            <div class="flex-item">
                                <img class="img-responsive" src=${item.picUrl}>
                            </div>
                             <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                            ${item.content}
                        </div>
                        </div>
                        `
                    $('#carousel-foodtwo').append(dom)
                }


            })

            res.data.brandMap.母婴.forEach((item, index) => {
                if (index < 3) {
                    let dom = `
                        <div class="col-xs-4 ">
                            <div class="flex-item">
                                <img class="img-responsive" src=${item.picUrl}>
                            </div>
                             <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                            ${item.content}
                        </div>
                        </div>
                        `
                    $('#carousel-inner_infant').append(dom)
                } else {
                    let dom = `
                        <div class="col-xs-4 ">
                            <div class="flex-item">
                                <img class="img-responsive" src=${item.picUrl}>
                            </div>
                             <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                            ${item.content}
                        </div>
                        </div>
                        `
                    $('#carousel-infanttwo').append(dom)
                }


            })

            res.data.brandMap.美妆.forEach((item, index) => {
                if (index < 3) {
                    let dom = `
                        <div class="col-xs-4 ">
                            <div class="flex-item">
                                <img class="img-responsive" src=${item.picUrl}>
                            </div>
                             <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                            ${item.content}
                        </div>
                        </div>
                        `
                    $('#carousel-makeup').append(dom)
                } else {
                    let dom = `
                        <div class="col-xs-4 ">
                            <div class="flex-item">
                                <img class="img-responsive" src=${item.picUrl}>
                            </div>
                             <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                            ${item.content}
                        </div>
                        </div>
                        `
                    $('#carousel-makeuptwo').append(dom)
                }

            })

            res.data.brandMap.家居.forEach((item, index) => {
                if (index < 3) {
                    let dom = `
                        <div class="col-xs-4 ">
                            <div class="flex-item">
                                <img class="img-responsive" src=${item.picUrl}>
                            </div>
                             <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                            ${item.content}
                        </div>
                        </div>
                        `
                    $('#carousel-household').append(dom)
                } else {
                    let dom = `
                        <div class="col-xs-4 ">
                            <div class="flex-item">
                                <img class="img-responsive" src=${item.picUrl}>
                            </div>
                             <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                            ${item.content}
                        </div>
                        </div>
                        `
                    $('#carousel-householdtwo').append(dom)
                }

            })


            //主营业务
            res.data.businessMap.整店代运营服务.forEach(item => {
                let dom = `<div class="col-sm-3"><img src=${item.picUrl} alt=" " class="img-responsive"/></div>
                   
                `
                $('#im').append(dom)
            })

            res.data.businessMap.整合营销服务.forEach(item => {
                let dom = `<div class="col-sm-3"><img src=${item.picUrl} alt=" " class="img-responsive"/></div>
                   
                `
                $('#imtwo').append(dom)
            })


            // 悦为优势
            let arr = res.data.advantageList

            let brr = arr.splice(0, 4)
            arr.forEach(item => {
                let dom = `
                      <div class="col-md-3 agileits_banner_bottom_grid">
                    <div class="hovereffect w3ls_banner_bottom_grid">
                     <img src=${item.picUrl} alt=" " class="img-responsive"/>
                        <div class="overlay">
                            <h4>${item.title}</h4>
                            ${item.content}
                        </div>
                    </div>
                </div>
                    `
                $('#youshione').append(dom)
            })
            brr.forEach(item => {
                let dom = `
                      <div class="col-md-3 agileits_banner_bottom_grid" style="margin-top: 2%">
                    <div class="hovereffect w3ls_banner_bottom_grid">
                        <img src=${item.picUrl} alt=" " class="img-responsive"/>
                        <div class="overlay">
                            <h4>${item.title}</h4>
                            ${item.content}
                        </div>
                    </div>
                </div>
                    `
                $('#youshitwo').append(dom)
            })


            //实时资讯information

            let arrs = res.data.newsList.splice(0, 3)
            data = arrs

            let arrsStr = JSON.stringify(arrs)
            console.log(data)
            window.location.href
            $.cookie('newslist', arrs, {path: '/'});//储存到cookie中

            arrs.forEach((item, index) => {
                let dom = ` <p newid=${index} style="background-color:#ffffff;padding: 3%;margin-bottom: 4%">
                        12/5<span>${item.title}</span></p>`
                $('#information').append(dom)
            })

            let newsdom = ` <div class="col-md-6" style="padding: 0;">

                        <img style="width: 100%" class="fa fa-bar-chart" src=${arrs[0].picUrl}>
                    </div>
                    <div class=" col-md-6">

                        <h4 style="color: #2e6da4;margin-bottom: 10px;margin-top: 6%">${arrs[0].title}</h4>
                        <div style="color: #8f8f8e;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical">
                        ${arrs[0].content.replace(/<[^>]+>/g, "")}
                       
                        </div>
                        <p style="color: #2e6da4;margin-top: 10%" class="text-left"><a href="nesdeltet.html?id=${arrs[0].id}"  target="_blank">查看详情</a></p>
                    </div>`
            $('#news').children().remove()
            $('#news').append(newsdom)


        }
    })


}

/*
* 品牌客户类目切换
* */
function classification(id, c) {
    // $('.food').show()
    $('.food,.flexiselDemo1,.infant,.makeup,.household').hide()
    $(`.${id}`).show()

}

/**
 * 主营业务切换
 * */
function yewu(id) {

    $('#yingxiao,#daiyunyin').hide()
    $(`#${id}`).show()

}
