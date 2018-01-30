import UtilitiesService from "./UtilitiesService";
class Userlogin {

	async SignupUser(email,username,password,mobile,location) {
	
	
		let result = await fetch(UtilitiesService.baseUrl() + 'user/signup', {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				
				"email": email,
				"name": password,
				"username": username,
				"password": password,		
				"mobile": mobile,
				"location": location
			})
		});
		return result.json();
	}
	async LoginUser(username,password) {
	
	
		let result = await fetch(UtilitiesService.baseUrl() + 'user/login', {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				
				"username": username,
				"password": password,
				
			})
		});
		return result.json();
	}


}

export default new Userlogin();