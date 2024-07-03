const express = require('express')
const router = express.Router()
// import {getGoals} from '../controllers/goalController'
const {getGoals,setGoals,updateGoals,deleteGoals} = require('../controllers/goalController')

// router.get('/',getGoals);
// router.post('/',setGoals)
// router.put('/:id',updateGoals)
// router.delete('/:id',deleteGoals)
router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)


module.exports = router