var domain = 'http://120.27.144.150:10086';
var isDev = /localhost/.test(window.location.host)?true:false;
var Prefix = isDev?"/api":"";
var api = {
	test:"/manage/fundraise/getFunDonationList"
};
for(var index in api){
	api[index] = Prefix+api[index]
}
export default api
