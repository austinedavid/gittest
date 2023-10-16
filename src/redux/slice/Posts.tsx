import {createSlice, PayloadAction} from "@reduxjs/toolkit"

// interface for pushing in array
interface Iuser{
    pid:string;
    user:string
}
// interface for the action
interface action{
    pid:string;
    userid:string
}
// creating the type to be used for our post
interface Iallpost{
    pid:string;
    name:string;
    image:string;
    savedids:string[];
}
interface initialState{
    allpost:Iallpost[]
}
// creating the initial state here
const initialState = {
    allpost:null as Iallpost[] | null
} as initialState

// creating the post slices here
export const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        addStar:(state, action:PayloadAction<Iallpost[]>)=>{
            const payloads = action.payload
            state.allpost = payloads
        },
        addUser:(state, action:PayloadAction<Iuser>)=>{
            const{user, pid} = action.payload
            const foundUser = state.allpost.find((item)=> item.pid == pid)
            if(foundUser){
                if(!foundUser.savedids.includes(user)){
                     foundUser.savedids.push(user)
                }else{
                    foundUser.savedids.splice(
                        foundUser.savedids.findIndex((item)=> item == user),1
                    )
                }
            }
        }
    }
})

// exporting our actions 
export const {addStar, addUser} = postSlice.actions
// exporting our reducer here
export default postSlice.reducer