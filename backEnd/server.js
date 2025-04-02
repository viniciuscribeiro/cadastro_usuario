import express from 'express';
import { PrismaClient } from '@prisma/client'
import cors from 'cors';


const app = express();
app.use(express.json()) // express n tem json por padrão

const prisma = new PrismaClient()

app.use(cors()) // -> deixa qualquer pagina acessar meu backend


/*
    1) Tipo de Rota / método HTTP
    2) Endereço
*/

app.post('/usuarios', async (req, res) => {
    await prisma.user.create({ // criando usuario, user pq veio do model User em pisma
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).send("Deu certo");
});

app.get('/usuarios', async (req, res) => {
    let users =[]

    if(req.query){ // vem na url
        users = await prisma.user.findMany({
            where: {
                email: req.query.email,
                name: req.query.name,
                age: req.query.age
                
            }
        })
    }else{
        users = await prisma.user.findMany() // retorna todos os usuarios
    }
    

    res.status(200).json(users); // resposta no formato json
})

app.put('/usuarios/:id', async (req, res) => { // :id é uma variavel
    await prisma.user.update({ // atualizando, user pq veio do model User em pisma
        where: { // Atulizar baseado em q
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).send("Deu certo");
});


app.delete('/usuarios/:id', async (req, res) => {
    const users = await prisma.user.delete({
        where: { // Atulizar baseado em q
            id: req.params.id
        }
    }) 

    res.status(200).json(users); // resposta no formato json
})

app.listen(3000)
