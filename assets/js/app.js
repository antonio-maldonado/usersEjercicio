const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

//Se le cambió el nombre a las variables $n,$b,$l por -> n,b,l
let n = document.querySelector('.name'); //Se cambio el selector de tipo por el selector de clase
const b = document.querySelector('#blog');
const l = document.querySelector('.location');

//Se cambió function por una variable para evitar el hoisting
const displayUser = async ( username ) => {
  n.textContent += 'cargando...'; //Concatenamos el contenido para no perder lo escrito previamente
  let response,data;
  try{
     response = await fetch(`${usersEndpoint}/${username}`);
  }catch(error){
    handleError(error); //Si hay error ejecutamos la funcion error
  }

  try {
     data = await response.json();
  } catch (error) {
    handleError(error); //Si hay error ejecutamos la funcion error
  }

  n.textContent += `${data.name}`; //Concatenamos el contenido para no perder lo escrito previamente
  b.textContent += `${data.blog}`;//Concatenamos el contenido para no perder lo escrito previamente
  l.textContent += `${data.location}`;//Concatenamos el contenido para no perder lo escrito previamente
}

//Se cambió function por una variable para evitar el hoisting
const handleError =  ( err ) => {
  console.log('OH NO!');
  //n = document.querySelector('.name');  //Se eliminó ya que no era necesario porque es variable global
  console.log(err);
  n.textContent += `Algo salió mal: ${err}`//Concatenamos el contenido para no perder lo escrito previamente
}

//Se eliminó catch porque se está usando async-await con try-catch
displayUser('stolinski');