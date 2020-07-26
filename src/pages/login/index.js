import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../public/fake_image.jpeg";
import { Card, Logo, Form, Input, Button } from "../../components/AuthForms";

class Login extends Component {
  render() {
    return (
      <Card>
        <Logo src={logoImg} />
        <Form>
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="password" />
          <Button>Sign In</Button>
        </Form>
        <Link to="/signup">Don't have an account?</Link>
      </Card>
    );
  }
}

export default Login;
