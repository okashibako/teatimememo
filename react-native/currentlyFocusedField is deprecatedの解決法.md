react-native-router-fluxを使って他の画面に飛ぼうとすると

currentlyFocusedField is deprecated and will be removed in a future release

とエラーが出る。というか見た目はエラーっぽいけど遷移は成功するので恐らくただの警告。

なお、同じ遷移系ライブラリreact-navigation/nativeでも全く同じエラーが出るもよう。

・・・このままでもアプリ開発は続行できるけど使われなくなったcurrentlyFocusedFieldが後々バグの原因となりかねんということで

エラー除去をすることに。

package.json内

"dependencies": {
    "@react-navigation/native": "^5.7.3",
    "react": "16.13.1",
    "react-native": "^0.63.2",
    "react-native-gesture-handler": "^1.7.0",
    "react-native-reanimated": "^1.13.0",
    "react-native-router-flux": "^4.2.0",
    "react-native-screens": "^2.10.1"
  },
  "devDependencies": {
    "@babel/core": "7.11.1",
    "@babel/runtime": "7.11.2",
    "@react-native-community/eslint-config": "1.1.0",
    "babel-jest": "25.5.1",
    "eslint": "6.8.0",
    "jest": "25.5.4",
    "metro-react-native-babel-preset": "0.59.0",
    "react-test-renderer": "16.13.1"
  },


C:\Users\mypc\Documents\stampapp\node_modules\react-navigation\
node_modules\@react-navigation\native\lib\module\createKeyboardAwareNavigator.js

参考リンク↓
https://github.com/aksonov/react-native-router-flux/issues/3691


解決法↓
コード内のTextInput.State.currentlyFocusedField();をTextInput.State.currentlyFocusedInput();に変更

することで修正することができる。


currentlyFocusedFieldは非推奨で使われなくなるとのことだったので探すまでなんのこっちゃと思っていた

のですがこれを見てようやく納得がいきました。

裏技としてLogBox.ignoreAllLogs()を使うことでエラーログをスルーすることもできますが、開発者としてやはり気持ち悪いというか

細かいエラーも見過ごせない気持ちになってくるので個人的にはあんまり使いたくないです。

