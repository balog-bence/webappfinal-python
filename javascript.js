var url = "http://127.0.0.1:5000/view";
var id = "view";

async function generator(url, id) {
    var request = await new XMLHttpRequest()

request.open('GET', url, true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
view(data, request, id);

}

request.send()
  }

  function view(data, request, id){
      if(id == "view"){
    if (request.status >= 200 && request.status < 400) {
         data.forEach((query) => {
          console.log(request.status);
          var div = document.createElement("tr");
            var mainContainer = document.getElementById(id);
          div.innerHTML = "<td>"+query.id+"</td><td><input id='event"+query.id+"' placeholder='"+query.event+"' value='"+query.event+"'/></td><td><input id='date"+query.id+"' placeholder='"+query.date+"' value='"+query.date+"'/></td><td><input id='city"+query.id+"' placeholder='"+query.city+"' value='"+query.city+"'/><td><input id='venue"+query.id+"' placeholder='"+query.venue+"' value='"+query.venue+"'/><td><input id='ticket"+query.id+"' placeholder='"+query.ticket+"' value='"+query.ticket+"'/></td>"+"<button onclick = 'deleterecord("+query.id+")' type = 'submit' value='Submit'>Delete</button>"+"<button onclick = 'update("+query.id+")'>Update</button>" ;
          mainContainer.appendChild(div)
        })
      } else {
        console.log('error')
      }}
  }

async function generate_html(){
await generator(url, id);
}

function deleterecord(id){
  const data = JSON.stringify({
    id: parseInt(id)
  });
  
  navigator.sendBeacon('http://127.0.0.1:5000/deleterecord/', data);
  console.log(data);
}
function update(id){
  const data = JSON.stringify({
    id: id,
    event: document.getElementById("event"+id).value,
    date: document.getElementById("date"+id).value,
    city: document.getElementById("city"+id).value,
    venue: document.getElementById("venue"+id).value,
    ticket: document.getElementById("ticekt"+id).value,

  })

  navigator.sendBeacon('http://127.0.0.1:5000/updatedetails/' data);
  console.log(data);

}
  
generate_html();
