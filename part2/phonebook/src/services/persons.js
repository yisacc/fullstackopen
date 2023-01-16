import axios from 'axios'

//local
// const baseUrl = 'http://localhost:3001/api/persons'
//prod
const baseUrl = '/api/persons'


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const remove=(id)=>{
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response=>response)
}
const add=(newObject)=>{
  const request = axios.post(`${baseUrl}`,newObject)
  return request.then(response=>response.data)
}
const update=(id, newObject)=>{
  const request = axios.put(`${baseUrl}/${id}`,newObject)
  return request.then(response => response.data)
}

export default { getAll,remove,update,add }