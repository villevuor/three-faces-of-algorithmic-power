export default (config, env, helpers) => {
  config.devServer.proxy = [
    {
      path: '/auth/**',
      target: 'http://localhost:5000',
    }
  ];
};