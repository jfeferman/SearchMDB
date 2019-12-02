import Container from './utils/Container';
import app from './providers/app';

export default () => {
  const ioc = new Container();
  app(ioc);
  return ioc;
};
