import { combineEpics } from 'redux-observable';

const req = require.context('.', true, /^(?!.\/index).*..tsx$/);

let epics: any = [];

req.keys().forEach(key => {
  epics = epics.concat(req(key).default);
});

export default combineEpics(...epics);
