const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const users = [
    {id:1,name:'ab',email:"ab@mail.com"},
    {id:2,name:'bb',email:"bb@mail.com"},
    {id:3,name:'cb',email:"cb@mail.com"},
    {id:4,name:'db',email:"db@mail.com"},
    {id:5,name:'eb',email:"eb@mail.com"},
]

app.get('/', (req, res) => {
    res.send('practice and practice')
})

app.get('/users', (req,res) => {
    res.send(users)
})

app.get('/user/:uId', (req,res) =>{
    // console.log(req.params);
    const id = (req.params.uId);
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.post('/user', (req,res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('practicing',port);
})