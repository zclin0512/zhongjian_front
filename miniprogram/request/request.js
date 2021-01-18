// 同时发送异步代码的次数
export const request = (params) => {
    // 定义公共的url
    const baseUrl = "";
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            header: header,
            url: baseUrl + params.url,
            success: (result) => {
                resolve(result.data.message);
            },
            fail: (err) => {
                reject(err);
            },
        });
    })
}