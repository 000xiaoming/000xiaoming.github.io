(function() {
  function changeLang() {
    var selectLang = this.value;
    var canonical = this.dataset.canonical || 'index.html';
    var isPost = this.dataset.isPost === 'true';
    var languages = Array.prototype.map.call(this.options, function(option) {
      return option.value;
    });
    var parts = canonical.split('/');
    if (languages.indexOf(parts[0]) !== -1) {
      parts.shift();
    }
    var suffix = parts.join('/') || 'index.html';
    var target = selectLang + '/' + suffix;
    if (!isPost && selectLang === languages[0]) {
      target = suffix;
    }

    location.href = location.origin + '/' + target.replace(/(^|\/)index\.html$/, '$1');
  }

  if (document.getElementById('lang-select')) {
    document.getElementById('lang-select').addEventListener('change', changeLang);
  }
}());
