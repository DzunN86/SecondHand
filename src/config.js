export default {
  backendApi:
    process.env.NODE_ENV === 'production'
      ? 'https://market-final-project.herokuapp.com'
      : 'https://market-final-project.herokuapp.com',
};
