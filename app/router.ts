'use strict';
import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/api/ping', controller.home.index);
  /** TEST: unregister consul */
  // router.get('/api/unregister', controller.home.unregister);

  // socket.io: 番茄钟同步
  app.io
    .of('/tomatobang')
    .route('load_tomato', app.io.controller.tomatobang.loadTomato);
  app.io
    .of('/tomatobang')
    .route('start_tomato', app.io.controller.tomatobang.startTomato);
  app.io
    .of('/tomatobang')
    .route('break_tomato', app.io.controller.tomatobang.breakTomato);
  app.io
    .of('/tomatobang')
    .route('disconnect', app.io.controller.tomatobang.disconnect);
  app.io.of('/tomatobang').route('logout', app.io.controller.tomatobang.logout);

  // socket.io: 聊天同步
  app.io.of('/chat').route('login', app.io.controller.chat.login);
  app.io.of('/chat').route('logout', app.io.controller.chat.logout);

  app.io.of('/chat').route('send_message', app.io.controller.chat.sendMessage);
  app.io
    .of('/chat')
    .route(
      'load_online_friend_list',
      app.io.controller.chat.loadOnlineFriendList
    );
  app.io
    .of('/chat')
    .route('request_add_request', app.io.controller.chat.requestAddFriend);
  app.io
    .of('/chat')
    .route('response_friend_request', app.io.controller.chat.responseAddFriend);
  app.io.of('/chat').route('disconnect', app.io.controller.chat.disconnect);

  // 版本管理
  router.get('/api/version', controller.version.findLatestVersion);
  // 选项
  router.get('/api/option', controller.version.list);

};
