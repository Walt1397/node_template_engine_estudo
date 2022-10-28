const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({partialsDir: ['views/partials'],})

app.engine('handlebars', hbs.engine) 
app.set('view engine', 'handlebars')  

app.use(express.static('public'))


app.get('/post', (req, res) => {

    const post = {
        title: 'Sua Saúde',
        category: 'Seu Bem Estar, nossa preocupação',
        body: 'Garantia de Qualidade e Eficiência'
    }

    res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
    const posts = [{
        title: "Marcação de Consulta",
        category: "Saiba como marcar consultas",
        body: "Clique aqui para maiores informações",
        
    },
    {
        title: "Marcação de Exames",
        category: "Saiba como marcar exames",
        body: "Clique aqui para maiores informações",
       
    },
    {
        title: "Resultado de Exames",
        category: "Saiba como visualizar seus exames",
        body: "Clique aqui para maiores informações",
        
    },
        ]
    res.render("partials/blog", {posts})
})

app.get('/dashboard', (req, res) => {
    
    const items = ["Consultas", "Exames", "Atendimento ao Cliente"]
    
    res.render("dashboard", {items})

})

app.get('/', (req, res) => {
   
   const user = {
    name: "Walter",
    surname: "Ebbers",
    age: 25,
   }

   const auth = true

   const approved = true

    res.render('home', {user: user, auth, approved})
})

app.listen(3000, () => {
    console.log('App rodando!')
})