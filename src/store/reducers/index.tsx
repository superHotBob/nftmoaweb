import { combineReducers } from 'redux';

const req = require.context('.', true, /^(?!.\/index).*..tsx$/);

const modules: IStore | any = {};

req.keys().forEach((key: any) => {
  const regex = /.\/(.*?).tsx$/;
  const moduleName = regex.test(key) && key.match(regex)[1];
  modules[moduleName] = req(key).reducer;
});

export default combineReducers(modules);
