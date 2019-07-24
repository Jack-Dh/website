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

            if (liNum === 0) {
                res.data.bannerList.forEach(item => {
                    let dom = `<li>
                <div class="w3layouts-banner-top">
                    <div class="container">
                        <img src=${item.picUrl}>
                    </div>
                </div>
            </li>`
                    $('#banner').append(dom)
                    /**
                     * 轮播 end
                     * */
                })
            }


            /**
             * 品牌集锦
             * */
            let length=$('.bandImg').children().length
            if (length===0){
                res.data.casesList.forEach((item, index) => {
                    if (index < 4) {
                        let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                        $('.one').append(dom)
                    } else if (index < 8) {
                        let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                        $('.two').append(dom)
                    } else if (index < 12) {
                        console.log(index)
                        let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                        $('.three').append(dom)
                    } else if (index < 16) {
                        let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                        $('.four').append(dom)
                    }

                })
            } else {
                $(".bandImg").empty()
                res.data.casesList.forEach((item, index) => {
                    if (index < 4) {
                        let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                        $('.one').append(dom)
                    } else if (index < 8) {
                        let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                        $('.two').append(dom)
                    } else if (index < 12) {
                        let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                        $('.three').append(dom)
                    } else if (index < 16) {
                        let dom = `<img class="col-xs-3 mouver item"  id=${item.id} src=${item.picUrl}>`
                        $('.four').append(dom)
                    }

                })
            }



        }
    })

}
