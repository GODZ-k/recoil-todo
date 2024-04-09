import { atom, selector } from "recoil";


export const todoAtom = atom({
    key: "todoAtom",
    default: []
})


export const filterTodo = selector({
    key: "filterTodo",
    get: ({get }) => {
        const todo = get(todoAtom)
        return todo
    }
})