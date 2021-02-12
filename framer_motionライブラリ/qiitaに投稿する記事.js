framer-motionライブラリの使い方

framerが提供しているコンポーネントにアニメーションを付与することができる。

<motion.div>タグでJSXを包むことでページ遷移にもアニメーションをつけることができる。

導入方法

①npm install framer-motionでインストールする

②AppRouterページでswitchタグを<AnimatePresence>タグと<motion.div>タグで囲む

包んだswitchにはlocationとkeyを設定する。locationはどこのページにいるかframer-motionに教える役割を

持っており、これが設定されていないとアニメーションが機能しない。keyにはlocation.pathnameを設定。これは

パス名。ここではloginやtitleが該当する。

HashRouterを使っている場合はRoute render={({ location }) => ()}で取得することができる。

import { AnimatePresence, motion } from "framer-motion";

<Router>
    <Route
        render={({ location }) => (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div>
            <Switch location={location} key={location.pathname}>
                <Route exact path="/" render={() => <Redirect to="/top" />} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/title" component={TitlePage} />
            </Switch>
            </motion.div>
        </AnimatePresence>
        )}
    />
    </Router>

これで下準備は完了。後はアニメーションを設定したいページにmotion.divを入れこむだけ。

ログインページもといサンプルページで実装するとこんな感じになります。

import { motion } from "framer-motion";
import { animationService } from '../../services/AnimationService';

class LoginPage extends Component {
  
  constructor(props) {
    super(props);
    const errors = {
      mail: "",
      password: "",
    };
    this.state = {
      animation: animationService.getAnimationMotions()
    }
  }
  render() {
    return (
      <Page>
        <LoginHeader title="ログイン" />
        <div id="login-page">
          <motion.div 
            animate={{x: 0}}
            initial={{x: 100}}
            exit={{x: -100}}
            transition={{duration: 0.2}}>
            <Button modifier="large" onClick={this.submit} disabled={this.state.isBtnDisabled}>ログイン</Button>
          </motion.div>
        </div>
      </Page>
    );
  }
}

export default withRouter(LoginPage);

motion.divのプロパティにそれぞれanimate,initial,exit,transitionと設定しています。遷移アニメーションで重要なのは始発点と終着点

であり、これをinitialとexitでそれぞれx地点のどこからアニメーションが始まるかまたは終了するかを設定する必要があります。

transitionにはアニメーションが動作する時間を設定します。

以上で基本的な実装は完了。他にもコンポーネントそのものにアニメーションを加えたりページによって遷移アニメーションを分けることもできるので

組み合わせ次第でよりリッチに見えるアプリを作ることができます。

initialとかexitの値をアプリで固定して使いたい場合は別ファイルでまとめて管理すると楽になります。

まとめ

react.jsでアニメーションを描画するのってめんどくさそうと思っていましたがこのライブラリはAppRouterを多少いじることに目を瞑れば

めちゃめちゃ便利ですね。