let myButton = document.getElementById("submitButton")
myButton.addEventListener("click",onClick)

db = firebase.database().ref()// code code code code code code code code code code

function onClick(event){

  event.preventDefault();
  let value = document.getElementById("text") 
  let valueText = value.value
  let url = "https://www.songsterr.com/a/ra/songs.json?pattern=" + valueText;

  fetch(url)
      .then(function(response){
          //console.log(response);
          return response.json();
      })
      .then(function(myJson){

          console.log(myJson)
          // TODO: Add the myJson (NOTE: It is an array, figure out how to parse it) 
          // and send to the DB
         let i = Math.floor(Math.random() * myJson.length)
         let object = {
           song: myJson[i].title,
           artist: myJson[i].artist.name
          }
          console.log(object)
          db.push(object);
          // TODO: add to DB the variable: object
      })
    

}

db.on("child_added",addMessage);

function addMessage(data){
  // TODO: Figure out how to display the newly added song (add to HTML using the DOM)
  let row = data.val();
  let song1 = row.song;
  let artist1 = row.artist;

  let div = document.querySelector("#database");
  let p = document.createElement('p');
  p.innerText = artist1 + ': ' + song1;
  div.appendChild(p);
  console.log("i ran")
}
