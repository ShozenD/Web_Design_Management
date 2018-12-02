const Util = {
    // Filters an object by removing illegal keys
    obj_filter: (raw_obj, allowed_keys) => {
        let filtered_obj = {};

        Object.keys(raw_obj)
        .filter(key => allowed_keys.includes(key))
        .map(e => filtered_obj[e] = raw_obj[e]);

        return filtered_obj;
    }
}

module.exports = Util;