# How to install
npm install hikaine3/is-defined

# Purpose
It is daunting task to check undefined variable especially when the item has multiple tiers as an object.
This module is for reducing the conding for it.

# Usage
If the item's depth is only 1 depth or 0 depth, you should use this way.

if (isDefined(depth0)) 

if (isDefined(depth0.depth1)) 

If the item's depth is more than 1 depth, you should use this way.

if (isDefined(depth0, "depth1.depth2.depth3"))

# Example from test/index.js
import isDefined from "@hikarine3/is-defined";

let assert = require('assert');

let user = {depth1: {depth2: "test"} };

assert(isDefined(user.test) === false);

assert(isDefined(user));

assert(isDefined(user, 'depth1.depth3.fdsafads') === false);

assert(isDefined(user, 'depth1.depth2') );
