import React, { Component } from 'react';
import logo from "./images/jobmatching-logo.png"

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: ""
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

  handleOutsideClick = (e) => {
    console.log(e)
    if (this.props.showModal == true) {
      if (!this.modal.contains(e.target)) {
        this.props.toggleModal();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }
  //
  // handleChange = (field, event) => {
  //   let value = event.target.value
  //   this.setState((state) => ({
  //     state[field]: value
  //   }))
  // }

  render() {
    let language = this.props.language
    return(
      <div className="register">
        <div className="register-container"
          ref={node => (
            this.modal = node
          )}
          >
          <form className="register-form container">
            <img className="register-form-logo" src={logo} alt={"Photo of JobMatching logo."}></img>
            <label className="register-header">
              <h2>{this.content[language].header}</h2>
            </label>
            <div className="register-input-fields">
              <input
                id="name"
                placeholder={this.content[language].placeholder.name}
                type="text"
                autoComplete="off"
                value={this.state.name}
                onChange={(e) => (this.handleChange("name", e))}
                >
              </input>
              <input
                id="username"
                placeholder={this.content[language].placeholder.email}
                type="text"
                autoComplete="off"
                value={this.state.email}
                onChange={this.handleChange}
                >
              </input>
            </div>
            <button
              className="button"
              type="submit"
              disabled={!this.state.email}
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
