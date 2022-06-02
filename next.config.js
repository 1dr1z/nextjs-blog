const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_url: `mongodb+srv://idriz:root@cluster0.4cdug.mongodb.net/my-site-dev?retryWrites=true&w=majority`,
      },
    };
  }

  return {
    env: {
      mongodb_url: `mongodb+srv://idriz:root@cluster0.4cdug.mongodb.net/my-site?retryWrites=true&w=majority`,
    },
  };
};
