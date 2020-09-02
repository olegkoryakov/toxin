import './scss/style.scss';
import './ts/app';

const importAll = (r: __WebpackModuleApi.RequireContext) => {
  const keys = r.keys();
  keys.map(r);
};

importAll(require.context('./', true, /img\/(.*)\.(png|jpg|svg)$/));
