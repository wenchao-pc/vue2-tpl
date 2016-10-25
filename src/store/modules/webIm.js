/**
 * Created by kuo zi on 2016/10/20.
 */
const conn = new WebIM.connection({
  https: WebIM.config.https,
  url: WebIM.config.xmppURL,
  isAutoLogin: WebIM.config.isAutoLogin,
  isMultiLoginSessions: WebIM.config.isMultiLoginSessions
});
conn.listen({
  //连接成功回调
  onOpened: function (message) {
    //如果isAutoLogin设置为false，那么必须手动设置上线，否则无法收消息
    conn.setPresence();
    (state.loginCallback)(message);
  },
  //连接关闭回调
  onClosed: function (message) {
  },
  //收到文本消息
  onTextMessage: function (message) {
  },
  //收到表情消息
  onEmojiMessage: function (message) {
  },
  //收到图片消息
  onPictureMessage: function (message) {
  },
  //收到命令消息
  onCmdMessage: function (message) {
  },
  //收到音频消息
  onAudioMessage: function (message) {
  },
  //收到位置消息
  onLocationMessage: function (message) {
  },
  //收到文件消息
  onFileMessage: function (message) {
  },
  //收到视频消息
  onVideoMessage: function (message) {
  },
  //收到联系人订阅请求、处理群组、聊天室被踢解散等消息
  onPresence: function (message) {
  },
  //处理好友申请
  onRoster: function (message) {
  },
  //处理群组邀请
  onInviteMessage: function (message) {
  },
  //本机网络连接成功
  onOnline: function () {
  },
  //本机网络掉线
  onOffline: function () {
  },
  //失败回调
  onError: function (message) {
    console.error(message);
  }
});
const state = {
  conn: conn,
  loginCallback: null
};

const mutations = {
  login(state, params){
    state.loginCallback = params.loginCallback;
    state.conn.open({
      apiUrl: WebIM.config.apiURL,
      user: params.userName,
      pwd: params.pwd,
      appKey: "easemob-demo#chatdemoui"
    });
  },
  addUser(state, params){
    EMClient.getInstance().contactManager().addContact(params.toAddUsername, params.reason);

  }
};

const actions = {};

export default {
  state,
  mutations,
  actions
};
