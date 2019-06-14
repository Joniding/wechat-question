function t(t, e, o) {
    return new Promise(function(n, i) {
        wx.request({
            url: e,
            method: t,
            data: o,
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                console.log('服务端返回结果：');
                console.log(t);
                setTimeout(function() {
                    wx.hideLoading();
                }, 100), "200" == t.data.status_code ? n(t) : wx.showModal({
                    title: "提示",
                    content: t.data.err + "系统异常",
                    confirmColor: "#118EDE",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm;
                    }
                });
            },
            fail: function(t) {
                setTimeout(function() {
                    wx.hideLoading();
                }, 100), wx.showToast({
                    title: "服务器暂时无法连接",
                    icon: "loading",
                    duration: 2e3
                }), i(t);
            }
        });
    });
}

module.exports = {
    wxPromise: t,
    postRequest: function(e, o) {
        return t("POST", e, o);
    },
    getRequest: function(e, o) {
        return t("GET", e, o);
    }
};