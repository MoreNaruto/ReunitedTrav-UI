import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../public/fake_image.jpeg";
import { Card, Logo, Form, Input, Button } from "../../components/AuthForms";

class Signup extends Component {
  render() {
    return (
      <Card>
        <Logo src={logoImg} />
        <Form>
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="password" />
          <Input type="password" placeholder="password again" />
          <Button>Sign Up</Button>
        </Form>
        <Link to="/login">Already have an account?</Link>
      </Card>
    );
  }
}

export default Signup;
