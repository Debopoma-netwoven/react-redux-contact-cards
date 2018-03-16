export const addContact = (prevState, data) => {
    let newState = { ...prevState };
    newState.contactList.push(data);
    newState.updateData = { _id: 0, name: '', company: '', designation: '', age: '', location: '', image: '' };
    newState.showForm = false;
    newState.addContact = false;
    newState.editContact = false;
    return newState;
}

export const updateContact = (prevState, data) => {
    let newState = { ...prevState };
    let index = newState.contactList.map(item => item._id)
        .indexOf(parseInt(data._id) ? parseInt(data._id) : 0);

    newState.contactList[index] = data;
    newState.updateData = { _id: 0, name: '', company: '', designation: '', age: '', location: '', image: '' };
    newState.showForm = false;
    newState.addContact = false;
    newState.editContact = false;
    return newState;
}

export const deleteContact = (prevState) => {
    let newState = { ...prevState };
    let index = newState.contactList.map(function (item) { return item._id; })
        .indexOf(parseInt(newState.deleteIndex) ? parseInt(newState.deleteIndex) : 0);
    newState.contactList.splice(index, 1);
    newState.deleteIndex = -1;
    newState.showDeleteMessage = false;
    return newState;
}

module.exports = {
    addContact,
    updateContact,
    deleteContact
}