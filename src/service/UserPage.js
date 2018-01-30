import UtilitiesService from "./UtilitiesService";
class UserPage
{
    async AddRestaurant(restaurantName,restaurantInfo,area, city, state,contact,address,username ) {
	
	
		let result = await fetch(UtilitiesService.baseUrl() + 'user/addrestaurant', {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                "restaurantName": restaurantName,
                "restaurantInfo": restaurantInfo,
                "area": area,
                "city": city,
                "state": state,
                "contact":contact,
				"address": address,
				"username":username
			
			})
		});
		return result.json();
	}
	async updateRestaurant(restaurantName,restaurantInfo,area, city, state,contact,address,username ) {
	
	
		let result = await fetch(UtilitiesService.baseUrl() + 'user/updaterestaurant', {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                "restaurantName": restaurantName,
                "restaurantInfo": restaurantInfo,
                "area": area,
                "city": city,
                "state": state,
                "contact":contact,
				"address": address,
				"username":username
			
			})
		});
		return result.json();
	}
	async getRestaurant(username ) {
	
	
		let result = await fetch(UtilitiesService.baseUrl() + 'user/getrestaurant', {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                
				"username":username
			
			})
		});
		return result.json();
	}



}

export default new UserPage();
