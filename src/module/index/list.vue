<template>
  <div id="list" class="ybb">
    i am list
    Contact GitHub API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Status Help
	<p class="yb">{{date | formatTime("yyyy-MM-dd hh:mm:ss")}}</p>
	{{5000|discount(50)}}asdasd

  </div>
</template>

<script>
import {ajax} from '../../lib/utils';
import IPC from '../../lib/api'
export default {
  name: 'list',
  data(){
  	return {
  		date:(new Date()).getTime()
  	}
  },
  created(){
  	this.test()
  },
  methods:{
  	test(){
  		ajax(this,{
  			url:IPC.test,
  			success:function(res){
  				console.log(res)
  			}
  		})
  	}
  }
}
</script>

<style lang="less">
#list {
    display: flex;
    .yb {
    	color: red;
    }
}
</style>