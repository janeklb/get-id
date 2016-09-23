
const default_key = '__object_id__';
var idcounter = 0;

function create(id_key) {
	return (object) => {
		if (object[id_key] === undefined) {
			Object.defineProperty(object, id_key, { value: ++idcounter });
		}
		return object[id_key];
	};
}

export default create(default_key);
export { create };
