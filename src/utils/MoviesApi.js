// class Api {
//     constructor(options) {
//       this._url = options.baseUrl
//     }
//     _checkResponse(res) {
//       if (res.ok) {
//         return res.json();
//       }
//       return Promise.reject(`Что-то пошло не так: ${res.status}`);
//     }
  
//     // getInfo(token) {
//     //   return fetch(`${this._url}/users/me`, {
//     //     headers: {
//     //       //   authorization: this._authorization,
//     //       //   'Content-Type': 'application/json'
//     //       // }
//     //       "Authorization": `Bearer ${token}`
//     //     }
//     //   })
//     //     .then(this._checkResponse)
//     // }
//     getFilm(token) {
//       return fetch(`${this._url}/cards`, {
//         headers: {
//           "Authorization": `Bearer ${token}`
//         }
//       })
//         .then(this._checkResponse)
//     }

//   }
  
  
//   const api = new Api({
//     baseUrl: 'https://api.nomoreparties.co/',

//   });
  
//   export default api