//  Use computed property names when creating objects with dynamic property names.

const assignDynamicProps = (para) => {
  return `element when ${para}`;
};

const eobj = {
  id: 1,
  [assignDynamicProps("enabled")]: true,
};

const dobj = {
  id: 2,
  [assignDynamicProps("disabled")]: true,
};
