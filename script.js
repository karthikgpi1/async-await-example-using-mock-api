async function getusers(){
    const data = await fetch(`https://62d25db3afb0b03fc5a57872.mockapi.io/users`);
    const users = await data.json();
    console.log(users);
  
    users.forEach(user => createUser(user));
  }
  //-----------------------
  
    function createUser ({name, createdAt, avatar,id}) {
  const info = document.createElement("div");
  info.setAttribute("class", "container");
  
  info.innerHTML = `
  <div class ="container1">
      <div class = "user-container">
        <img class ="user" src =${avatar} width = "250px" height = "150px">
      </div>
      
      <div class = "details">
        <h4> ${name} </h4>
        <p>${createdAt}</p>
      </div>
      <div class = "id">
        <p>ID:${id}</p>
      </div>
  </div>`; 
  
  document.body.append(info);
  }
  
  getusers();