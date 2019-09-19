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
        success: function (res) {
            console.log(res)
            //banner图
            let bandom = `
            <img style="width: 100%" src=${res.data.bannerList[0].picUrl}>
            `
            $('#join').append(bandom)


            //为何加入悦为
            let weihejoindom = `
                 <div class="col-md-3">
            <p style="padding-left: 30%;font-size: 2rem;color: #2e6da4;font-weight: bold;padding-top: 10%">
            ${res.data.reasonList[0].title}
            </p>
        </div>
        <div class="col-md-9">
            <div style="font-size: 0.9rem;line-height: 2rem">
                  ${res.data.reasonList[0].content}
            </div>
        </div>
            `
            $('#whyJoin').append(weihejoindom)


            // 我们的业务
            // res.data.businessList.forEach(item=>{
            //     let yewudom = `
            //        <li>
            //     <img src=${item.picUrl} alt=" " class="img-responsive"/>
            // </li>
            // `
            //     $('#flexiselDemo2').append(yewudom)
            // })


            // <div class="col-sm-3" style="">
            //     <img src="images/Join/08.png">
            //     <p style="margin: 10px">
            //     店长
            //     </p>
            //     <span>MANAGER</span>
            //     </div>


            //招聘岗位
           let arr= res.data.recruitList
            let brr=arr.splice(0,4)
            arr.forEach(item=>{
                let dom=`
               <div class="col-sm-3" style="">
                <img src=${item.picUrl}>
                <p style="margin: 10px">
                ${item.title}
                </p>
                  <span>  ${item.content}</span>
                </div>
                `
                $('#zhaopingtwo').append(dom)
            })
            brr.forEach(item=>{
                let dom=`
               <div class="col-sm-3" style="">
                  
                <img src=${item.picUrl}>
                <p style="margin: 10px">
                ${item.title}
                </p>
              <span>  ${item.content}</span>
            
                </div>
                `
                $('#zhaopingOne').append(dom)
            })
        }
    })
}


