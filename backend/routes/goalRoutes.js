const express = require('express')
const router = express.Router()
// import {getGoals} from '../controllers/goalController'
const {getGoals,setGoals,updateGoals,deleteGoals} = require('../controllers/goalController')


const  {protect} = require('../middleware/authMiddleware')

// router.get('/',getGoals);
// router.post('/',setGoals)
// router.put('/:id',updateGoals)
// router.delete('/:id',deleteGoals)
router.route('/').get(protect , getGoals).post(protect , setGoals)
router.route('/:id').put(protect , updateGoals).delete(protect , deleteGoals)


module.exports = router