import { api } from '../Services/apiConfig'

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { authentication: loginData })
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const signupUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData })
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken')
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify')
    return resp.data
  }
  return false
}

export const getAllUsers = async () => {
  const resp = await api.get('/users')
  return resp.data
}

export const getOneUser = async (user_id) => {
  const resp = await api.get(`/users/${user_id}`)
  return resp.data
}

export const updateUser = async (user_id, updateData) => {
  const resp = await api.put(`/users/${user_id}`, { user: updateData })
  return resp.data
}

export const deleteUser = async (user_id) => {
  const resp = await api.delete(`/users/${user_id}`)
  return resp.data
}