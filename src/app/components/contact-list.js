import React from 'react';
import { render } from 'react-dom';
import ContactDetails from './contact-details'
import ContactAddEdit from './contact-add-edit'
export class ContactContainerSmart extends React.Component {
    constructor(props) {
        super(props);
       
    }
    addForm() {
      
        this.props.setAddData({ showForm: true, addContact: true,editContact: false})
    }
    handleUpdate(id) {
        var array = this.props.contactList.find(function (item) { return item._id == id; });
        this.props.setUpdateData({ updateData: array, showForm: true,addContact: false, editContact: true })


    }
    handleDelete(id) {
        // console.log(e);
        this.props.setDeleteIndex({ deleteIndex: id, showDeleteMessage: true });


    }
    deleteContactFinal(e) {
        this.props.deleteContact();
    }
    cancelDeleteContact(e) {
        this.props.setDeleteIndex({ deleteIndex: -1, showDeleteMessage: false });
    }
    render() {
        return (
            <div className="col-sm-12">
                <div class="row">
                    <div className="col-sm-4 styleMargin" ><button class="btn-sm" onClick={(e) => this.addForm(e)} >Add Contact</button></div>
                </div>
                <div class="row">
                    <div className="contactContainer col-sm-4">
                        {this.props.contactList.map((element, index) =>
                            <ContactDetails key={index} data={element} onDelete={(e) => this.handleDelete(e)} onUpdate={(e) => this.handleUpdate(e)}></ContactDetails>)
                        }
                    </div>
                    <div className="col-sm-8">
                        {(this.props.showDeleteMessage) ?
                            <div class="row padDiv">
                                <div className="col-sm-12" >
                                    <div class="row  panel panel-default padDiv">
                                        <div className="col-sm-6"><p>Do you want to delete the selected contact?</p></div>
                                        <div className="col-sm-6">
                                            <button type="button" class="btn-sm " onClick={(e) => this.deleteContactFinal(e)}>Ok</button>
                                            <button type="button" class="btn-sm styleMargin" onClick={(e) => this.cancelDeleteContact(e)}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div> : <div></div>}
                        <div class="row">
                            {(this.props.showForm) ?
                                <div className="col-sm-12">
                                    <ContactAddEdit  {...this.props} ></ContactAddEdit>
                                </div>

                                : <div></div>}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
