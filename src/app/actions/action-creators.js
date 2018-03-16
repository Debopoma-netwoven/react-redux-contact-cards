export const addContact = (payload) => {
    return dispatch=>{
        console.log("add initiated")
        setTimeout(() => {
            dispatch({ type: 'ADD_CONTACT', payload: payload })
            console.log("add completed")
        }, 2000)
    }
        
}

export const fieldChange = (payload) => {
    return { type: 'FIELD_CHANGE', payload: payload }
}

export const updateContact = (payload) => {
    return { type: 'UPDATE_CONTACT', payload: payload }
}

export const deleteContact = (payload) => {
    return { type: 'DELETE_CONTACT', payload: payload }
}

export const setDeleteIndex = (payload) => {
    return { type: 'SET_DELETE_INDEX', payload: payload }
}

export const setUpdateData = (payload) => {
    return { type: 'SET_UPDATE_DATA', payload: payload }
}

export const setAddData = (payload) => {
    return { type: 'SET_ADD_DATA', payload: payload }
}
