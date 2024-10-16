const { Router } = require("express");
const usersRouter = Router();
const User = require("../models/User")

usersRouter.get("/", async (req, res) =>{
    const users = await User.findAll()
    res.json(users); 
});

usersRouter.get("/:id", async(req, res) => {
    const user = await User.findByPk(req.params.id)
    res.json(user);
})

usersRouter.post("/", async (req,res) =>{
    const{name, age} = req.body
    await User.create({
        name: name,
        age: age
    })
    res.send('thank you')
})

usersRouter.put("/:id", async (req, res) =>{
    const{name, age} = req.body;
    const userID = req.params.id; 
    await User.update({
        name: name, 
        age: age
    }, {where: {id: userID}}) 
    res.send('thank you')
})

usersRouter.delete("/:id", async (req, res) => {
    const userID = req.params.id
    const deleteUser = User.destroy({where: {id: userID}})
    res.send('thank you')
})

module.exports = usersRouter;

