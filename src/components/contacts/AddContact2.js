import React, { Component } from "react";
import { Consumer } from "../../context";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef;
    this.emailInput = React.createRef;
    this.phoneInput = React.createRef;
  }
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: "Fred Smith",
    email: "fsmith@gmail.com",
    phone: "888-88-888"
  };

  render() {
    const { name, email, phone } = this.props;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        className=" form-control form-control-lg"
                        type="text"
                        name="name"
                        placeholder="Enter Name..."
                        defaultValue={name}
                        ref={this.nameInput}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        className=" form-control form-control-lg"
                        type="email"
                        name="email"
                        placeholder="Enter Email..."
                        defaultValue={email}
                        ref={this.emailInput}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        className=" form-control form-control-lg"
                        type="text"
                        name="phone"
                        placeholder="Enter Phone..."
                        defaultValue={phone}
                        ref={this.phoneInput}
                      />
                    </div>
                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-light btn-block"
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
