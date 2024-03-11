import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router  = express.Router();

// Mock database
let users = [
    {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        id: "eljfleflkmelf"
    },
    {
        first_name: 'Alice',
        last_name: 'Smith',
        email: 'alicesmith@example.com',
        id:"efkelkflekfw"
    },
];
router.get('/', (req, res) => {
    res.send(users);
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const foundUser = users.find(user => user.id === id);
    res.send(foundUser)
})

router.post('/', (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()});
    res.send(`${user.first_name} has been added to the Database`)
})

router.delete('/:id',(req, res) => {
    const {id} = req.params;
    users = users.filter(user => user.id !== id);
    res.send(`This user ${id} was deleted`)
})

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const {
        first_name,
        last_name,
        email
    } = req.body;

    users = users.map(user => {
        if(user.id === id) {
            return ({...user, first_name: first_name, last_name:last_name, email:email})
        }
        return user;
    })
    res.send(users)
})

export default router;