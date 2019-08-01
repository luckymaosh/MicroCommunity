/**
    导航栏
**/
(function(vc){
    var vm = new Vue({
        el:'#nav',
        data:{
            nav:{},
            userName:"",
            navCommunityInfo:{
                _currentCommunity:{

                },
                communityInfos:[]
            }
        },
        mounted:function(){
            this.getNavCommunity();
            this.getNavData();
            //this.getUserInfo();
        },
        methods:{
            getNavData:function(){

                var param = {
                    msg:'123',
                };

                //发送get请求
               vc.http.get('nav',
                            'getNavData',
                             param,
                             function(json){
                                vm.nav = JSON.parse(json);
                             },function(){
                                console.log('请求失败处理');
                             }
                           );

            },
            logout:function(){
                var param = {
                    msg:123
                };
                  //发送get请求
               vc.http.post('nav',
                            'logout',
                            JSON.stringify(param),
                           {
                               emulateJSON:true
                            },
                             function(json,res){
                               if(res.status == 200){
                                   vc.jumpToPage("/flow/login");
                                   return ;
                               }
                             },function(){
                                console.log('请求失败处理');
                             }
                           );
            },
            getUserInfo:function(){
//                var _userInfo = vc.getData("_userInfo");
//                //浏览器缓存中能获取到
//                if(_userInfo != null && _userInfo != undefined){
//                    vm.userName = _userInfo.name;
//                    return ;
//                }
                //获取用户名
                var param = {
                                    msg:'123',
                };

                //发送get请求
               vc.http.get('nav',
                            'getUserInfo',
                             param,
                             function(json,res){
                                if(res.status == 200){
                                    var tmpUserInfo = JSON.parse(json);
                                    console.log(vm,tmpUserInfo);
                                   vm.userName = tmpUserInfo.name;
//                                   vc.saveData("_userInfo",tmpUserInfo);
                               }
                             },function(){
                                console.log('请求失败处理');
                             }
                           );
            },
            getNavCommunity:function(){
                var _tmpCurrentCommunity = vc.getCurrentCommunity();
                //浏览器缓存中能获取到
                if(_tmpCurrentCommunity != null && _tmpCurrentCommunity != undefined){
                    this.navCommunityInfo._currentCommunity = _tmpCurrentCommunity;
                    this.navCommunityInfo.communityInfos = vc.getCommunitys();

                    return ;
                }

                //说明缓存中没有数据
                //发送get请求
                /**
                    [{community:"123123",name:"测试1小区"},{community:"223123",name:"测试2小区"}]
                **/
               vc.http.get('nav',
                            'getCommunitys',
                             '',
                             function(json,res){
                                if(res.status == 200){
                                    vm.navCommunityInfo.communityInfos = JSON.parse(json);

                                    if(vm.navCommunityInfo.communityInfos == null || vm.navCommunityInfo.communityInfos.length == 0){
                                          vm.navCommunityInfo._currentCommunity ={
                                                name:"还没有入驻小区"
                                          };
                                          return;
                                    }

                                    vm.navCommunityInfo._currentCommunity = vm.navCommunityInfo.communityInfos[0];
                                    vc.setCurrentCommunity(vm.navCommunityInfo._currentCommunity);
                                    vc.setCommunitys(vm.navCommunityInfo.communityInfos);

                                    //对首页做特殊处理，因为首页在加载数据时还没有小区信息 会报错
                                    if(vm.navCommunityInfo.communityInfos != null && vm.navCommunityInfo.communityInfos.length > 0){
                                        vc.emit("indexContext","_queryIndexContextData",{});
                                        vc.emit("indexArrears","_listArrearsData",{});
                                    }

                               }
                             },function(){
                                console.log('请求失败处理');
                             }
                           );

            },
            changeCommunity:function(_community){
                 vc.setCurrentCommunity(_community);
            }
        }


    });

     vm.getUserInfo();

})(window.vc);