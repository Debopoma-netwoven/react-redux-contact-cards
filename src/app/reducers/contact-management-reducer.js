import Service from "../services/contact-management-service";

const initialState = {
    contactList: [{ _id: 1, name: 'Debopoma Chaudhury', company: 'Netwoven', designation: 'Senior Engineer', age: '32 yrs', location: 'Kolkata', image: '../images/dc.png' },
    { _id: 2, name: 'Sanjukta Das', company: 'JP Morgan', designation: 'Project Lead', age: '31 yrs', location: 'Singapore', image: '../images/upload.jpg' },
    { _id: 3, name: 'Suhit Saha', company: 'Prana', designation: 'Technical Producer', age: '31 yrs', location: 'Mumbai', image: '../images/upload.jpg' },
    { _id: 4, name: 'Kumaresh Roy', company: 'Royal Chem', designation: 'CEO', age: '32 yrs', location: 'Kolkata', image: '../images/upload.jpg' }],
    updateData: { _id: 0, name: '', company: '', designation: '', age: '', location: '', image: '' },
    deleteIndex: -1,
    showForm: false,
    addContact: false,
    editContact: false,
    showDeleteMessage: false
};

const contactManagementReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'ADD_CONTACT':
            {
                return Service.addContact(newState,action.payload);
            }
        case 'UPDATE_CONTACT':
            {
                return Service.updateContact(newState,action.payload);
            }
        case 'DELETE_CONTACT':
            {
               
                return Service.deleteContact(newState);
            }
        case 'SET_DELETE_INDEX':
            {
                newState.deleteIndex = action.payload.deleteIndex;
                newState.showDeleteMessage = action.payload.showDeleteMessage;
                return newState;
            }
        case 'SET_UPDATE_DATA':
            {
                newState.showForm = action.payload.showForm;
                newState.addContact = action.payload.addContact;
                newState.editContact = action.payload.editContact;
                newState.updateData = action.payload.updateData;
                return newState;
            }
        case 'SET_ADD_DATA':
            {
                newState.showForm = action.payload.showForm;
                newState.addContact = action.payload.addContact;
                newState.editContact = action.payload.editContact;
                newState.updateData = { _id: 0, name: '', company: '', designation: '', age: '', location: '', image: '' };
                return newState;
            }
        case 'FIELD_CHANGE':
            {

                newState.updateData = action.payload;
                return newState;

            }
        default:
            return newState;
    }
}
export default contactManagementReducer;