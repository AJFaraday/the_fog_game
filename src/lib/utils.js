Utils = {
  build_element: (name, attrs = {}, style = {}) => {
    var el = document.createElement(name);
    Object.entries(attrs).forEach(attr => el.setAttribute(attr[0], attr[1]))
    if (Object.keys(style).length > 0) {
      Object.entries(style).forEach(style_rule => el.style[style_rule[0]] = style_rule[1]);
    }
    return el;
  },

  remove_from_array: (array, object) => {
    if (array.includes(object)) {
      array.splice(array.indexOf(object), 1);
    }
  },

  index_array: (size) => {
    return Array.from(new Array(size), (_, i) => {
      return i;
    });
  }
}

module.exports = Utils;
