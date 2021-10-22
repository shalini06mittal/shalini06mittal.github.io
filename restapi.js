// function  getCustomers()
// {
//     var httpRequest = new XMLHttpRequest(); 
// 	if (!httpRequest) { 
//         alert('Giving up :( Cannot create an XMLHTTP instance'); 
//         return false; 
//     } 
// 	httpRequest.onreadystatechange = alertContents; 
//     httpRequest.open('GET', 'http://localhost:3000/customers'); 
// 	httpRequest.send();  
//     function alertContents() { 
//         if (httpRequest.readyState === XMLHttpRequest.DONE){ 
//             if (httpRequest.status === 200) { 	
//                 var customers = httpRequest.responseText;
//                 console.log(typeof(customers));
//                 customers = JSON.parse(customers);
//                 console.log(typeof(customers));
//                 var parent = document.getElementById('details');
//                 for(var customer of customers){
//                     var ele = document.createElement('p');
//                     var text = document.createTextNode(`Name  ${customer.username}`)
//                     ele.appendChild(text);
//                     parent.appendChild(ele);
//                 }
                
//             }
//             else { 
//                 alert('There was a problem with the request.'); 
//             }
//         }
//     } 
// }

function  getCustomers()
{
   fetch('http://localhost:3000/customers')
   .then(response =>response.json())
   .then(customers => {
        console.log(typeof(customers));
        var parent = document.getElementById('details');
        for(var customer of customers){
            var c1 = document.createElement('div');
            var ele = document.createElement('p');
            var text = document.createTextNode(`Name  ${customer.username}`)
            ele.appendChild(text);
            c1.appendChild(ele)
            var ele = document.createElement('p');
            var text = document.createTextNode(`Email  ${customer.email}`)
            ele.appendChild(text);
            c1.appendChild(ele)
            var ele = document.createElement('p');
            var text = document.createTextNode(`City  ${customer.city}`)
            ele.appendChild(text);
            c1.appendChild(ele)
            parent.appendChild(c1);
        }
        
   })

}

function getCustomerById()
{
    var custid = parseInt(document.getElementById('cid').value);
    fetch('http://localhost:3000/customers/'+custid)
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
function getCustomerByCity()
{
    fetch('http://localhost:3000/customers')
   .then(response =>response.json())
   .then(customers => {
        console.log(typeof(customers));
        var city = document.getElementById('city').value;
        var parent = document.getElementById('details1');
        for(var customer of customers){
            if(customer.city === city){
                var c1 = document.createElement('div');
                var ele = document.createElement('p');
                var text = document.createTextNode(`Name  ${customer.username}`)
                ele.appendChild(text);
                c1.appendChild(ele)
                var ele = document.createElement('p');
                var text = document.createTextNode(`Email  ${customer.email}`)
                ele.appendChild(text);
                c1.appendChild(ele)
                var ele = document.createElement('p');
                var text = document.createTextNode(`City  ${customer.city}`)
                ele.appendChild(text);
                c1.appendChild(ele)
                parent.appendChild(c1);
            }
        }
        return customers;
   })

}


function register(event)
{
    event.preventDefault();
    var username = document.getElementById('username').value;
    var city = document.getElementById('city').value;
    var email = document.getElementById('email').value;
    let customer = {
        username, email, city
        }
        console.log(customer)
        fetch('http://localhost:3000/customers', {
        method: 'POST',
        body: JSON.stringify(customer),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            window.location= 'file:///Users/Shalini/Desktop/HCLWebDevWS/day5/customer.html';
        });
        
}