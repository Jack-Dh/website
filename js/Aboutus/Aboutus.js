$(function () {

    bangQuery()

})


/*
* 轮播信息查询
* */
function bangQuery() {

    $.ajax({
        url: window.globaCponfig.aboutyuewei,
        method: 'GET',
        data: {type: 1},
        success: function (res) {
            console.log(res)

            // 轮播
            res.data.BannerList.forEach(item => {
                let dom = `
                      <li>
            <div class="w3layouts-banner-top">

                <div class="container">
                <img src=${item.picUrl}>
                </div>
                </div>
                </li>
                    `
                $('#JiSlider ul').append(dom)
            })

            //关于悦为
            let yueweidom=`
             <div class="" style="background: #ffffff;padding: 0;">
                    <div class="col-md-4" style="padding: 0; max-width:100%">
                        <img style="width: 100%;height: auto" class="fa fa-bar-chart"
                             src=${res.data.AboutList[0].picUrl}>
                    </div>
                    <div class=" col-md-8 text-left" style="padding: 1%">
                        <div style="color: #848484;font-size: 1.25rem;padding-left:3%;line-height: 2rem;font-family: STHeitiSCMedium">
                           ${res.data.AboutList[0].content}
                           </div>

                    </div>
                </div>
            `
            $('#yuewei').append(yueweidom)



            //客户分布
            let kehudom=`
                <img src=${res.data.CustomerList[0].picUrl} style="width: 100%">
            `
            $('#kehu').append(kehudom)


            //发展历程
            let fazhandom=`
                <img src=${res.data.DevelopmentList[0].picUrl} style="width: 100%">
            `
            $('#fazhan').append(fazhandom)
        }
    })

}


