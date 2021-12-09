export default (nodes: any[], after: number) => {
  return nodes.map((node, index: number) => ({
    cursor: (index + after + 1),
    node,
  }));
};
