# isDefined
It is daunting task to check undefined variable especially when the item is nested object.
Fundamental update of JS is ideal but this will help the problem until it is solved by JS itself.

If the item's depth is only 1 depth, you should use this way.
if (isDefined(depth0.depth1) ) 

If the item's depth is more than 1 depth, you should use this way.
if (isDefined(depth0, "depth1.depth2.depth3"))

# Example from test/index.js
import isDefined from "../distribution/index";
let assert = require('assert');

let user = {depth1: {depth2: "test"} };

assert(isDefined(user.test) === false);

assert(isDefined(user));

assert(isDefined(user, 'depth1.depth3.fdsafads') === false);

assert(isDefined(user, 'depth1.depth2') );
