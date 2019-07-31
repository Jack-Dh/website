$(function () {

    bangQuery()
    pages()



})
//分页
function pages(category='公司新闻',total) {
    // let total=Number($.cookie('total'))
    // let category=$.cookie('category')


    $('#id').jqPaginator({
        totalCounts: total,
        visiblePages: 10,
        pageSize:3,
        first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
        prev: '<li class="prev"><a href="javascript:void(0);">上一页</a></li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
        last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',
        onPageChange: function (num, type) {
            console.log(num)
            $.ajax({
                url: window.globaCponfig.aboutyuewei,
                method: 'GET',
                data: {type: 2, category: category,limit:3,page: num},
                success:function (res) {
                    console.log(res)
                    $('#home').children().remove()
                    if (res.data.NewsList.list.length !== 0) {
                        res.data.NewsList.list.forEach(item => {
                            let dom = `<div class="container">
                <div class="row">
                    <div class="col-md-9 col-md-offset-3"
                         style=" width: 48%;background: #ffffff;padding: 0;">
                        <div class="col-md-6" style="padding: 0;">
                            <img style="width: 100%;height: auto" class="fa fa-bar-chart"
                                 src="images/index/272-194-22.jpg">
                        </div>
                        <div class=" col-md-6 text-left">
                            <h4 style="color: #2e6da4;margin-bottom: 10px;margin-top: 6%">${item.title}</h4>
                            <div style="color: #8f8f8e;margin-bottom: 10px; overflow: hidden;  text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3; -webkit-box-orient: vertical;
">
                               ${item.content.replace(/<[^<>]+>/g, '')}</div>
                            <span style="color: #2e6da4"><a href="nesdeltet.html?id=${item.id}"  target="_blank">查看详情</a></span>
                            <p style="color: #8f8f8e"><span class="glyphicon glyphicon-time"></span>2019/7/12</p>
                        </div>
                    </div>
                </div>
            </div>`
                            $('#home').append(dom)
                        })
                        $('#pages').show()
                    } else if (res.data.NewsList.list.length === 0) {
                        let dom = `<p class="text-center" style="color: #2e6da4;font-size: 1.5rem">暂无~</p>`
                        $('#home').append(dom)
                        $('#pages').hide()
                    }


                }
            })

        }
    });
}
/*
* 轮播信息查询
* */
function bangQuery() {
    $.ajax({
        url: window.globaCponfig.aboutyuewei,
        method: 'GET',
        data: {type: 2, category: '公司新闻',limit:3},
        success: function (res) {
            console.log(res)
            // total=res.data.NewsList.total
            $.cookie('total', res.data.NewsList.total, {path: '/'});//储存到cookie中
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
            pages('公司新闻',res.data.NewsList.total)
//             res.data.NewsList.list.forEach(item => {
//                 let dom = `<div class="container">
//                 <div class="row">
//                     <div class="col-md-9 col-md-offset-3"
//                          style=" width: 48%;background: #ffffff;padding: 0;">
//                         <div class="col-md-6" style="padding: 0;">
//                             <img style="width: 100%;height: auto" class="fa fa-bar-chart"
//                                  src="images/index/272-194-22.jpg">
//                         </div>
//                         <div class=" col-md-6 text-left">
//                             <h4 style="color: #2e6da4;margin-bottom: 10px;margin-top: 6%">${item.title}</h4>
//                             <div style="color: #8f8f8e;margin-bottom: 10px; overflow: hidden;  text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3; -webkit-box-orient: vertical;
// ">
//                                ${item.content.replace(/<[^<>]+>/g, '')}</div>
//                             <span style="color: #2e6da4">查看详情</span>
//                             <p style="color: #8f8f8e"><span class="glyphicon glyphicon-time"></span>2019/7/12</p>
//                         </div>
//                     </div>
//                 </div>
//
//             </div>`
//                 $('#home').append(dom)
//             })


        }
    })

}

/**
 * 新闻类别切换
 * */
function tagger(val) {
    console.log(val)
    let total=Number($.cookie('total'));//储存到cookie中
    $.cookie('category', val, {path: '/'});//储存到cookie中
    pages(val,total)


    $.ajax({
        url: window.globaCponfig.aboutyuewei,
        method: 'GET',
        data: {type: 2, category: val,limit:3},
        success: function (res) {
            console.log(res)
            total=res.data.NewsList.total
            $('#home').children().remove()
            if (res.data.NewsList.list.length !== 0) {
                res.data.NewsList.list.forEach(item => {
                    let dom = `<div class="container">
                <div class="row">
                    <div class="col-md-9 col-md-offset-3"
                         style=" width: 48%;background: #ffffff;padding: 0;">
                        <div class="col-md-6" style="padding: 0;">
                            <img style="width: 100%;height: auto" class="fa fa-bar-chart"
                                 src="images/index/272-194-22.jpg">
                        </div>
                        <div class=" col-md-6 text-left">
                            <h4 style="color: #2e6da4;margin-bottom: 10px;margin-top: 6%">${item.title}</h4>
                            <div style="color: #8f8f8e;margin-bottom: 10px; overflow: hidden;  text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3; -webkit-box-orient: vertical;
">
                               ${item.content.replace(/<[^<>]+>/g, '')}</div>
                            <span style="color: #2e6da4">查看详情</span>
                            <p style="color: #8f8f8e"><span class="glyphicon glyphicon-time"></span>2019/7/12</p>
                        </div>
                    </div>
                </div>
            </div>`
                    $('#home').append(dom)
                })
                $('#pages').show()
            } else if (res.data.NewsList.list.length === 0) {
                let dom = `<p class="text-center" style="color: #2e6da4;font-size: 1.5rem">暂无~</p>`
                $('#home').append(dom)
                $('#pages').hide()
            }


        }
    })


}
