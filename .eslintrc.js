module.exports = {
    "extends": [
      // eslint-plugin-vue(.vueファイルのtemplateとscriptのlint)をextend
      "plugin:vue/recommended",
      // eslint-config-standardをextend
      "standard",
    ],
    "parserOptions": {
      // ecmaVersionを指定
      "ecmaVersion": 6,
      // type="module"をサポート
      "sourceType": "module",
      // parserを指定
      "parser": "babel-eslint",
    },
    "env": {
      // browserが持っているオブジェクトをサポート
      "browser": true,
      // ES2015以降に追加された組み込みオブジェクトをサポート
      "es6": true
    },
    "globals": {},
    "rules": {
      "semi": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "no-new": "off",
    }
}
