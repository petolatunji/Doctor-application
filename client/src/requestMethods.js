import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmJhNmI5NDQ0MTk3MWVlOTI0MzA0ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODAxMjMzOCwiZXhwIjoxNjY4MjcxNTM4fQ.AXCfkcaVD5B1SX01h5rVq9A350CXAvRyBuqPsZ5JbHg'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
})
