

// var Http={
//     post:function({url:url,data:data,success:success,fail:fail}){
//         url = 'http://127.0.0.1:8080/bs/'+url;
//         $.ajax({
//             url: url,
//             dataType: "json",
//             type: "post",
//             async:true,
//             data:data,
//             success: success,
//             error:fail
//         })
//     }
// }
function httpPost({url:url,data:data,success:success,fail:fail}){
    url = 'http://127.0.0.1:8080/bs/'+url;
	$.ajax({
        // headers:"Access-Control-Allow-Origin: *",
        url: url,
        dataType: "json",
        type: "post",
        contentType:"application/json;charset=utf-8",
        data:data,
        success: success,
        error:fail
    })

}

function httpGet({url:url,data:data,success:success,fail:fail}){
    url = 'http://127.0.0.1:8080/bs/'+url;
	$.ajax({
        url: url,
        dataType: "json",
        type: "get",
        data:data,
        success: success,
        error:fail
    })

}


