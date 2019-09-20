$(function () {
    bangQuery()
})

/*
* 轮播
* */
function bangQuery() {
    $.ajax({
        url: window.globaCponfig.broadcastlist,
        method: 'GET',
        success: function (res) {
            console.log(res)
            /**
             * 轮播
             * */

                let shufflingDom =`<img style="max-width: 100%" src=${res.data.bannerList[0].picUrl}>`
                $('#shuffling').append(shufflingDom)


            //服务案例
            console.log(res.data)
            res.data.broadcastList.forEach(item => {
                let casedom = `

    <div class="col-md-3">
        <img style="max-width: 100%" src=${item.picUrl}>
    </div>
`
                $('#case').append(casedom)
            })


            //合作流程
            let fifthListdom = ` <img style="max-width: 100%" src=${res.data.cooperateList[0].picUrl}>`
            $('#fifthListdom').append(fifthListdom)
        }
    })
}
