import React, { Component } from 'react';

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
          <form>
            <label className="register-header">
              <h1>DAFTAR UNTUK KERJAYA BARU!</h1>
            </label>
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
              placeholder="Email"
              type="text"
              autoComplete="off"
              value={this.state.email}
              onChange={this.handleChange}
              >
            </input>
            <button
              className="button"
              type="submit"
              disabled={!this.state.email}
              >
                Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Register
