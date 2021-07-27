window.onload = function () {
    $('#show').attr('src', img1);
    $('#show1').attr('src', img2)

}
// 模板图改变
function mouldPho() {
    let bas1;
    // console.log('123')
    var reads = new FileReader();
    f = document.getElementById('file').files[0];
    console.log(f);
    reads.readAsDataURL(f);
    reads.onload = function (e) {
        // document.getElementById('show').src=this.result;
        base1 = this.result

        //监测上传的照片是否是人物
        let url = 'https://api-cn.faceplusplus.com/facepp/v3/detect';
        // let files = $('#testImg').prop('files');
        var data = {
            api_key: '2f1f4L8-B-i_A1jnRHWYdbVtmgHoOZE6',
            api_secret: '4VxMhS7XofKOVXzIupBRwTfK6GqEtt6G',
            image_base64: base1
        }
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            cache: false,
            // processData: false,
            // contentType: false,
            success(data) {
                console.log(data.faces.length)
                //data.faces 被检测出的人脸数组，具体包含内容见下文。注：如果没有检测出人脸则为空数组

                if (data.faces.length != 0) {
                    document.getElementById('show').src = base1;
                } else if (data.faces.length == 0) {
                    $.alert({
                        title: '',
                        text: '未检测到人脸,请重新选择图片！',
                        onOK: function () {
                            //点击确认
                        }
                    });
                }
            },

        })
    };
}
// 融合图改变
function fusePho() {
    let base2;
    // console.log('ronghe')
    var reads = new FileReader();
    f = document.getElementById('file1').files[0];
    console.log(f);
    // console.log(f)
    reads.readAsDataURL(f);
    reads.onload = function (e) {
        // console.log(this.result)
        // document.getElementById('show1').src=this.result;
        base2 = this.result
        console.log(base2);
        // console.log(base2)
        //监测上传的照片是否是人物
        let url = 'https://api-cn.faceplusplus.com/facepp/v3/detect';
        // let files = $('#testImg').prop('files');
        var data = {
            api_key: '2f1f4L8-B-i_A1jnRHWYdbVtmgHoOZE6',
            api_secret: '4VxMhS7XofKOVXzIupBRwTfK6GqEtt6G',
            image_base64: base2
        }
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            cache: false,
            // processData: false,
            // contentType: false,
            success(data) {
                console.log(data.faces.length)
                //data.faces 被检测出的人脸数组，具体包含内容见下文。注：如果没有检测出人脸则为空数组

                if (data.faces.length != 0) {
                    document.getElementById('show1').src = base2;
                } else if (data.faces.length == 0) {
                    alert('123')
                }
            },

        })
    };


}

// 开始融合
$('#proBtn').on('click', function () {
    var mouldPhoSrc = $('#show').attr('src')
    var fusePhoSrc = $('#show1').attr('src')
    var postData = {
        api_key: '2f1f4L8-B-i_A1jnRHWYdbVtmgHoOZE6',
        api_secret: '4VxMhS7XofKOVXzIupBRwTfK6GqEtt6G',
        template_base64: mouldPhoSrc,
        // template_rectangle:'70,80,100,100',
        merge_base64: fusePhoSrc
    }




    $.ajax({
        dataType: 'json',
        type: 'POST',
        url: 'https://api-cn.faceplusplus.com/imagepp/v1/mergeface',
        data: postData,
        success: function (response) {
            // console.log(response.result)
            if (typeof (response.error_message) == "undefined") {
                // todo: 在这里添加生成后的逻辑，response.result 为生成图的base64编码
                $('.uploadpic').attr('src', 'data:image/jpg/png;base64,' + response.result);
            } else {
                // todo: 在这里添加上传失败的逻辑
                alert('请重新上传照片23');
            }
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
            // todo: 在这里添加上传失败的逻辑
            alert('请重新上传照片');
        }
    });

})

