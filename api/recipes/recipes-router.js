const router = require('express').Router()
const Recipe = require('./recipes-model')

router.get('/:recipe_id', (req,res,next)=>{
    Recipe.getRecipeById(req.params.recipe_id)
    .then(resource =>{
        res.status(200).json(resource)
    })
    .catch(next)
})

router.use((error, req,res)=>{
    res.status(500).json({
        customMessage: 'something went wrong inside the recipes router',
        message: error.message,
        stack: error.stack,
    })
})




module.exports = router