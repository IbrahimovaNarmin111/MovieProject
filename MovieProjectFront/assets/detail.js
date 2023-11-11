let details=document.querySelector(".details");
let id=document.location.search.substring(4);
fetch("https://api.tvmaze.com/shows/"+ id)
.then(res=>res.json())
.then(data=>
{
    
        details.innerHTML += `
        <div class="container">
    <div class="row">
        <div style="padding:10px;margin-top:20px" class="col-6">
        <div class="card" style="width: 18rem;">
  <img src="${data.image.medium}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    
   </div>
   </div>
  </div>
  <div style="padding:5px;margin-top:20px;" class="col-6">
  <table class="table table-success table-striped">
  <tbody>
  <tr>
  <th class="sp-th">Summary</th>
  <td>:</td>
  <td>${data.summary}</td>
  </tr>
  <tr>
  <th class="sp-th">Premiered</th>
  <td>:</td>
  <td>${data.premiered}</td>
  </tr>
  <tr>
  <th class="sp-th">Rating</th>
  <td>:</td>
  <td>${data.rating.average}</td>
  </tr>
  <tr>
  <th class="sp-th">Genres</th>
  <td>:</td>
  <td>${data.genres}</td>
  </tr>
  <tr>
  <th class="sp-th">Status</th>
  <td>:</td>
  <td>${data.status}</td>
  </tr>
  <tr>
  <th class="sp-th">Runtime</th>
  <td>:</td>
  <td>${data.runtime} min</td>
  </tr>
  <tr>
  <th class="sp-th">Language</th>
  <td>:</td>
  <td>${data.language}</td>
  </tr>
  
</table>
  
  
  
  
  
  
  

</div>

</div>
        `
    }


)