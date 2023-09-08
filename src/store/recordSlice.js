const { createSlice } = require("@reduxjs/toolkit")
const recordslice = createSlice({
    name: "List",
    initialState: {
        studentlist: [],
        courselist: [],
        student:{}
    },
    reducers: {
        add(state, action) {
            // console.log(action.payload)
            const updateform = state.studentlist.concat(action.payload)
            return { ...state, studentlist: updateform }
        },
        remove(state, action) {
            //console.log(action.payload)
            const updateform = state.studentlist.filter(list => list.id !== action.payload.id)
            return { ...state, studentlist: updateform }
        },
        edit(state, action) {
        // console.log(action.payload)
            const editform = state.studentlist.find(item => item.id === action.payload.id)
        // console.log(editform)
          return { ...state, student: editform }
        },
        update(state, action) {
           // console.log(action.payload)
            const updateform = state.studentlist.map((item) =>
                item.id === action.payload.id ? {student:action.payload.studentdata} : item
            );
             console.log(updateform)
           // return { ...state, studentlist: updateform, student: {} };
        },
        addcourse(state, action) {
            //console.log(action.payload)
            const updateform = state.courselist.concat(action.payload)
            return { ...state, courselist: updateform }
        },
        removecourse(state, action) {
            //console.log(action.payload)
            const updateform = state.courselist.filter(list => list.id !== action.payload.id)
            return { ...state, courselist: updateform }
        },
    }
})
export const { add, remove, addcourse, removecourse,edit ,update} = recordslice.actions
export const recordReducer = recordslice.reducer