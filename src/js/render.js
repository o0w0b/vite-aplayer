// render.js
import nunjucks from 'nunjucks';

export function compile(tmpl) {
    return function (data) {
        return nunjucks.renderString(tmpl, data);
    };
}
