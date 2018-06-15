const axios = require('axios')
const Input = require('prompt-input')
const lodash = require('lodash')
const fs = require('fs-extra')
const {get} = lodash

const http = axios.create()

async function createDirectory (dir) {
  try {
    await fs.ensureDir(`output/${dir}`)
    console.log('Created directory')
  } catch (err) {
    console.error(err)
  }
}

const makeRequest = (slug) => {
  const reqUrl = `https://egghead.io/api/v1/series/${slug}?load_lessons=true`
  
  http.get(reqUrl)
    .then(({data}) => {
      console.log(`Course Found! ${get(data, 'title')}`)
      createDirectory(get(data, 'slug')) 
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