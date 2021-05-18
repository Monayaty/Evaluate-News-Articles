import { checkUrl } from './checkURL'

const postMyDataFun = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  try {
      return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const handleSubmit = async () => {
  const articleUrl = document.getElementById('article-url').value
  if (checkURL(articleUrl)) {
    const myData = await postMyDataFun('http://localhost:8081/add-url', {
        articleUrl
    })
    document.getElementById('text').textContent = myData.text
    document.getElementById('agreement').textContent = myData.agreement
    document.getElementById('confidence').textContent = myData.confidence
    document.getElementById('score_tag').textContent = myData.score_tag
    document.getElementById('subjectivity').textContent = myData.subjectivity
    document.getElementById('irony').textContent = myData.irony
  } else {
    alert('Enter a valid URL')
  }
}

export default handleSubmit