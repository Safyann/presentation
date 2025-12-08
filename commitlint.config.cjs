// eslint-disable-next-line no-undef
module.exports = {
  rules: {
    "commit-rule": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "commit-rule": ({ raw }) => {
          const taskName = raw.match(/^\S+:/)?.[0];

          if (!taskName?.trim()) {
            return [false, "You have not specified the task name"];
          }

          const description = raw.match(/:(.+)/)?.[1];

          if (!description?.trim()) {
            return [false, "You have not specified the description"];
          }

          if (/[а-яА-Я]/g.test(description)) {
            return [false, "Do not use Russian words"];
          }

          return [true, ""];
        },
      },
    },
  ],
};
