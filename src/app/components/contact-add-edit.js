import React from 'react';

const ContactAddEdit = (props) => {
    console.log("add edit");
    function updateContactFinal(id, e) {
        let updatedData = {
            _id: id, name: props.updateData.name,
            company: props.updateData.company, designation: props.updateData.designation,
            age: props.updateData.age, location: props.updateData.location, image: '../images/upload.jpg'
        }
        props.updateContact(updatedData);

    }
    function addContactFinal(id, e) {
        let updatedData = {
            _id: id, name: props.updateData.name,
            company: props.updateData.company, designation: props.updateData.designation,
            age: props.updateData.age, location: props.updateData.location, image: '../images/upload.jpg'
        }
        props.addContact(updatedData);
    }

    function updateName(e) {
        console.log(1);
        let newupdatedData = {
            ...props.updateData
        }
        newupdatedData.name = e.target.value;
        props.fieldChange(newupdatedData);

    }
    function updateLocation(e) {
        let newupdatedData = {
            ...props.updateData
        }
        newupdatedData.location = e.target.value;
        props.fieldChange(newupdatedData);
    }
    function updateCompany(e) {
        let newupdatedData = {
            ...props.updateData
        }
        newupdatedData.company = e.target.value;
        props.fieldChange(newupdatedData);
    }
    function updateAge(e) {
        let newupdatedData = {
            ...props.updateData
        }
        newupdatedData.age = e.target.value;
        props.fieldChange(newupdatedData);
    }
    function updateDesignation(e) {
        let newupdatedData = {
            ...props.updateData
        }
        newupdatedData.designation = e.target.value;
        props.fieldChange(newupdatedData);
    }
    return (
        <div className="panel panel-default padDiv" ><h3 className="formContainer">Add/Edit Contact</h3>
            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Name: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => updateName(e)} value={props.updateData.name} />
                </div>
            </div>

            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Company: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => updateCompany(e)} value={props.updateData.company} />
                </div>
            </div>

            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Designation: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => updateDesignation(e)} value={props.updateData.designation} />
                </div>
            </div>
            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Age: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => updateAge(e)} value={props.updateData.age} />
                </div>
            </div>
            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Location: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => updateLocation(e)} value={props.updateData.location} />
                </div>
            </div>
            <div class="row padDivSmall">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    {(props.editContact) ?
                        <button type="button" class="btn-sm" onClick={(e) => updateContactFinal(props.updateData._id, e)}>Update</button> :
                        <button type="button" class="btn-sm" onClick={(e) => addContactFinal(props.updateData._id, e)}>Add</button>}
                </div>
            </div>
        </div>
    )
}

export default ContactAddEdit;