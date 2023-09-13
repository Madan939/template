const { createSlice } = require("@reduxjs/toolkit")
const recordslice = createSlice({
    name: "List",
    initialState: {
        studentlist: [
            {
                id: 45666666,
                name: "Madan tamang",
                phone: 1223,
                dob: "2003-03-01",
                email: "madantamang939@gmail.com",
                gender: "Male",
                address: "chabahil",
                course:"1232344",
                fee: 10000
            }
        ],
        courselist: [
            {
                id: "1232344",
                course: "Full stack",
                fee: 30000
            },
            {
                id: "4444444",
                course: "Graphic Design",
                fee: 40000
            }
        ],
        student: {},
        COURSE:{}
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
            //console.log(editform)
            return { ...state, student: editform }
        },
        update(state, action) {
            const updatedStudentData = action.payload.studentdata;
            //console.log(updatedStudentData)
            const updatedStudentlist = state.studentlist.map((item) =>
                item.id === action.payload.id ? updatedStudentData : item
            );

            return { ...state, studentlist: updatedStudentlist, student: {} };
        },
        search(state, action) {
            const name = action.payload
            // console.log(name)
            const filteredData = state.studentlist.filter(
                (item) =>
                    item.name.toLowerCase().includes(name.toLowerCase())
            )
            console.log(filteredData)
            return { ...state, studentlist: filteredData }
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
        editcourse(state,action){
            //console.log(action.payload)
            const editcourse = state.courselist.find(item => item.id === action.payload.id)
            //console.log(editcourse)
            return { ...state, COURSE: editcourse }
        },
        updatecourse(state, action) {
            const updatedcourseData = action.payload.coursedata;
            //console.log(updatedcourseData)
            const updatedcourselist = state.courselist.map((item) =>
                item.id === action.payload.id ? updatedcourseData : item
            );
           console.log(updatedcourseData)
            return { ...state, courselist: updatedcourselist, COURSE: {} };
        },
        course(state, action) {
            const updatecourse = state.courselist.find(item => item.id === action.payload.id)
            console.log(updatecourse)
            return { ...state, courselist: updatecourse }
        }
    }
})
export const { add, remove, addcourse, removecourse, edit, update, search, course,editcourse,updatecourse } = recordslice.actions
export const recordReducer = recordslice.reducer