const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

require('dotenv').config()
const {DATABASE_URL} = process.env

const PORT = process.env.PORT || 4000;
const bcrypt = require('bcrypt')
const {Sequelize} = require('sequelize')

// const publicPath = path.join(__dirname, 'build', 'public');
// app.use(express.static(publicPath));

app.use(express.static(path.resolve(__dirname, "../../build")));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, '../../public/index.html'));
//  });



const sequelize = new Sequelize(
    DATABASE_URL,
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


app.get('/discs', async (req, res) => {
    let discs = await sequelize.query(`
        select * from discs
        order by name asc
    `)
    
    res.status(200).send(discs[0]);
})
app.get('/random', async (req, res) => {
    let discs = await sequelize.query(`
        select * from discs
        
    `)
    
    res.status(200).send(discs[0]);
})
app.get('/pack', async (req, res) => {
    
    let fairways = await sequelize.query(`
        select * from discs
        where speed < 11
        and speed > 6
        and fade < 3
    `)
    let fairway = fairways[0]
    let ranFairway = fairway[Math.floor(Math.random()*fairway.length)]
           
    let midranges = await sequelize.query(`
        select * from discs
        where midrange = true  
        and fade < 3
    `)
    let midrange = midranges[0]
    let ranMidrange = midrange[Math.floor(Math.random()*midrange.length)]

    let putters = await sequelize.query(`
        select * from discs
        where putter = true  
        and fade < 3
    `)
    let putter = putters[0]
    let ranPutter = putter[Math.floor(Math.random()*putter.length)]

    let arr = [ranFairway, ranMidrange, ranPutter]
    // console.log(arr)
    res.status(200).send(arr)
})
app.get('/drivers', async (req, res) => {
    let discs = await sequelize.query(`
        select * from discs
        where driver = true
        order by speed desc
        
    `)
    res.status(200).send(discs[0]);
})
app.get('/fairways', async (req, res) => {
    let discs = await sequelize.query(`
        select * from discs
        where fairway = true
        order by speed desc
    `)
    res.status(200).send(discs[0]);
})
app.get('/midranges', async (req, res) => {
    let discs = await sequelize.query(`
        select * from discs
        where midrange = true
        order by speed desc
    `)
    res.status(200).send(discs[0]);
})
app.get('/putters', async (req, res) => {
    let discs = await sequelize.query(`
        select * from discs
        where putter = true
        order by speed desc
    `)
    res.status(200).send(discs[0]);
})

 
app.put('/addtobag', async (req, res) =>{
    let discId = req.body.discId
    let mybagTruthy = await sequelize.query(`
        select mybag from discs
        where id = ${discId}
    `)
    if(mybagTruthy[0][0].mybag === false){
        await sequelize.query(`
            update discs
            set mybag = true 
            where id = ${discId}
        `)
    } else {
        await sequelize.query(`
        update discs
        set mybag = false
        where id = ${discId}
        `)
    }   
    res.sendStatus(200)   
})
app.get('/mybag', async (req,res) => {
    let myBag = await sequelize.query(`
        select * from discs
        where mybag = true
        order by name asc
       
    `)
    res.status(200).send(myBag[0]);
})

//Innova drop down
app.get('/get-all-innova-discs', async (req, res)=>{
    let allInnovaDiscs = await sequelize.query(`
        select * from discs
        where brand = 'Innova'
        order by speed desc
    `)
    res.status(200).send(allInnovaDiscs[0]);
})

app.get('/get-all-innova-drivers', async (req, res)=>{
    let allInnovaDrivers = await sequelize.query(`
        select * from discs
        where brand = 'Innova'
        and driver = true
        order by speed desc
    `)
    res.status(200).send(allInnovaDrivers[0]);
})

app.get('/get-all-innova-fairways', async (req, res)=>{
    let allInnovaFairways = await sequelize.query(`
        select * from discs
        where brand = 'Innova'
        and fairway = true
        order by speed desc
    `)
    res.status(200).send(allInnovaFairways[0]);
})

app.get('/get-all-innova-midranges', async (req, res)=>{
    let allInnovaMidranges = await sequelize.query(`
        select * from discs
        where brand = 'Innova'
        and midrange = true
        order by speed desc
    `)
    res.status(200).send(allInnovaMidranges[0]);
})

app.get('/get-all-innova-putters', async (req, res)=>{
    let allInnovaPutters = await sequelize.query(`
        select * from discs
        where brand = 'Innova'
        and putter = true
        order by speed desc
    `)
    res.status(200).send(allInnovaPutters[0]);
})
// //Discraft drop down

app.get('/get-all-discraft-discs', async (req, res)=>{
    let allDiscraftDiscs = await sequelize.query(`
        select * from discs
        where brand = 'Discraft'
        order by speed desc
    `)
    res.status(200).send(allDiscraftDiscs[0]);
})

app.get('/get-all-discraft-drivers', async (req, res)=>{
    let allDiscraftDrivers = await sequelize.query(`
        select * from discs
        where brand = 'Discraft'
        and driver = true
        order by speed desc
    `)
    res.status(200).send(allDiscraftDrivers[0]);
})

app.get('/get-all-discraft-fairways', async (req, res)=>{
    let allDiscraftFairways = await sequelize.query(`
        select * from discs
        where brand = 'Discraft'
        and fairway = true
        order by speed desc
    `)
    res.status(200).send(allDiscraftFairways[0]);
})

app.get('/get-all-discraft-midranges', async (req, res)=>{
    let allDiscraftMidranges = await sequelize.query(`
        select * from discs
        where brand = 'Discraft'
        and midrange = true
        order by speed desc
    `)
    res.status(200).send(allDiscraftMidranges[0]);
})

app.get('/get-all-discraft-putters', async (req, res)=>{
    let allDiscraftDrivers = await sequelize.query(`
        select * from discs
        where brand = 'Discraft'
        and putter = true
        order by speed desc
    `)
    res.status(200).send(allDiscraftDrivers[0]);
})
// //Discmania drop down
app.get('/get-all-discmania-discs', async (req, res)=>{
    let allDiscmaniaDiscs = await sequelize.query(`
        select * from discs
        where brand = 'Discmania'
        order by speed desc
    `)
    res.status(200).send(allDiscmaniaDiscs[0]);
})

app.get('/get-all-discmania-drivers', async (req, res)=>{
    let allDiscmaniaDrivers = await sequelize.query(`
        select * from discs
        where brand = 'Discmania'
        and driver = true
        order by speed desc
    `)
    res.status(200).send(allDiscmaniaDrivers[0]);
})

app.get('/get-all-discmania-fairways', async (req, res)=>{
    let allDiscmaniaFairways = await sequelize.query(`
        select * from discs
        where brand = 'Discmania'
        and fairway = true
        order by speed desc
    `)
    res.status(200).send(allDiscmaniaFairways[0]);
})

app.get('/get-all-discmania-midranges', async (req, res)=>{
    let allDiscmaniaMidranges = await sequelize.query(`
        select * from discs
        where brand = 'Discmania'
        and midrange = true
        order by speed desc
    `)
    res.status(200).send(allDiscmaniaMidranges[0]);
})

app.get('/get-all-discmania-putters', async (req, res)=>{
    let allDiscmaniaDrivers = await sequelize.query(`
        select * from discs
        where brand = 'Discmania'
        and putter = true
        order by speed desc
    `)
    res.status(200).send(allDiscmaniaDrivers[0]);
})


// //Westside drop down
app.get('/get-all-westside-discs', async (req, res)=>{
    let allWestsideDiscs = await sequelize.query(`
        select * from discs
        where brand = 'Westside'
        order by speed desc
    `)
    res.status(200).send(allWestsideDiscs[0]);
})

app.get('/get-all-westside-drivers', async (req, res)=>{
    let allWestsideDrivers = await sequelize.query(`
        select * from discs
        where brand = 'Westside'
        and driver = true
        order by speed desc
    `)
    res.status(200).send(allWestsideDrivers[0]);
})

app.get('/get-all-westside-fairways', async (req, res)=>{
    let allWestsideFairways = await sequelize.query(`
        select * from discs
        where brand = 'Westside'
        and fairway = true
        order by speed desc
    `)
    res.status(200).send(allWestsideFairways[0]);
})

app.get('/get-all-westside-midranges', async (req, res)=>{
    let allWestsideMidranges = await sequelize.query(`
        select * from discs
        where brand = 'Westside'
        and midrange = true
        order by speed desc
    `)
    res.status(200).send(allWestsideMidranges[0]);
})

app.get('/get-all-westside-putters', async (req, res)=>{
    let allWestsideDrivers = await sequelize.query(`
        select * from discs
        where brand = 'Westside'
        and putter = true
        order by speed desc
    `)
    res.status(200).send(allWestsideDrivers[0]);
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

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
  });

// sequelize.authenticate()
app.listen(PORT, () => console.log(`Absolutely killing it on port ${PORT}`))