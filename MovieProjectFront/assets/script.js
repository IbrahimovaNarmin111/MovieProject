let movies=document.querySelector(".movies")
fetch("https://api.tvmaze.com/shows")
.then(res=>res.json())
.then(data=>
{
    for(let i=0;i<48;i++){
        movies.innerHTML += `
        <div style="padding:10px;" class="col-3">
        <div style="margin-right:5px" class="card" style="width: 18rem;">
        <a href="details.html?id=${data[i].id}">
  <img src="${data[i].image.medium}" class="card-img-top" alt="...">
  </a>
  <div class="card-body">
    <h5 class="card-title">${data[i].name}</h5>
    <p class="card-text">Rating: ${data[i].rating.average}</p>
    <a href="details.html?id=${data[i].id}" class="btn btn-primary">Go details</a>
  </div>
</div>
</div>
        `
    }

}
)
var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleAutoplaying'), {
    interval: 1900, 
    wrap: true,     
    
  });

  
  document.getElementById('carousel-prev').addEventListener('click', function () {
    myCarousel.prev();
  });

  document.getElementById('carousel-next').addEventListener('click', function () {
    myCarousel.next();
  });