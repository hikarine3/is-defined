import isDefined from "../distribution/index";
let assert = require('assert');

let user = {depth1: {depth2: "test"} };

assert(isDefined(user.test) === false);

assert(isDefined(user));

assert(isDefined(user, 'depth1.depth3.fdsafads') === false);

assert(isDefined(user, 'depth1.depth2') );

