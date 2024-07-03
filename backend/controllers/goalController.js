const asyncHandler = require('express-async-handler')

//@desc Get goals
//@route GET /api/goals
//@access Private

const getGoals = asyncHandler(async (req,res)=>{
  res.status(200).json({message:`Get goals`})
})

//@desc Set goal
//@route POST /api/goals
//@access Private

const setGoals = asyncHandler(async (req,res)=>{
  // console.log(req.body)
  if(!req.body.text){
    res.status(400)//.json({message:'please add a text field'})
    throw new Error('please add a text field')
  }

  res.status(200).json({message:'set Goals'})
})

//@desc Update goal
//@route  PUT /api/goals/:id
//@access Private

const updateGoals = asyncHandler(async (req,res)=>{
  res.status(200).json({message:`Update Goals ${req.params.id}`})
}
)
//@desc DELETE goal
//@route DELETE /api/goals/:id
//@access Private

const deleteGoals = asyncHandler(async (req,res)=>{
  res.status(200).json({message:`delete Goals ${req.params.id}`})
})

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
}