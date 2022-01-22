const express = require('express')
const cors = require('cors')
// const path = require('path')
const app = express()
const PORT = process.env.PORT || 4000;
const bcrypt = require('bcrypt')
const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(
    "postgres://yovtbpxqkbmdnf:1248874b566efabbb7a3f89633933437ac1a3484dc7cb985185e1788fffe1a48@ec2-3-89-214-80.compute-1.amazonaws.com:5432/d1jnhm8p0fac65",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)

//Middleware
app.use(express.json());
app.use(cors());

//Put endpoints here

// app.post('/addtobag', async (req, res)=> {
//     let myBag = await sequelize.query(`
//         select * from discs
//         where mybag = true
//     `)
//     res.status(200).send(myBag)
//     // const {id} = req.body
//     console.log(req.body)
//     // let checkDisc = await sequelize.query(`
//     //     select mybag from discs
//     //     where id = '${id}'
//     // `)
//     // if(checkDisc[1].rowCount !== 0){
//     //     res.status(500).send('Disc is already in bag')
//     // } else {
//     //     await sequelize.query(`
//     //         update discs
//     //         set mybag = true
//     //         where id = '${id}'
//     //     `)
//     //     res.status(200).send(myBag)
//     // }
// })

app.get('/discs', async (req, res) => {
    let discs = await sequelize.query(`
        select * from discs
    `)
    res.status(200).send(discs[0]);
})
app.get('/drivers', async (req, res) => {
    let discs = await sequelize.query(`
        select * from discs
        where driver = true
    `)
    res.status(200).send(discs[0]);
})
app.get('/fairways', async (req, res) => {
    let discs = await sequelize.query(`
        select * from discs
        where fairway = true
    `)
    res.status(200).send(discs[0]);
})
app.get('/midranges', async (req, res) => {
    let discs = await sequelize.query(`
        select * from discs
        where midrange = true
    `)
    res.status(200).send(discs[0]);
})
app.get('/putters', async (req, res) => {
    let discs = await sequelize.query(`
        select * from discs
        where putter = true
    `)
    res.status(200).send(discs[0]);
})
app.post('/register', async (req, res) => {
    const {username, name, password} = req.body
    const checkUser = await sequelize.query(`
    SELECT * FROM users WHERE username = '${username}'
    `)
    if(checkUser[1].rowCount !== 0) {
        res.status(500).send('Username already exists')
    } else {
        const salt = bcrypt.genSaltSync(10)
        const passwordHash = bcrypt.hashSync(password, salt)
        await sequelize.query(`
        INSERT INTO users(name, username, password)
        VALUES (
           '${name}',
           '${username}',
           '${passwordHash}'
        )
        `)
        const userInfo = await sequelize.query(`
        SELECT id, username, name FROM users WHERE username = '${username}'
        `)
        res.status(200).send(userInfo)
    }
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body
    const validUser = await sequelize.query(`
      SELECT * FROM users WHERE username = '${username}'
    `).catch((err) => console.log(err))
    console.log(validUser[0][0].password)

    if(validUser[1].rowCount === 1) {
      if (bcrypt.compareSync(password, validUser[0][0].password)) {
        let object = {
          id: validUser[0][0].id,
          name: validUser[0][0].name,
          username
        }
        res.status(200).send(object)
      } else {
        res.status(401).send('Password is Incorrect')
      }
    } else {
      res.status(401).send('Username is Incorrect')
    }
  })

// sequelize.authenticate()
app.listen(PORT, () => console.log(`Slamming on port ${PORT}`))