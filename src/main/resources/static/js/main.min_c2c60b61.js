var __reflect=this&&this.__reflect||function(t,e,r){t.__class__=e,r?r.push(e):r=[e],t.__types__=t.__types__?r.concat(t.__types__):r},__extends=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);r.prototype=e.prototype,t.prototype=new r},__awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(i,s){function a(t){try{h(n.next(t))}catch(e){s(e)}}function o(t){try{h(n["throw"](t))}catch(e){s(e)}}function h(t){t.done?i(t.value):new r(function(e){e(t.value)}).then(a,o)}h((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function r(t){return function(e){return n([t,e])}}function n(r){if(i)throw new TypeError("Generator is already executing.");for(;h;)try{if(i=1,s&&(a=s[2&r[0]?"return":r[0]?"throw":"next"])&&!(a=a.call(s,r[1])).done)return a;switch(s=0,a&&(r=[0,a.value]),r[0]){case 0:case 1:a=r;break;case 4:return h.label++,{value:r[1],done:!1};case 5:h.label++,s=r[1],r=[0];continue;case 7:r=h.ops.pop(),h.trys.pop();continue;default:if(a=h.trys,!(a=a.length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){h=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){h.label=r[1];break}if(6===r[0]&&h.label<a[1]){h.label=a[1],a=r;break}if(a&&h.label<a[2]){h.label=a[2],h.ops.push(r);break}a[2]&&h.ops.pop(),h.trys.pop();continue}r=e.call(t,h)}catch(n){r=[6,n],s=0}finally{i=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var i,s,a,o,h={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:r(0),"throw":r(1),"return":r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},Gamebtn=function(t){function e(){var e=t.call(this)||this;return e.skinName="gamebtn",e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(){this.btn_easy.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onEasyClick,this),this.btn_normal.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNormalClick,this),this.btn_hard.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onHardClick,this)},e.prototype.onEasyClick=function(){this.dispatchEventWith("starteasy")},e.prototype.onNormalClick=function(){this.dispatchEventWith("startnormal")},e.prototype.onHardClick=function(){this.dispatchEventWith("starthard")},e}(eui.Component);__reflect(Gamebtn.prototype,"Gamebtn");var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,r){function n(n){e.call(r,n,t)}if(RES.hasRes(t)){var i=RES.getRes(t);i?n(i):RES.getResAsync(t,n,this)}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(r){switch(r.label){case 0:return[4,this.loadResource()];case 1:return r.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=r.sent(),[4,platform.login()];case 3:return r.sent(),[4,platform.getUserInfo()];case 4:return e=r.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return r.sent(),[4,this.loadTheme()];case 2:return r.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return r.sent(),this.stage.removeChild(t),[3,5];case 4:return e=r.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,r){var n=new eui.Theme("resource/default.thm.json",t.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){this.rootStagW=this.stage.stageWidth,this.rootStagH=this.stage.stageHeight;var t=new puzzle;t.x=0,t.y=80,this.addChild(t)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,r,n){function i(t){e.call(n,t)}function s(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),r.call(n))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(n,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,r){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(n,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var o=t.split("/");o.pop();var h=o.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(n,generateJSON.paths[t])},this):RES.getResByUrl(h,function(r){window.JSONParseClass.setData(r),egret.callLater(function(){e.call(n,generateJSON.paths[t])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(n,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var GameData=function(){function t(){}return t.LENGTH=630,t.LEVEL_EASY=3,t.LEVEL_NORMAL=4,t.LEVEL_HARD=5,t.step=0,t.one=["p0_01_png","p0_02_png","p0_03_png","p0_04_png","p0_05_png","p0_06_png","p0_07_png","p0_08_png","block_png"],t.onenor=["p1_01_png","p1_02_png","p1_03_png","p1_04_png","p1_05_png","p1_06_png","p1_07_png","p1_08_png","p1_09_png","p1_10_png","p1_11_png","p1_12_png","p1_13_png","p1_14_png","p1_15_png","blocknor_png"],t.onehar=["p3_01_png","p3_02_png","p3_03_png","p3_04_png","p3_05_png","p3_06_png","p3_07_png","p3_08_png","p3_09_png","p3_10_png","p3_11_png","p3_12_png","p3_13_png","p3_14_png","p3_15_png","p3_16_png","p3_17_png","p3_18_png","p3_19_png","p3_20_png","p3_21_png","p3_22_png","p3_23_png","p3_24_png","blockhar_png"],t}();__reflect(GameData.prototype,"GameData");var GameOverPanel=function(t){function e(){var e=t.call(this)||this;return e.ma=new Main,e.init(),e.touchEnabled=!0,e.addEventListener(egret.TouchEvent.TOUCH_TAP,e.isClick,e),e}return __extends(e,t),e.prototype.isClick=function(){console.log("gameover click"),this.dispatchEventWith("restart")},e.prototype.init=function(){this.graphics.lineStyle(3,12303291,.8),this.graphics.beginFill(15064025),this.graphics.drawRoundRect(0,0,this.ma.rootStagW-20,this.ma.rootStagW/3,60,60),this.graphics.endFill(),this.alpha=.8,this.tittle=new egret.TextField,this.tittle.text="Success !",this.tittle.size=50,this.tittle.stroke=3,this.tittle.strokeColor=5592405,this.tittle.textColor=16777215,this.tittle.x=(this.width-this.tittle.width)/2,this.tittle.y=30,this.addChild(this.tittle),this.stepTxt=new egret.TextField,this.stepTxt.text="你一共走了 "+GameData.step+" 步",this.stepTxt.size=35,this.stepTxt.stroke=3,this.stepTxt.strokeColor=5592405,this.stepTxt.textColor=16777215,this.stepTxt.x=(this.width-this.stepTxt.width)/2,this.stepTxt.y=180,this.addChild(this.stepTxt),this.tipTxt=new egret.TextField,this.tipTxt.text="- 点击这里返回选择界面 -",this.tipTxt.size=40,this.tipTxt.stroke=3,this.tipTxt.strokeColor=5592405,this.tipTxt.textColor=16777215,this.tipTxt.x=(this.width-this.tipTxt.width)/2,this.tipTxt.y=330,this.addChild(this.tipTxt)},e}(egret.Sprite);__reflect(GameOverPanel.prototype,"GameOverPanel");var GameStartPanel=function(t){function e(){var e=t.call(this)||this;return e.init(),e}return __extends(e,t),e.prototype.init=function(){this.startUI=new Gamebtn,this.startUI.addEventListener("starteasy",this.onClickEasy,this),this.startUI.addEventListener("startnormal",this.onClickNormal,this),this.startUI.addEventListener("starthard",this.onClickHard,this),this.addChild(this.startUI)},e.prototype.onClickEasy=function(){console.log("starteasy"),this.parent.removeChild(this),this.dispatchEventWith("starteasy")},e.prototype.onClickNormal=function(){this.parent.removeChild(this),this.dispatchEventWith("startnormal")},e.prototype.onClickHard=function(){this.parent.removeChild(this),this.dispatchEventWith("starthard")},e}(egret.Sprite);__reflect(GameStartPanel.prototype,"GameStartPanel");var puzzle=function(t){function e(){var e=t.call(this)||this;return e.Block_v=8,e.addGameStartPanel(),e}return __extends(e,t),e.prototype.addGameStartPanel=function(){this.gameStartPanel=new GameStartPanel,this.gameStartPanel.y=-65,this.addChild(this.gameStartPanel),this.gameStartPanel.addEventListener("starteasy",this.gameStartOfEasy,this),this.gameStartPanel.addEventListener("startnormal",this.gameStartOfNormal,this),this.gameStartPanel.addEventListener("starthard",this.gameStartOfHard,this)},e.prototype.gameStartOfEasy=function(){console.log("easy"),this.currentLevel=GameData.LEVEL_EASY,this.Block_v=this.currentLevel*this.currentLevel-1,this.partsNum=this.Block_v+1,this.partLen=GameData.LENGTH/GameData.LEVEL_EASY,this.init(GameData.one),this.gameStart()},e.prototype.gameStartOfNormal=function(){this.currentLevel=GameData.LEVEL_NORMAL,this.Block_v=this.currentLevel*this.currentLevel-1,this.partsNum=this.Block_v+1,this.partLen=GameData.LENGTH/GameData.LEVEL_NORMAL,this.init(GameData.onenor),this.gameStart()},e.prototype.gameStartOfHard=function(){this.currentLevel=GameData.LEVEL_HARD,this.Block_v=this.currentLevel*this.currentLevel-1,this.partsNum=this.Block_v+1,this.partLen=GameData.LENGTH/GameData.LEVEL_HARD,this.init(GameData.onehar),this.gameStart()},e.prototype.gameStart=function(){this.upset(),this.show(),this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPuzzleClick,this)},e.prototype.upset=function(){this.currentOrder.sort(function(){return.5-Math.random()});for(var t=0,e=0,r=0;r<this.partsNum;r++){this.currentOrder[r]==this.Block_v&&(e=r);for(var n=0;r>n;n++)this.currentOrder[n]>this.currentOrder[r]&&t++}var i=e%this.currentLevel,s=(e-i)/this.currentLevel;t+=this.currentLevel-1-s+(this.currentLevel-1-i),t%2&&this.upset()},e.prototype.init=function(t){this.parts=[],this.currentOrder=[];for(var e=0;e<this.partsNum;e++)this.currentOrder.push(e);for(var r=0,e=0;e<this.currentLevel;e++)for(var n=0;n<this.currentLevel;n++){var i=new Puzpart;i.createImg(t[r],this.currentLevel),i.setimgNumber(r++),i.Loc_x=e,i.Loc_y=n,this.parts.push(i)}},e.prototype.show=function(){for(var t=this.currentLevel,e=0,r=0;t>r;r++)for(var n=0;t>n;n++)this.parts[this.currentOrder[e]].Loc_x=r,this.parts[this.currentOrder[e]].Loc_y=n,this.parts[this.currentOrder[e]].x=5+this.partLen*n,this.parts[this.currentOrder[e]].y=5+this.partLen*r,this.currentOrder[e]==this.Block_v&&(this.currentBlock_x=r,this.currentBlock_y=n),this.addChild(this.parts[this.currentOrder[e]]),this.parts[this.currentOrder[e++]].show()},e.prototype.onPuzzleClick=function(t){var e=t.target.Loc_x,r=t.target.Loc_y;if(e==this.currentBlock_x&&1==Math.abs(r-this.currentBlock_y)){var n=r;r=this.currentBlock_y,this.currentBlock_y=n,this.changeBlock(e,r),GameData.step++,this.show()}else if(r==this.currentBlock_y&&1==Math.abs(e-this.currentBlock_x)){var n=e;e=this.currentBlock_x,this.currentBlock_x=n,this.changeBlock(e,r),GameData.step++,this.show()}this.judge()},e.prototype.changeBlock=function(t,e){var r=t*this.currentLevel+e,n=this.currentBlock_x*this.currentLevel+this.currentBlock_y,i=this.currentOrder[r];this.currentOrder[r]=this.currentOrder[n],this.currentOrder[n]=i},e.prototype.judge=function(){var t=0,e=0;for(e=0;e<this.partsNum&&this.currentOrder[e]==t;e++,t++);e==this.partsNum&&this.addGameOverPanel()},e.prototype.addGameOverPanel=function(){this.gameOverPanel=new GameOverPanel,this.gameOverPanel.x=15,this.gameOverPanel.y=(GameData.LENGTH-this.gameOverPanel.height)/2,this.addChild(this.gameOverPanel),this.gameOverPanel.addEventListener("restart",this.restart,this)},e.prototype.restart=function(){this.removeChildren(),this.addGameStartPanel()},e}(egret.Sprite);__reflect(puzzle.prototype,"puzzle");var Puzpart=function(t){function e(){var e=t.call(this)||this;return e.img=null,e.border=null,e.imgNumber=0,e.Loc_x=0,e.Loc_y=0,e.touchEnabled=!0,e}return __extends(e,t),e.prototype.createImg=function(t,e){this.img=new egret.Bitmap;var r=RES.getRes(t);this.img.texture=r,this.img.width=GameData.LENGTH/e,this.img.height=GameData.LENGTH/e,this.img.x=0,this.img.y=0},e.prototype.show=function(){this.border||(this.border=new egret.Sprite),this.border.graphics.lineStyle(1,13421772),this.border.graphics.drawRect(0,0,this.img.width,this.img.width),this.addChild(this.img),this.addChild(this.border)},e.prototype.setimgNumber=function(t){this.imgNumber=t},e.prototype.getimgNumber=function(){return this.imgNumber},e.getWidth=function(){return this.getWidth},e}(egret.Sprite);__reflect(Puzpart.prototype,"Puzpart");