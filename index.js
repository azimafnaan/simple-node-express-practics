const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
    res.send('Wow, I am Excited to How Run learn Node and Express ');
});



const users = [
    { id: 0, name: "Sabana", email: "sabana@gmail.com", phone: "0145656456", user: "faltu" },
    { id: 1, name: "Sabnoor", email: "sabnoor@gmail.com", phone: "0145456456" },
    { id: 2, name: "Purnima", email: "purnima@gmail.com", phone: "0343656456" },
    { id: 3, name: "Pori Moni", email: "porimoni@gmail.com", phone: "0145656111" }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

})

// app.METHOD

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting The Post', req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'banana', 'orange'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("Yummy Yummy Falzi Am")
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)

})


app.listen(port, () => {
    console.log('listening to port', port);
});