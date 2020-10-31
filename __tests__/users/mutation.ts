const createUserMutation = `
  mutation CreateUser ($createUserInput: UserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      name
      email
    }
  }
`;

export { createUserMutation };
