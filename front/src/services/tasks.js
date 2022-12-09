import { api } from 'src/boot/axios'

export function getAllTasks() {
  return api.get('/tasks')
}

export function updateTask(id, data) {
  return api.put(`/tasks/${id}`, data)
}

export function createTask(data) {
  console.log(data)
  return api.post('/tasks', data)
}

export function getSingleTask(id) {
  return api.get(`/tasks/${id}`)
}

export function deleteTask(id) {
  return api.delete(`/tasks/${id}`)
}
