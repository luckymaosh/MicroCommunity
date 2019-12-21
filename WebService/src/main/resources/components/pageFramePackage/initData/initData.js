(function (vc) {
    vc.extends({
        data: {
            initDataInfo: {}
        },
        _initMethod: function () {

        },
        _initEvent: function () {
            vc.on('initData', 'loadCommunityInfo', function (_param) {
                vc.component._loadCommunityInfo(_param);
            })
        },
        methods: {
            _loadCommunityInfo: function (_param) {
                vc.http.get('initData',
                    'getCommunitys',
                    '',
                    function (json, res) {
                        if (res.status == 200) {
                            var _communityInfos = JSON.parse(json);
                            if (_communityInfos != null && _communityInfos.length > 0) {
                                vc.setCurrentCommunity(_communityInfos[0]);
                                vc.setCommunitys(_communityInfos);
                            }
                            vc.jumpToPage(_param.url);
                        }
                    }, function () {
                        console.log('请求失败处理');
                        vc.jumpToPage(_param.url);
                    }
                );
            }
        }
    });


})(window.vc);