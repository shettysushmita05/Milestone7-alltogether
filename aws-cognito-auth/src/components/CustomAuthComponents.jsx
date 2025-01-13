import React from 'react';
import {
  Button,
  Heading,
  Text,
  TextField,
  View,
} from '@aws-amplify/ui-react';

export function SignIn({ validationErrors }) {
  return (
    <View as="form" margin="3rem 0">
      <Heading level={3}>Sign in to your account</Heading>
      <TextField
        name="username"
        placeholder="Enter your email"
        label="Email"
        margin="1rem 0"
        isRequired={true}
      />
      <TextField
        name="password"
        placeholder="Enter your password"
        label="Password"
        type="password"
        margin="1rem 0"
        isRequired={true}
      />
      {validationErrors && (
        <Text color="red" fontSize="0.8rem">
          {validationErrors}
        </Text>
      )}
      <Button type="submit" variation="primary">
        Sign In
      </Button>
    </View>
  );
}

export function SignUp({ validationErrors }) {
  return (
    <View as="form" margin="3rem 0">
      <Heading level={3}>Create a new account</Heading>
      <TextField
        name="username"
        placeholder="Enter your email"
        label="Email"
        margin="1rem 0"
        isRequired={true}
      />
      <TextField
        name="password"
        placeholder="Enter your password"
        label="Password"
        type="password"
        margin="1rem 0"
        isRequired={true}
      />
      <TextField
        name="confirm_password"
        placeholder="Confirm your password"
        label="Confirm Password"
        type="password"
        margin="1rem 0"
        isRequired={true}
      />
      {validationErrors && (
        <Text color="red" fontSize="0.8rem">
          {validationErrors}
        </Text>
      )}
      <Button type="submit" variation="primary">
        Create Account
      </Button>
    </View>
  );
}

export function ConfirmSignUp() {
  return (
    <View as="form" margin="3rem 0">
      <Heading level={3}>Confirm Sign Up</Heading>
      <TextField
        name="confirmation_code"
        placeholder="Enter your confirmation code"
        label="Confirmation Code"
        margin="1rem 0"
        isRequired={true}
      />
      <Button type="submit" variation="primary">
        Confirm
      </Button>
    </View>
  );
}

