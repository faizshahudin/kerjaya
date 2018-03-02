import React, { Component } from 'react';
import logo from "./images/jobmatching-logo.png"
import * as Api from "./Api"
import serializeForm from 'form-serialize';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contact: []
    }
    this.modal
    this.content = {
      english: {
        header: "SIGN UP TO GET A JOB",
        placeholder: {name: "Full Name", email: "Email Address"},
        button: "Register Now",
        terms: "*By signing up, you agree to our Terms & Privacy Policy and Personal Data Protection Act (PDPA) 2010."
      },
      bm: {
        header: "DAFTAR UNTUK KERJAYA BARU",
        placeholder: {name: "Nama Penuh", email: "Alamat Emel"},
        button: "Daftar Sekarang",
        terms: "*Dengan mendaftar, anda adalah dengan ini bersetuju dengan segala syarat dan Polisi Privasi, termasuk Akta Perlindungan Data Peribadi (PDPA) – 2010."
      },
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

// checks to see if click a event occurs outside the Register modal. If it is, runs toggleModal()
  handleOutsideClick = (e) => {
    if (this.props.showModal === true) {
      if (!this.modal.contains(e.target)) {
        this.props.toggleModal();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }

  // handleChange = (event) => {
  //   let value = event.target.value
  //   let name = event.target.name
  //   this.setState((state) => ({
  //     [name]: value
  //   }))
  // }


// receives contact from handle Submit, and passes it to Api.addcontact. Also set's the value of contact state to the contact.
  addToMailing = (contact) => {
    console.log('inside-addToMailing: ' + contact);
    Api.addContact(contact).then(contact => { // current problem: the promise return false
      console.log('inside-addToMailing: ' + contact);
      this.setState((state) => ({
        contact: state.contact.concat([contact])
      }))
    })
  }

// handles the submit event, and passes the value of the form submission to addToMailing
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, {hash: true})
    console.log(values);
    console.log(this.addToMailing);
    if (this.addToMailing)
      this.addToMailing(values)
  }

  render() {
    let language = this.props.language
    return(
      <div className="register">
        <div className="register-container"
          ref={node => (
            this.modal = node
          )}
          >
          <form onSubmit={this.handleSubmit} className="register-form container">
            <img className="register-form-logo" src={logo} alt={"Photo of JobMatching logo."}></img>
            <label className="register-header">
              <h2>{this.content[language].header}</h2>
            </label>
            <div className="register-input-fields">
              {/* <input
                name="name"
                placeholder={this.content[language].placeholder.name}
                type="text"
                autoComplete="off"
                // value={this.state.name}
                // onChange={this.handleChange}
                >
              </input> */}
              <input
                name="email"
                placeholder={this.content[language].placeholder.email}
                type="text"
                autoComplete="off"
                // value={this.state.email}
                // onChange={this.handleChange}
                >
              </input>
            </div>
            <button
              className="button"
              type="submit"
              >
                {this.content[language].button}
            </button>
            <p>{this.content[language].terms}
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default Register
