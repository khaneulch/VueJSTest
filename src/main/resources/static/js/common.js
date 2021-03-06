import $ from './jquery';

var Common = {
	fetch : function( url, param, _callBack) {	
		
		var options = {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json;charset=UTF-8'
			},
			body: typeof param === 'object' ? JSON.stringify(param) : JSON.stringify({data : param})
		};
		

		fetch(url, options)
			.then( function( response) { //=> {
				if( response && response.ok) {
					response.text().then( function( data) { //=> {
						var obj = data ? JSON.parse(data) : {data : true}; 
						
						if( $.isFunction( _callBack)) {
							_callBack( obj);
						}
					})
				}
			}
		);
	}
};

export default Common; 

// Vue.filter('currency', function (num) {
//     if ( isNaN(num)) num = 0;
//     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// });