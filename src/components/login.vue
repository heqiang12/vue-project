<template>
	<div class="login-main">
	<Row>
		<Col span="8" offset="8"><h1>后台登录</h1></Col>
	</Row>
	<br>
	<Row>
		<Col span="8" offset="8">
			<Input v-model="username" size="large" type="text" placeholder="请输入用户名..." style="width: 300px" />
		</Col>
	</Row>
	<br>
	<Row>
		<Col span="8" offset="8">
			<Input v-model="userpwd" size="large" type="password" placeholder="请输入密码..." style="width: 300px" />
		</Col>
	</Row>
	<br/>
	<Row>
		<Col span="8" offset="8">
			<Input v-model="verify" size="large" type="text" placeholder="请输入密码..." class="verify-input" />
			<div class="verify">
			<img src="http://case.backend.youmu/api/login/verify" style="height: 36px" alt="" onclick="this.src='http://case.backend.youmu/api/login/verify'">	
			</div>
		</Col>
	</Row>
	<br/>
	<Row>
		<Col span="8" offset="8">
			<Button type="success" @click="login()" style="width: 300px" >登录</Button>
		</Col>
	</Row>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				'username':'',
				'userpwd':'',
				'verify':''
			}
		},
		mounted(){
			console.log(this.username);
		},
		methods:{
			
			login:function(){
				var _this = this;
				this.$axios({
				  method: 'post',
				  url: 'http://case.backend.youmu/api/login/login',
				  data: {
				    username:this.username,
					userpwd:this.userpwd,
					verify:this.verify
				  }, 
				}).then(function(response){
					if(response.data.status == 1){
						_this.$router.push('/layout');	
					}else{
						_this.$Message.warning('用户名或密码错误');
					}
				})
				.catch(function(error){
					_this.$Message.warning('This is a warning tip');
				});
			}
		}
	};
</script>

<style>
	.verify-input{
		width: 200px;width: 184px;
	    float: left;
	    margin-left: 170px;
	}
	.verify{
		float: left;
	    margin-left: 6px;
	}
	.verify img{
		height: 36px;
    	width: 110px;
	}
</style>