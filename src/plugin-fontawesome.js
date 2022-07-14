export function install(hook) {
  const faRegExp = /:fa[\w -]+:/gm;

  hook.beforeEach(content => {
    let faHtmlRendered = content.replace(faRegExp, function (m, code) {
      let rendered = `<i class="${m.replace(/:/gi, '')}"></i>`;
      return rendered;
    });
    return faHtmlRendered;
  });
  hook.afterEach(function (html, next) {
    let faHtmlRendered = html.replace(faRegExp, function (m, code) {
      let rendered = `<i class="${m.replace(/:/gi, '')}"></i>`;
      return rendered;
    });
    //console.log('faHtmlRendered: '+faHtmlRendered);
    next(faHtmlRendered);
  });
}
