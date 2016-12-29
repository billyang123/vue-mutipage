export function formatTime(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}
export function getParams(obj){
	let arr = [];
	for (index in obj) {
		if(typeof(obj[index]) == "object"){
			obj[index] = JSON.stringify(obj[index])
		}
		arr.push(index+"="+obj[index])
	}
	return arr.join("&");
}
export function ajax(_this,options){
  var _callback = (response) => {
    let status = response.body.status;
    if(status == 0){
        options.success && options.success(response)
    }else{
        if(status == -2){
          $MsgBox.alert(response.body.msg,"提示",{
            confirmButtonText: '确定',
            callback: action => {
              _this.$router.push("/login");
            }
          })
        }else{
          $MsgBox.alert(response.body.msg)
        }
        options.error && options.error(response)
    }
    options.complete && options.complete(response)
  }
  var _err = (response) => {
    // error callback
  }
  if(options.type=="post"){
   _this.$http.post(options.url, options.data,{emulateJSON: true,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(_callback,_err);
  }else {
    let arr = [];
    let _url = options.url;
    if(options.data){
    	for (var index in options.data) {
	      arr.push(index+"="+options.data[index]);
	    }
    }
    if(arr.length > 0){
      _url+= "?"+arr.join("&");
    }
    _this.$http.get(_url).then(_callback,_err);
  }
}

