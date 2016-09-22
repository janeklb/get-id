
const default_key = '__object_id__';
var idcounter = 0;

function create(id_key) {
	return function get_id(object) {

		if (object[id_key] === undefined) {
			Object.defineProperty(object, id_key, { value: ++idcounter });
		}

		return object[id_key];
	};
}

const get_id = create(default_key);

export default get_id;
export { create };
