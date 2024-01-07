export const learnings = [
  {
    id: 1,
    title: "binaries as permissions",
    category: "null",
    content: `When assigning user roles, binaries are much more preferrable
      than strings. It is a lot simpler and straightforward because we don't 
      need to create each permission as a string and think of names for it.
      0000 for CRUD is a better alternative. Then, if we want to get the user 
      role value we can parse it to an Integer.`,
  },
];
