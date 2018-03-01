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
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick = (e) => {
    if (this.props.showModal == true) {
      if (!this.modal.contains(e.target)) {
        this.props.toggleModal();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }

  render() {
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
              <h2>DAFTAR UNTUK KERJAYA BARU</h2>
            </label>
            <div className="register-input-fields">
              <input
                id="username"
                placeholder="Nama Penuh"
                type="text"
                autoComplete="off"
                value={this.state.name}
                onChange={this.handleChange}
                >
              </input>
              <input
                id="username"
                placeholder="Alamat Emel"
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
                Daftar Sekarang
            </button>
            <p>*Dengan mendaftar, anda adalah dengan ini bersetuju dengan segala syarat dan Polisi Privasi,
              termasuk Akta Perlindungan Data Peribadi (PDPA) – 2010.
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default Register
