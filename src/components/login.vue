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
			<Button type="success" @click="login()" style="width: 300px" >登录</Button>
		</Col>
	</Row>
	</div>
	
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				'username':'',
				'userpwd':''
			}
		},
		mounted(){
			console.log(this.username);
		},
		methods:{
			login:function(){
				alert(123);
				axios.post('/',{
					username:this.username,
					userpwd:this.userpwd
				})
				.then(function(response){
					console.log(response);
				})
				.cath(function(error){
					console.log(error);
				})
			}
		}
	};
</script>

<style>
	
</style>