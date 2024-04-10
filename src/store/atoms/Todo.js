import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { Todos } from "../../todos";
import axios from "axios";


export const todoFamily = atomFamily({
    key: "todoFamily",
    default: selectorFamily({
        key: "AtomSelectorFamily",
        get: (id) => async({get }) => {
            await new Promise(res => setTimeout(res, 5000))
            const res = await axios.get(`https://sum-server.1100xdevs.com/todo?id=${id}`)
            return res.data.todo
        }
    })
})


// or

// export const todoFamily = atomFamily({
//     key: "todoFamily",
//     default: selectorFamily({
//         key: "AtomSelectorFamily",
//         get: function(id) {
//             return async function() {
//                 const res = await axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`)
//                 return res.data.todos
//             }
//         }
//     })
// })


// export const todoAtom = atom({
//     key: "todoAtom",
//     default: []
// })