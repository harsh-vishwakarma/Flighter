// Js code goes here
let  initOrigin = ['Bombay', 'Goa']
let initDest = [ 'Delhi', 'Chennai']
let fligthList = [...window.flightList];
// console.log(fligthList)  
document.getElementById("addBtn").addEventListener("click", onClick);
document.getElementById("sortPrice").addEventListener("click", toggleSortPrice);
document.getElementById("sortRating").addEventListener("click", toggleSortRating);

function onClick(){
  let  name = document.getElementById('name').value
  let  origin = document.getElementById('origin').value
  let  destination = document.getElementById('destination').value
  let  price = Number(document.getElementById('price').value)
  let  rating = Number(document.getElementById('rating').value)
  console.log( name, origin)
  if(name == '' || origin === '' || destination === '' || price === '' || rating === '' ){
    console.log('empty fields')
    document.getElementById('error').classList.remove('dn')
  } else {
    console.log('adding fields')
    flightList.push({ name, origin, destination, price, rating })
    updateFlightList();
    
    let originFilter = `<li class="padL10">${origin}</li>`
    let destinationFilter = `<li class="padL10">${destination}</li>`
    originExist = initOrigin.find(e => e === origin)
    destinationExist = initDest.find(e => e === destination)
    console.log('originExist:' + originExist, 'destinationExist:' + destinationExist)
    if(!originExist){
      initOrigin.push(origin)
      document.getElementById('originFilter').innerHTML += originFilter;
    }
    
    if(!destinationExist){
      initDest.push(destination)
      document.getElementById('destFilter').innerHTML += destinationFilter;
    }
    
    document.getElementById('name').value = ''
    document.getElementById('origin').value = ''
    document.getElementById('destination').value = ''
    document.getElementById('price').value = ''
    document.getElementById('rating').value = ''

  }

}

function updateFlightList(){
  document.getElementById('flightItems').innerHTML = ''
  flightList.forEach(element => {
    let field = 
    ` <ul class="card">
              <li class="padT5">Flight Name: ${element.name}</li>
              <li class="padT5">${element.origin} to ${element.destination}</li>
              <li class="padT5">Rating: ${element.rating}*</li>
              <li class="padT5">Price: Rs.${element.price}</li>
            </ul>`            
    document.getElementById('flightItems').innerHTML += field
  });
}



function toggleSortPrice(){
  let currentOrder = document.getElementById('sortPrice').getAttribute('data-sort');
  if(currentOrder === 'asc' && document.getElementById('sortPrice').innerHTML == 'Sort by Price' ){
    document.getElementById('sortPrice').innerHTML = 'Sort by Price (asc)' ;
    sortByProperty('asc', 'price');
  }else if(currentOrder === 'asc' && document.getElementById('sortPrice').innerHTML == 'Sort by Price (asc)'){
    document.getElementById('sortPrice').innerHTML = 'Sort by Price (desc)'     
    document.getElementById('sortPrice').setAttribute("data-sort", "desc") ;
    sortByProperty('desc', 'price');
  } else{
    document.getElementById('sortPrice').innerHTML = 'Sort by Price (asc)' ;  
    document.getElementById('sortPrice').setAttribute("data-sort", "asc") ;
    sortByProperty('asc', 'price');
  }  
  updateFlightList()
} 



const sortByProperty = (order, prop)=>{
  console.log(flightList)
  flightList.sort((a, b)=>{
    console.log('order by: '+order, a[prop], b[prop])
    if(order === 'asc'){
      return a[prop] - b[prop]
    } else {
      return b[prop] - a[prop]  
    }
  })
  console.log(flightList);
}


function toggleSortRating(){
  let currentOrder = document.getElementById('sortRating').getAttribute('data-sort')
  if(currentOrder === 'asc' && document.getElementById('sortRating').innerHTML == 'Sort by Rating' ){
    document.getElementById('sortRating').innerHTML = 'Sort by Rating (asc)' ;
    sortByProperty('asc', 'rating');
  }else if(currentOrder === 'asc' && document.getElementById('sortRating').innerHTML == 'Sort by Rating (asc)'){
    document.getElementById('sortRating').innerHTML = 'Sort by Rating (desc)'     
    document.getElementById('sortRating').setAttribute("data-sort", "desc") ;
    sortByProperty('desc', 'rating');
  } else{
    document.getElementById('sortRating').innerHTML = 'Sort by Rating (asc)' ;  
    document.getElementById('sortRating').setAttribute("data-sort", "asc") ;
    sortByProperty('asc', 'rating');
  }
  updateFlightList()

}