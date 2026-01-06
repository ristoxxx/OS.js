module.exports = (core, args, options) => {
  return core.make('osjs/application', {
    title: 'Portfolio',
    width: 1000,
    height: 700,
    iframe: {
      src: 'https://sunprojekti.vercel.app'
    }
  });
};
