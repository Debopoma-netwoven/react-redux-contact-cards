import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/action-creators";
import { LayoutContainer } from "./layout-container";


function mapStateToProps(state) {
    return {
        contactList: state.contactList,
        updateData: state.updateData,
        deleteIndex:state.deleteIndex,
        showForm: state.showForm,
        addContact: state.addContact,
        editContact: state.editContact,
        showDeleteMessage: state.showDeleteMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);

