const projectsQuery = `
  query ListProjects($projectInputByName: ProjectInputByName!) {
    projects(projectInputByName: $projectInputByName) {
      id
      name
      price
    }
  }
`;

const projectByIdQuery = `
  query FindProjectById($options: ProjectInputById!) {
    project(options: $options) {
      id
      name
      price
    }
  }
`;

export { projectsQuery, projectByIdQuery };
