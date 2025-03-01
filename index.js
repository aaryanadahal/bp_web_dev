function getRandomDog(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data)=>{
            console.log(data);
            document.querySelector("#dog-image").src = data.message;
        });
}
function getSpecificDog(){
    let breed = document.querySelector("#breed").value;
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((res) => {
      if (!res.ok) {
        alert(`we couldn't find that dog :( Please try again!`);
        return;
      }
      return res.json();
    })
    .then((data) => {
      console.log(data.message);
      document.querySelector("#dog-image").src = data.message;
    });



}

