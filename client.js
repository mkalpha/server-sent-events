const eventSource = new EventSource('http://localhost:3000/time', )


const updateMessage = (message) => {
    const list = document.getElementById('messages')
    const item = document.createElement('p')
    item.textContent = message
    list.appendChild(item)
} 

eventSource.onmessage = (event) => {
    updateMessage(event.data)
}

eventSource.onerror = () => {
    updateMessage('Server Closed Connection')
    eventSource.close()
}