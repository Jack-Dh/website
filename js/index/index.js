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

            var mySwiper = new Swiper('.swiper-wrapperlun', {
                pagination: {
                    el: '.swiper-pagination',
                },
            })

            //品牌客户
            let dom = ''
            res.data.brandMap.服饰.forEach((item, index) => {
                dom += `
               <div class="swiper-slide" style="min-width: 260px;padding:2px;background-color: #ffffff">
                <div style="box-shadow: 2px 2px 2px 2px #ccc;margin-right: 76px;">
                <img src="${item.picUrl}" style="width: 100%;" />
                 <div style="text-align: left;height: 260px;background-color: #fff;overflow: hidden;border-bottom: 8px solid #224e6b;margin-top: 10px">
                  <h3 style="color: #2e6da4;padding: 20px;text-align: left;font-size: 23px">${item.title}</h3>
                    <div style="text-align: left;padding: 0px 10px 0 10px;margin-top: 23px;line-height: 30px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp:3;-webkit-box-orient: vertical;font-size: 15px">${item.content}</div>
                     </div>
                    </div>
                  </div>
                `
            })

            let wrap = `<div class="swiper-wrapper" >${dom}${dom}</div>`
            $('#carousel-inner').append(wrap)

            let food = ''
            res.data.brandMap.食品.forEach((item, index) => {
                food += `
              <div class="swiper-slide" style="min-width: 260px;padding:2px;background-color: #ffffff">
                <div style="box-shadow: 2px 2px 2px 2px #ccc;margin-right: 76px;">
                <img src="${item.picUrl}" style="width: 100%;" />
                 <div style="text-align: left;height: 260px;background-color: #fff;overflow: hidden;border-bottom: 8px solid #224e6b;margin-top: 10px">
                  <h3 style="color: #2e6da4;padding: 20px;text-align: left;font-size: 23px">${item.title}</h3>
                    <div style="text-align: left;padding: 0px 10px 0 10px;margin-top: 23px;line-height: 30px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp:3;-webkit-box-orient: vertical;font-size: 15px">${item.content}</div>
                     </div>
                    </div>
                  </div>
                `
            })
            let wrapfood = `<div class="swiper-wrapper" >${food}${food}</div>`
            $('#carousel-food').append(wrapfood)

            let makeup = ''
            res.data.brandMap.美妆.forEach((item, index) => {
                makeup += `
              <div class="swiper-slide" style="min-width: 260px;padding:2px;background-color: #ffffff">
                <div style="box-shadow: 2px 2px 2px 2px #ccc;margin-right: 76px;">
                <img src="${item.picUrl}" style="width: 100%;" />
                 <div style="text-align: left;height: 260px;background-color: #fff;overflow: hidden;border-bottom: 8px solid #224e6b;margin-top: 10px">
                  <h3 style="color: #2e6da4;padding: 20px;text-align: left;font-size: 23px">${item.title}</h3>
                    <div style="text-align: left;padding: 0px 10px 0 10px;margin-top: 23px;line-height: 30px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp:3;-webkit-box-orient: vertical;font-size: 15px">${item.content}</div>
                     </div>
                    </div>
                  </div>
                `
            })
            let wrapmakeup = `<div class="swiper-wrapper" >${makeup}${makeup}</div>`
            $('#carousel-makeup').append(wrapmakeup)


            let toy = ''

            res.data.brandMap.母婴.forEach((item, index) => {
                toy += `
             <div class="swiper-slide" style="min-width: 260px;padding:2px;background-color: #ffffff">
                <div style="box-shadow: 2px 2px 2px 2px #ccc;margin-right: 76px;">
                <img src="${item.picUrl}" style="width: 100%;" />
                 <div style="text-align: left;height: 260px;background-color: #fff;overflow: hidden;border-bottom: 8px solid #224e6b;margin-top: 10px">
                  <h3 style="color: #2e6da4;padding: 20px;text-align: left;font-size: 23px">${item.title}</h3>
                    <div style="text-align: left;padding: 0px 10px 0 10px;margin-top: 23px;line-height: 30px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp:3;-webkit-box-orient: vertical;font-size: 15px">${item.content}</div>
                     </div>
                    </div>
                  </div>
                `
            })
            let wraptoy = `<div class="swiper-wrapper" >${toy}${toy}</div>`
            $('#carousel-toy').append(wraptoy)


            let furniture = ``
            res.data.brandMap.家居.forEach((item, index) => {
                furniture += `
             <div class="swiper-slide" style="min-width: 260px;padding:2px;background-color: #ffffff">
                <div style="box-shadow: 2px 2px 2px 2px #ccc;margin-right: 76px;">
                <img src="${item.picUrl}" style="width: 100%;" />
                 <div style="text-align: left;height: 260px;background-color: #fff;overflow: hidden;border-bottom: 8px solid #224e6b;margin-top: 10px">
                  <h3 style="color: #2e6da4;padding: 20px;text-align: left;font-size: 23px">${item.title}</h3>
                    <div style="text-align: left;padding: 0px 10px 0 10px;margin-top: 23px;line-height: 30px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp:3;-webkit-box-orient: vertical;font-size: 15px">${item.content}</div>
                     </div>
                    </div>
                  </div>
                `
            })
            let wrapfurniture = `<div class="swiper-wrapper" >${furniture}${furniture}</div>`
            $('#carousel-furniture').append(wrapfurniture)


            //主营业务
            //     let daiyuny=``
            //     res.data.businessMap.整店代运营服务.forEach(item => {
            //      daiyuny+=`<div class="swiper-wrapper "><img src="${item.picUrl}"></div>`
            //     $('#daiyunyingone').append(daiyunyin)
            // })


            res.data.businessMap.整店代运营服务.forEach(item => {
                let dom = `<div class="swiper-slide">
<a href="${item.link}">
<img style="max-width: 200px" src="${item.picUrl}"/>
</a>
</div>`
                $('#daiyunying').append(dom)
            })

            var mySwiperx = new Swiper('.swiper-containeryx', {
                slidesPerView: 4,
                slidesPerGroup: 1,
            })


            // let wrapdaiyunying = `<div class="swiper-wrapper" >${daiyunying}</div>`
            // $('#daiyunying').append(wrapdaiyunying)

            res.data.businessMap.整合营销服务.forEach(item => {
                let dom = `
<div class="swiper-slide"  >
<a href="${item.link}">
<img style="max-width: 200px" src="${item.picUrl}"/>
</a>
</div>`
                $('#yingxiao').append(dom)
            })

            var mySwiperxs = new Swiper('.swiper-containeryxs', {
                slidesPerView: 4,
                slidesPerGroup: 1,
            })

            $('#t').hide()

            $('#btn3').click(function () {
                console.log('zuo')
                mySwiperxs.slidePrev();
                mySwiperx.slidePrev();
            })

            $('#btn4').click(function () {
                console.log('uo')
                mySwiperxs.slideNext();
                mySwiperx.slideNext();

            })


            var mySwiper = new Swiper('.swiper-containers', {
                slidesPerView: 4,
                slidesPerGroup: 1,
            })
            var mySwiperfood = new Swiper('.swiper-containerfood', {
                slidesPerView: 4,
                slidesPerGroup: 1,
            })
            var mySwipermakeup = new Swiper('.swiper-containermakeup', {
                slidesPerView: 4,
                slidesPerGroup: 1,
            })
            var mySwipertoy = new Swiper('.swiper-containertoy', {
                slidesPerView: 4,
                slidesPerGroup: 1,
            })
            var mySwiperfurniture = new Swiper('.swiper-containerfurniture', {
                slidesPerView: 4,
                slidesPerGroup: 1,
            })
            var mySwiperyunyin = new Swiper('.swiper-wrapperdaiyunying', {
                slidesPerView: 4,
                slidesPerGroup: 1,
            })
            var mySwiperfyingxiaotwo = new Swiper('.swiper-wrapperdaiyingxiaotwo', {
                slidesPerView: 4,
                slidesPerGroup: 1,
            })
            $('#btn1').click(function () {
                mySwiper.slidePrev();
                mySwiperfood.slidePrev();
                mySwipermakeup.slidePrev();
                mySwipertoy.slidePrev();
                mySwiperfurniture.slidePrev();
            })
            $('#btn2').click(function () {
                mySwiper.slideNext();
                mySwiperfood.slideNext();
                mySwipermakeup.slideNext();
                mySwipertoy.slideNext();
                mySwiperfurniture.slideNext();
            })
            $('#two,#three,#four,#five').hide()


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
    $('#one,#two,#three,#four,#five').hide()
    $(`#${id}`).show()

}

/**
 * 主营业务切换
 * */
function yewu(id) {

    $('#o,#t').hide()
    $(`#${id}`).show()
    var mySwiperx = new Swiper('.swiper-containeryx', {
        slidesPerView: 4,
        slidesPerGroup: 1,
    })
    var mySwiperxs = new Swiper('.swiper-containeryxs', {
        slidesPerView: 4,
        slidesPerGroup: 1,
    })
}
