const axios = require('axios')
const Input = require('prompt-input')
const lodash = require('lodash')
const fs = require('fs-extra')
const {get, reduce} = lodash

const http = axios.create()

async function createDirectory (dir) {
  try {
    await fs.ensureDir(`output/${dir}`)
    await fs.ensureDir(`output/${dir}/images`)
    await fs.ensureDir(`output/${dir}/lessons`)
    console.log('Created directory')
  } catch (err) {
    console.error(err)
  }
}

async function createReadme (slug, title, image, description, instructor, path) {
  const readme = `# ${title}\n\n![Course Image](${image})\n\nAsciicasts for [${instructor.full_name}](${instructor.instructor_url})'s course, ${title} on [egghead.io](https://egghead.io/${path})\n\n## Description\n${description}\n\n## Library Version\n`
  
  const file = `output/${slug}/README.md`

  try {
    await fs.outputFile(file, readme)
  } catch (err) {
    console.error('Error creating Readme!')
  }
}

async function createSummary (slug, lessons) {
  debugger;

  const bullets = reduce(lessons, (prev, lesson) => {
    debugger;
    return `${prev}* [${lesson.title}](./lessons/${lesson.slug})\n`
  }, '')

  const summary = `# Summary\n\n${bullets}`

  try {
    await fs.outputFile(`output/${slug}/SUMMARY.md`, summary)
  } catch (err) {
    console.error('Error creating Summary!')
  }
} 

const makeRequest = (slug) => {
  const reqUrl = `https://egghead.io/api/v1/series/${slug}?load_lessons=true`
  
  http.get(reqUrl)
    .then(({data}) => {
      const {slug, title, author, description, square_cover_url, instructor, path, lessons} = data
      console.log(`Course Found! ${get(data, 'title')}`)
      
      createDirectory(slug)
      createReadme(slug, title, square_cover_url, description, instructor, path)
      createSummary(slug, lessons)

    })
    .catch(error => {
      console.log('Error!', error)
    })
}

const input = new Input({
  name: 'slug',
  message: 'Enter course slug:'
})

input.ask(slug => {
  makeRequest(slug)
})