# get-id

[![Build Status](https://travis-ci.org/janeklb/get-id.svg?branch=master)](https://travis-ci.org/janeklb/get-id)

Keep track of your JS objects (and functions) via a unique id.

Install:
```bash
npm install --save get-id
```

Usage:
```javascript
import getid from 'get-id'
// or:
// var getid = require('get-id');

var object  = {},
    object2 = {};

var objid  = getid(object);
var obj2id = getid(object2);

objid  === getid(object);
obj2id === getid(object2);

```

### What's happening?
`getid` assigns an id (int) to a non-enumerable, non-writable property on the
passed object or function under the key `__object_id__`, and then returns it.

### Using a custom id property name
If for whatever reason you don't want to use the `__object_id__` key, you can
generate a custom `getid` function using the exported `create` function:
```javascript
import { create as create_getid } from 'get-id';

const customgetid = create_getid('__this_is_a_custom_key');
const object = {};
const objectid = customgetid(object);

objectid === object['__this_is_a_custom_key'];
```
