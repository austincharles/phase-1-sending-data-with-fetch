// Add your code here
function submitData(name, email) {
    fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: 'Steve',
            email: 'steve@steve.com',
        })
    })
        .then(resp => resp.json)
        .then(stringify())
}