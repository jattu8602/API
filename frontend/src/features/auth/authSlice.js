import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))



const initialState  =  {
  user:null,
  isError:false,
  isSuccuss:false,
  isLoading:false,
  message:''

}

export const userSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    reset:(state)=>{
      state.isLoading = false
      state.isError = false
      state.isSuccuss = false
      state.message = ''


  }
},
  extraReducers:()=>{



  }

})
export const {reset} = authSlice.actions
export default authSlice.reducers