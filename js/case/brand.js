$(function () {
// 经典案例轮播
    $.ajax({
        url: window.globaCponfig.caseList,
        method: 'GET',
        data: {'type': 2},
        success: function (res) {
            console.log(res)
            res.data.bannerList.forEach(item=> {
                let dom = `<li>
                <div class="w3layouts-banner-top">
                    <div class="container">
                        <img src=${item.picUrl}>
                    </div>
                </div>
            </li>`
                $('#banner').append(dom)
            })
        }
    })

})
