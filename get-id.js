'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var default_key = '__object_id__';
var idcounter = 0;

function create(id_key) {
	return function (object) {
		if (object[id_key] === undefined) {
			Object.defineProperty(object, id_key, { value: ++idcounter });
		}
		return object[id_key];
	};
}

exports.default = create(default_key);
exports.create = create;