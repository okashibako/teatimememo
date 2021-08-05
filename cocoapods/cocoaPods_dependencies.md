Cocoapadが入っていないよとエラーを受ける時

Installing CocoaPods dependencies (this may take a few minutes)
✖ Installing CocoaPods dependencies (this may take a few minutes)
error Error: Failed to install CocoaPods dependencies for iOS project, which is required by this template

cocoapodsを含むライブラリをインストールできませんでしたということ。

要するにcocoapodsが無いのにビルドしようとしたので止められたということ。

無論このままではビルドができないので修正。

修正方法は以下のフローチャートを参考に。

1.xcodeを開く

2.Preferencesを開く

3. Locationsタブを開く

4.xcodeのコマンドラインツールのバージョンを変更する
※やらなくていい場合もある

5アプリ直下にあるcocoapodsをアンインストール
$ sudo gem uninstall cocoapods

6.xcodeprojをインストール
sudo gem install xcodeproj

7.cocoapodsをインストール
sudo gem install cocoapods