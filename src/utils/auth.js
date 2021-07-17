
const BASE_URL = 'https://auth.nomoreparties.co';

class Auth {
  constructor({password,email}) {
    this.password = password;
    this.email = email;
    console.log(this.email)
    
  }
  register({email,password}){
    return fetch(`${BASE_URL}/signup`, {
      method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password})
      })
      .then(result => {
        return (result)
    })
    .catch((err) => console.log(err))
  }


  login({email,password}){
    return fetch(`${BASE_URL}/signin`, {
      method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password})
      })
      .then(res => res.json().then(data =>{
        if(data.token){
          localStorage.setItem('token', data.token)
          return res;
        }
      })

    .catch((err) => console.log(err)));
   }


   getToken(token) {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => res.json())
    .then(data => data)
  }
}
const auth= new Auth({password:'',email:''})
export default auth;