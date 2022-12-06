// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '93878baa90msh8d5acb9a37348e0p14913ajsn0c9c313933e6',
// 		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=tomato%20soup', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response[0]))
// 	.catch(err => console.error(err));



const form = document.getElementById('myForm');


const loadApi = (e) => {

    e.preventDefault();
    const dish = document.forms['myForm']['dish'].value;


    const options = {
        	method: 'GET',
        	headers: {
        		'X-RapidAPI-Key': '93878baa90msh8d5acb9a37348e0p14913ajsn0c9c313933e6',
        		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        	}
    };
        
        fetch('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=tomato%20soup', options)
    	.then(response => response.json())
    	.then(response => console.log(response[0]))
    	.catch(err => console.error(err));




};


form.addEventListener
