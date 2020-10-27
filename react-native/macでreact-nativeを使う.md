macでreact-nativeを使う

①homebrewをインストール

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

でインストールできる

②Node.JSをインストール

コマンドでbrew install nodeと入力

③watchmanをインストール

コマンドでbrew install watchmanと入力

④react-native-cliをインストール

npm install react-native-cliでインストール

⑤実際にアプリを立ち上げる

react-native init sampleApp

⑥エミュレータ―で起動

react-native run-ios

⑦react-nativeの説明文みたいのがでてくれば成功です。

