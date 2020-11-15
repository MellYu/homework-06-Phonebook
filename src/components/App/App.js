import React, { Component } from "react";
import Section from "../Header/Section.js";
import ContactForm from "../ContactsForm/ContactsForm.js";
import ContactList from "../ContactsList/ContactsList.js";
import Filter from "../Filter/Filter.js";
import styles from "./main.module.css";
import {storageContacts} from './../../redux/phonebook/phonebookActions';
import { connect } from "react-redux";

class App extends Component{
  componentDidMount(){
    const contactsFromLocalStorage = localStorage.getItem('contacts');
    if(contactsFromLocalStorage){
        this.props.storageContacts(JSON.parse(contactsFromLocalStorage));
    }
  }

  componentDidUpdate(prevProps){
    const {contacts}= this.props.phonebook;
    if(prevProps.phonebook.contacts !== contacts){
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  render(){
    const {contacts} = this.props.phonebook;
    return (<div className={styles.container}>
         <Section title="Phonebook" />
        <ContactForm />
         {contacts.length > 1 && <Filter/>}
         <h2 className={styles.contactsTitle}>Contacts</h2>
         {contacts.length ?
          <ContactList /> : (<p>There is no contacts</p>)}
       </div>)
  }
}

const mapStateToProps = (state) =>{
  return state;
}

const mapDispatchToProps= {
  storageContacts,
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
