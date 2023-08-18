const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// const usersEndpoint = "../json/user.json"
let n = document.querySelector('.name');
const b = document.querySelector('#blog');
const l = document.querySelector('.location');

const displayUser = async ( username ) => {
  n.textContent = 'cargando...';
  let response,data;
  try{
     response = await fetch(`${usersEndpoint}/${username}`);
  }catch(error){
    console.warn("Hubo un error");
  }

  try {
    
     data = await response.json();
  } catch (error) {
    console.warn("Hubo un error");
  }

  n.textContent = `${data.name}`;
  b.textContent = `${data.blog}`;
  l.textContent = `${data.location}`;
}

const handleError =  ( err ) => {
  console.log('OH NO!');
  let n = document.querySelector('.name');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);