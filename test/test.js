import getid, { create } from '../src/get-id';
import assert from 'assert';

describe('get-id', function() {

	it('should generate an id for objects', function() {

		const object = {};

		const objectid = getid(object);
		assert.notStrictEqual(objectid, undefined);

		const objectidagain = getid(object);
		assert.strictEqual(objectid, objectidagain);

	});

	it('should generate an id for functions', function() {

		const fn = function someFunction() { };

		const fnid = getid(fn);
		assert.notStrictEqual(fnid, undefined);

		const fnidagain = getid(fn);
		assert.strictEqual(fnid, fnidagain);

	});

	it('should generate an id for objects, with a custom id', function() {

		const customidkey = 'a_custom_id_key';
		const getidcustom = create(customidkey);
		const object = {};

		const objectid = getidcustom(object);
		assert.notStrictEqual(objectid, undefined);

		const objectidagain = getidcustom(object);
		assert.strictEqual(objectid, objectidagain);

		assert.strictEqual(object[customidkey], objectid);

	});

});
