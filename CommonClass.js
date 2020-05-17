/** Created by mac on 2020/5/17. ...**/

function requestMethod(par1,par2,par3,callback) {
    //第一步：创建请求对旬xhr
    var xhr = new XMLHttpRequest();
    //第二步：建立与服务端的连接（get/post）
    xhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+ par2);
    //设置头信息，让数据以表单的形式传递给服务器
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    //第三步：发送请求(为异步请求)
    xhr.send(par3);

    xhr.onreadystatechange = function (){
        //readyState== 4代表ajax数据请求完成；status ==200 ==200代表数据成功返回
        if (xhr.readyState == 4 && xhr.status == 200) {
            //responseText中包含了服务端返回的数据
            var res = JSON.parse(xhr.responseText);
            var str = res.data;

            callback(str);
        }//第四步：接收服务端返回的数据
    }
}