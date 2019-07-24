$(function () {

    bangQuery()
    $('.yewu').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected')
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
                res.data.bannerList.forEach(item => {
                    let dom = `
                  <li>
                <div class="w3layouts-banner-top w3layouts-banner-top2">
                    <div class="container">
                    <img src=${item.picUrl}>
                    </div>
                    </div>
                    </li>
                `
                    $('#JiSlider ul').append(dom)


                })
            }

            //品牌客户
            res.data.brandMap.服饰.forEach((item,index) => {
                let dom = `
                    <li>
                    <div class="w3layouts_event_grid" >
                        <div class="w3_agile_event_grid1">
                            <img src=${item.picUrl} alt=" " class="img-responsive"/>
                        </div>
                        <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                            ${item.content}
                        </div>
                    </div>
                </li>
                `
                $('#flexiselDemo1').append(dom)

            })

            res.data.brandMap.食品.forEach((item,index) => {
                let dom = `
                    <li>
                    <div class="w3layouts_event_grid" >
                        <div class="w3_agile_event_grid1">
                            <img src=${item.picUrl} alt=" " class="img-responsive"/>
                        </div>
                        <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                            ${item.content}
                        </div>
                    </div>
                </li>
                `
                $('#food').append(dom)

            })

            res.data.brandMap.母婴.forEach((item,index) => {
                let dom = `
                    <li>
                    <div class="w3layouts_event_grid" >
                        <div class="w3_agile_event_grid1">
                            <img src=${item.picUrl} alt=" " class="img-responsive"/>
                        </div>
                        <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                            ${item.content}
                        </div>
                    </div>
                </li>
                `
                $('#infant').append(dom)

            })

            res.data.brandMap.美妆.forEach((item,index) => {
                let dom = `
                    <li>
                    <div class="w3layouts_event_grid" >
                        <div class="w3_agile_event_grid1">
                            <img src=${item.picUrl} alt=" " class="img-responsive"/>
                        </div>
                        <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                            ${item.content}
                        </div>
                    </div>
                </li>
                `
                $('#makeup').append(dom)

            })

            res.data.brandMap.家居.forEach((item,index) => {
                let dom = `
                    <li>
                    <div class="w3layouts_event_grid" >
                        <div class="w3_agile_event_grid1">
                            <img src=${item.picUrl} alt=" " class="img-responsive"/>
                        </div>
                        <div class="agileits_w3layouts_event_grid1" >
                            <h5><a href="#" data-toggle="modal" data-target="#myModal">${item.title}</a></h5>
                            ${item.content}
                        </div>
                    </div>
                </li>
                `
                $('#household').append(dom)

            })


            //主营业务
            res.data.businessMap.整店代运营服务.forEach(item=>{
                let dom=`
                   <li>
                            <img src=${item.picUrl} alt=" " class="img-responsive"/>
                        </li>
                `
                $('#flexiselDemo2').append(dom)
            })
            res.data.businessMap.整合营销服务.forEach(item=>{
                let dom=`
                   <li>
                            <img src=${item.picUrl} alt=" " class="img-responsive"/>
                        </li>
                `
                $('#servicesing').append(dom)
            })


            // 悦为优势
            let arr=res.data.advantageList

            let brr=arr.splice(0,4)
                arr.forEach(item=>{
                    let dom=`
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
            brr.forEach(item=>{
                let dom=`
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
        }
    })

}

/*
* 品牌客户类目切换
* */
function classification(id) {
    // $('.food').show()
    $('.food,.flexiselDemo1,.infant,.makeup,.household').hide()
    $(`.${id}`).show()

}
/**
 * 主营业务切换
 * */
function yewu(id) {

    $('.servicesing,.flexiselDemo2').hide()
    $(`.${id}`).show()

}
