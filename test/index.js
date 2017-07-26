import isDefined from "../index";
let assert = require('assert');

let user = {depth1: {depth2: "test", depth2null: null} };

assert(isDefined(user.test) === false);

assert(isDefined(user));

assert(isDefined(user, 'depth1.depth2null') === false);

assert(isDefined(user, 'depth1.depth3.fdsafads') === false);

assert(isDefined(user, 'depth1.depth2') );

