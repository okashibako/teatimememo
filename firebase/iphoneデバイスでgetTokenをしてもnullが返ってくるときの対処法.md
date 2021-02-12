iphoneデバイスでgetTokenをしてもnullが返ってくるときの対処法

cordova-plugin-fcmのgetToken関数でiphoneのみトークンがnullになる時は、まずAPNsキーのKeyIdが存在

するか確かめたほうがいい。

以下firebaseコンソールでAPNs認証キーを作った前提での確認方法

①AppleDeveloperのCertificates, Identifiers&Profilesでkeysを開く

すると、今現在使用可能なkeys一覧が表示される。

②この中のkeyIdとfirebaseコンソールで登録したAPNs認証キーのkeyIdが一致するかどうか確かめる。

一致しなかった場合はCloudMessagingに移動して、今あるAPNs認証キーをfirebaseコンソールから削除

③keysの中の適当なkeyIdとkeysを作る時に補完したp8ファイルを基にAPNsキーを作り直す。

④その後にGoogleService-Info.plistを発行してアプリ直下にコピーする。

⑤firebaseで登録したapiキーとGoogleService-Info.plistのapiキーを比較する。

違っていた場合はfirebase側のapiキーをGoogleService-Info.plistの中のapiキーに上書きコピー。

これでいけるはず。