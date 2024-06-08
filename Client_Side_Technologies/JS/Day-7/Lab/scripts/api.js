let request = new XMLHttpRequest()
request.open('GET', 'https://jsonplaceholder.typicode.com/posts')
request.send()
request.addEventListener('load', function () {
    if (request.status === 200) { 
        const data = JSON.parse(request.responseText)
        for (let i = 0; i < 10; i++) {
            console.table(data[i])
        }
    }
})