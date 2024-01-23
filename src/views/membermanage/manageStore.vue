<template>
  <div id="list" class="">
    <!-- 리스트 카테고리 -->
    <!-- 리스트 컨텐츠 -->
    <div class="content bc8 " id="storelist">
      <div class="inner inner1104 w100 m_center">
        
        <!-- 공통 리스트 디자인 -->
        <div id="comp_lst_area">
          <ul class="comp_lst flex fxwrap">
            <li class="store_list">
                <div class="store_info">
                  <div class="store_no">
                    순서
                  </div>
                  <div class="store_name">
                    상호명
                  </div>
                  <div class="store_owner">
                    이름
                  </div>
                  <div class="store_id">
                    아이디
                  </div>
                  <div class="store_pass">
                    비밀번호
                  </div>
                  <div class="store_btn">
                    기능
                  </div>
                </div>
            </li>
            <!-- 리스트 each-->
              <li class="store_list" v-for="(item, index) in state.storeList" :key="index">
                <div class="store_info">
                  <div class="store_no" @click="goStoreList(item.storeNo)" style="cursor: pointer; border: 1px solid #ddd;border-radius: 10px;">
                    {{ item.storeNo }}
                  </div>
                  <div class="store_name">
                    <input type="text" class="wrt_ipt" v-model="item.storeNm">
                  </div>
                  <div class="store_owner">
                    <input type="text" class="wrt_ipt" v-model="item.storeOwnerNm">
                  </div>
                  <div class="store_id">
                    <input type="text" class="wrt_ipt" v-model="item.storeId" style="background: #dcdcdc; cursor:not-allowed" readonly="readonly">
                  </div>
                  <div class="store_pass">
                    <input type="text" class="wrt_ipt" v-model="item.storePassword">
                  </div>
                  <div class="store_btn">
                    <button class="btn_yellow w40 inner260" @click="updateStore(item)">수정</button>
                    <button class="btn_blue w40 inner260"
                    @click="qrOpenYn(item.storeNo)">QR</button>
                  </div>
                </div >

                <div class="qr_img" v-if="item.QROpen" @click="item.QROpen=false">
                  <div style="text-align: right;font-size: large;"><i style="margin:0" class="bi bi-x-square-fill"></i></div>
                  <img :src="item.QRcode">
                </div>
            </li>
            <!-- !리스트 each-->
            <li class="store_list">
                <div class="store_info">
                  <div class="store_no">
                    -
                  </div>
                  <div class="store_name">
                    <input type="text" class="wrt_ipt" placeholder="상호명" v-model="state.regStore.storeNm">
                  </div>
                  <div class="store_owner">
                    <input type="text" class="wrt_ipt" placeholder="이름" v-model="state.regStore.storeOwnerNm">
                  </div>
                  <div class="store_id">
                    <input type="text" class="wrt_ipt" placeholder="아이디" v-model="state.regStore.storeId">
                  </div>
                  <div class="store_pass">
                    <input type="text" class="wrt_ipt" placeholder="비밀번호" v-model="state.regStore.storePassword">
                  </div>
                  <div class="store_btn">
                    <button class="btn_blue w100 inner260" @click="insertStore()">등록</button>
                  </div>
                </div>
            </li>
            <!-- 리스트 !each-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive } from 'vue';
import { useRouter, useRoute} from 'vue-router';
import {  _getStoreList, _updateStore, _insertStore, _createUser, _changePassword } from '@/api/ourplay.js';
export default {
    components: {},
    setup() {
        const router = useRouter();
        const route = useRoute();
        const state = reactive({
            storeList: [],
            regStore: {},
            baseUrl: window.location.origin,
            googQr: 'https://chart.apis.google.com/chart?cht=qr&chs=250x250&chl='
        });
        onMounted(() => {
            getStoreList();
        });
// 상세화면 이동
        //리스트 조회
        const getStoreList = async () => {
            const response = await _getStoreList();
            try {
                if (response.data.code === 200) {
                    console.log(response);
                    console.log('조회 되었습니다');
                    response.data.data.list.forEach(element => {
                        element.QROpen = false;
                        element.QRcode =  state.googQr + state.baseUrl + '/index/' + element.storeNo;
                    });
                    state.storeList = response.data.data.list;


                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        const qrOpenYn = (putStoreNo) => {
            state.storeList.forEach(element => {
                if (element.storeNo == putStoreNo) {
                    element.QROpen = true;
                } else {
                    element.QROpen = false;
                }
            });
        };
  
        const updateStore = async (item) => {
            console.log('item>>>>>>>>>>');
            console.log(item.storePassword);
            const response = await _updateStore(item);
            try {
                if (response.data.code === 200) {
                    console.log(response);
                    console.log('변경되었습니다');
                    updatePass(item.storeId, item.storePassword);
                    getStoreList();
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        const insertStore = async () => {
            const response = await _insertStore(state.regStore);
            try {
                if (response.data.code === 200) {
                    console.log(response);
                    console.log('등록되었습니다');
                    
                    createUser();
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        const createUser = async () => {
            const params = {
                userId: state.regStore.storeId,
                password: state.regStore.storePassword,
                userType: 'store',
                name: state.regStore.storeOwnerNm
            };
            console.log(params);
            const response = await _createUser(params);
            try {
                if (response.data.code === 200) {
                    console.log(response);
                    console.log('등록되었습니다');
                    state.regStore = {};
                    getStoreList();
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        const updatePass = async (getId, getPass) => {
            const params = {
                newPassword: getPass,
                userId: getId
            };
            console.log('updatePass///');
            console.log(params);
            const response = await _changePassword(params);
            try {
                if (response.data.code === 200) {
                    console.log(response);
                    console.log('등록되었습니다');
                    state.regStore = {};
                    getStoreList();
                } else {
                    console.log(response.data.message);
                }
            } catch (e) {
                console.log(e);
            }
        };
        const goStoreList = (v) => {
            router.push({
                path: '/playList/' + v
            });
        };
        const getQrCode = (v) => {
            
            console.log(storeUrl);
        };
        return {
            state,
            getStoreList,
            updateStore,
            insertStore,
            getQrCode,
            qrOpenYn,
            goStoreList
        };
    }
};
</script>
<style scoped>

</style>
