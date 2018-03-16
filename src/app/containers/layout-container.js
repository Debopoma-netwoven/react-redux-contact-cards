import React from 'react';
import { render } from 'react-dom';
import { ContactContainerSmart } from './../components/contact-list';
import styles from '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class LayoutContainer extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         parentTitle: 'Title from parent'
    //     };
    // }

    // setTitle = (title, e) => {
    //     this.setState({
    //         parentTitle: title
    //     })
    // }

    render() {
        return (
            <div>
                <h1 className = "parentContainer">Contact List</h1>
                <ContactContainerSmart {...this.props} />
            </div>
        )
    }
}