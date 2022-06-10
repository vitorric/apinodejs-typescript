import server from './app';

export default (async () => {
  server.listen(process.env.PORT, () => {
    console.log('Server running on port %d', process.env.PORT);
  });
})();
