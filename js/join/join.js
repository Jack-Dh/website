$(function () {

    bangQuery()

})


/*
* 轮播信息查询
* */
function bangQuery() {

    $.ajax({
        url: window.globaCponfig.join,
        method: 'GET',
        data:{type:1},
        success: function (res) {
            console.log(res)
            
            //banner图
            let bandom=`
            <img style="width: 100%" src=${res.data.addressList[0].picUrl}>
            `
            $('#join').append(bandom)
        }
    })

}


