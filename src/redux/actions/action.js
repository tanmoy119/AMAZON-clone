export const ADD = (item)=>{
    return {
        type:"ADD_CART",
        payload: item
    }
}
export const DLT = (item)=>{
    return {
        type:"RMV_CART",
        payload: item
    }
}