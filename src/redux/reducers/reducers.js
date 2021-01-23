import { ADD_TASK,DELETE_TASK,CHECK_TASK,CLEAR_TASKS} from '../actions/actions';

// const initialState = {
//     listOfTasks: []
// }

// const handleCheck = (listOfTasks,id) => {
//     let newArr = [...listOfTasks];
//                 console.log(newArr);
//                 newArr[id].isChecked = !newArr[id].isChecked;
//                 console.log(newArr);
//             //setListOfTasks(newArr);
//             return newArr;
// }

function rootReducer(state = [], action) {
    // let newArr = [...state.listOfTasks];
    switch (action.type) {
      case ADD_TASK:
        return [
            ...state,
            {
                taskName: action.name,
              isChecked: false
            },
          ]
     case DELETE_TASK:
        return state.filter((task, index) => index !== action.id);
    case CLEAR_TASKS:
        return []
    case CHECK_TASK: 
        // console.log(newArr[action.id].isChecked)
        //        newArr[action.id].isChecked = !newArr[action.id].isChecked
        //        return {
        //            listOfTasks: newArr
        //        }

        // return state.map((task) => task.id === action.id ? {...task, isChecked: !task.isChecked} : task)
        
        return action.list
                
        // return {
        //     listOfTasks: state.listOfTasks.map((task,id) => {
        //         if(id===action.id){
        //             console.log(task.isChecked);
        //             task.isChecked = !task.isChecked;
        //             console.log(task.isChecked);
        //         }
        //     })
        // }
        default:
            return state;
        }
      }
      
      export default rootReducer;