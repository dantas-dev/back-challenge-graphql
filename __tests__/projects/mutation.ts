const createProjectMutation = `
  mutation CreateProject ($projectInput: ProjectInput!) {
    createProject(projectInput: $projectInput) {
      id
      name
      price
    }
  }
`;

export { createProjectMutation };
