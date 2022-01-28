import 'isomorphic-fetch';
import * as martian from './martian';
// const settings = martian.Settings.default;

// Key
// 43da137f1ff6440101e293833370832830efe9b2325bd9d435e1bcbdfb1b55b2
// Secret
// 66bc44d486e68e746e06cd42a11a2e10284d15438b1ac68afa2133266b1b178e
const settings = new martian.Settings({
    host: 'https://h7hbzrzw.mindtouch.es',
    token: '143f2f272f045ca3fd89843d313d408e57e7ebd5b488d83f4491766ac12372d6'
});


const userManager = new martian.UserManager(settings);
userManager.getCurrentUser().then((user) => {
    console.log(user);
    // do something with user.username, user.fullname, user.email, etc..
});


console.log('hello world');

