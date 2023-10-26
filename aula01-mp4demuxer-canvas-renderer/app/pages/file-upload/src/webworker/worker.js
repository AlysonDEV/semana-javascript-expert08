onmessage = ({ data }) => {
  console.log('recebido!!', data)
  self.postMessage('her from worker!!')
}