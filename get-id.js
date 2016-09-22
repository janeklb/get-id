'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var default_key = '__object_id__';
var idcounter = 0;

function create(id_key) {
	return function get_id(object) {

		if (object[id_key] === undefined) {
			Object.defineProperty(object, id_key, { value: ++idcounter });
		}

		return object[id_key];
	};
}

var get_id = create(default_key);

exports.default = get_id;
exports.create = create;