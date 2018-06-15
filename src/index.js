const axios = require('axios')
const Input = require('prompt-input')
const lodash = require('lodash')
const {get} = lodash

const http = axios.create()

const makeRequest = (slug) => {
  const reqUrl = `https://egghead.io/api/v1/series/${slug}?load_lessons=true`
  
  http.get(reqUrl)
    .then(({data}) => {
      console.log(get(data, 'title'))
    })
    .catch(error => {
      console.log('Error!')
    })
}

const input = new Input({
  name: 'slug',
  message: 'Enter course slug:'
})

input.ask(slug => {
  makeRequest(slug)
})