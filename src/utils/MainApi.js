// // /////////// Auth.js

// export const BASE_URL = 'https://api.movies-explorer-api.nomoredomainsicu.ru';

// function checkStatus(res) {
//   if (res.ok) {
//     return res.json();
//   }
//   return Promise.reject(`Ошибка ${res.status}`);
// }

// export const register = (name, email, password) => {
//   return fetch(`${BASE_URL}/signup`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(name, email, password)
//   })
//     .then(checkStatus);
// }

// export const authorize = (email, password) => {
//   return fetch(`${BASE_URL}/signin`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email, password})
//   })
//   .then(checkStatus)
//     .then((data) => {
//       if (data.token) {
//         localStorage.setItem('token', data.token);
//         return data;
//       }
//     })
//   }

// export const tokenCheck = (token) => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//     },
//   })
//     .then(checkStatus);
// }







// ///////App.js
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
  
//     getInfo(token) {
//       return fetch(`${this._url}/users/me`, {
//         headers: {
//           //   authorization: this._authorization,
//           //   'Content-Type': 'application/json'
//           // }
//           "Authorization": `Bearer ${token}`
//         }
//       })
//         .then(this._checkResponse)
//     }
//     getCard(token) {
//       return fetch(`${this._url}/cards`, {
//         headers: {
//           "Authorization": `Bearer ${token}`
//         }
//       })
//         .then(this._checkResponse)
//     }
//     setUserInfo(data, token) {
//       return fetch(`${this._url}/users/me`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           name: data.firstname,
//           about: data.description,
//         })
//       })
//         .then(this._checkResponse)
//     }
//     setUserAvatar(data, token) {
//       return fetch(`${this._url}/users/me/avatar`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           avatar: data.avatar,
//         })
//       })
//         .then(this._checkResponse)
//     }
//     addCard(data, token) {
//       return fetch(`${this._url}/cards`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           name: data.title,
//           link: data.link,
//         })
//       })
//         .then(this._checkResponse)
//     }
//     addLike(cardId, token) {
//       return fetch(`${this._url}/cards/${cardId}/likes`, {
//         method: 'PUT',
//         headers: {
//           // 'Content-Type': 'application/json',
//           "Authorization": `Bearer ${token}`
//         }
//       })
//         .then(this._checkResponse)
//     }
//     deleteLike(cardId, token) {
//       return fetch(`${this._url}/cards/${cardId}/likes`, {
//         method: 'DELETE',
//         headers: {
//           // 'Content-Type': 'application/json',
//           "Authorization": `Bearer ${token}`
//         }
//       })
//         .then(this._checkResponse)
//     }
//     changeLikeCardStatus(cardId, isLiked, token) {
//       if (isLiked) {
//         return this.addLike(cardId, token);
//       } else if (!isLiked) {
//         return this.deleteLike(cardId, token);
//       }
//     }
  
  
//     deleteCard(cardId, token) {
//       return fetch(`${this._url}/cards/${cardId}`, {
//         method: 'DELETE',
//         headers: {
//           // 'Content-Type': 'application/json',
//           "Authorization": `Bearer ${token}`
//         }
//       })
//         .then(this._checkResponse)
  
//     }
//   }
  
  
//   const api = new Api({
//     baseUrl: 'https://api.mesto.practicum15.nomoredomainsicu.ru',
//   });
  
//   export default api

