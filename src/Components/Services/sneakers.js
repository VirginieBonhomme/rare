// import { api } from '../Services/apiConfig.js'
// import axios from 'axios'

// export const getAllSneakers = async () => {
//   const resp = await axios.get('https://raregems-app.herokuapp.com/sneakers')
//   return resp.data
// }

// export const getOneSneaker = async (sneaker_id) => {
//   const resp = await api.get(`/sneakers/${sneaker_id}`)
//   return resp.data
// }

// export const createSneaker = async (sneakerData) => {
//   const resp = await api.post('/sneakers', { sneaker: sneakerData })
//   return resp.data
// }

// export const updateSneaker = async (sneaker_id, sneakerData) => {
//   const resp = await api.put(`/sneakers/${sneaker_id}`, { sneaker: sneakerData })
//   return resp.data
// }

// export const deleteSneaker = async (sneaker_id) => {
//   const resp = await api.delete(`/sneakers/${sneaker_id}`)
//   return resp.data
// }