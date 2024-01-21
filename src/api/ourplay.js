import axios from 'axios';

// 사용자
export const _login = async (params) => {
    return await $api.post('/ourplay/user/login', params);
};
export const _createUser = async (params) => {
    return await $api.post('/ourplay/user/create', params);
};
export const _changePassword = async (params) => {
    return await $api.post('/ourplay/user/changePassword', params);
};

// 스토어
// export const _getStore = async (storeId) => {
//     return await $api.get(`/ourplay/store/${storeId}`);
// };
export const _getStoreList = async () => {
    return await $api.get('/ourplay/store/list');
};
export const _getStore = async (storeNo) => {
    return await $api.get('/ourplay/store/' + storeNo);
};
export const _getStoreNo = async (userId) => {
    return await $api.get('/ourplay/store/findNo/' + userId);
};
export const _updateStore = async (params) => {
    return await $api.put('/ourplay/store/update', params);
};
export const _insertStore = async (params) => {
    return await $api.post('/ourplay/store/create', params);
};


//음악
export const _insertMusic = async (params) => {
    return await $api.post('/ourplay/music/regist', params);
};

//음악 리스트
export const _getMusicList = async (storeNo) => {
    return await $api.get('/ourplay/music/list/' + storeNo);
};
export const _updateMusic = async (reqSongNo) => {
    return await $api.put('/ourplay/music/update/', reqSongNo);
};