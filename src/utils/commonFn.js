export function a() {

}
export function clip(param) {
    console.log(param);
    var url = '';
    var textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    url = window.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('링크가 복사되었습니다. 필요하신 곳에 붙여넣기 하세요!');
}
export function modalOpen(c) {
/** 모달창 **/
    let modalWrap = document.querySelector('.modal_wrap');
    let modalBox = document.querySelector('.modal_box');

    const viewApplyModal = document.querySelector('#viewApplyModal'); //상세페이지 지원&문의하기
    const changePswdModal = document.querySelector('#changePswdModal'); //비밀번호 변경
    const changePswdCompModal = document.querySelector('#changePswdCompModal'); //비밀번호 변경 완료
    const changePswdFailModal = document.querySelector('#changePswdFailModal'); //비밀번호 변경 실패
    const newPswdModal = document.querySelector('#newPswdModal'); //비밀번호 재설정 링크
    const postEnrollModal = document.querySelector('#postEnrollModal'); //인터뷰 등록
    const postUpdateModal = document.querySelector('#postUpdateModal'); //인터뷰 수정
    const postDeleteModal = document.querySelector('#postDeleteModal'); //인터뷰 삭제
    const postDelcompModal = document.querySelector('#postDelcompModal'); //인터뷰 삭제 완료
    const signCompModal = document.querySelector('#signCompModal'); //회원가입 완료

    console.log(modalWrap);
    modalWrap.style.display = 'none';
    modalBox.style.display = 'none';
    
    modalWrap.show();
    
    if (c === 'viewApply') { //뷰페이지 지원&문의하기
        viewApplyModal.show();
    }
    
    if (c === 'changePswd') { //비밀번호 변경
        changePswdModal.show();
    }
    
    if (c === 'changePswdComp') { //비밀번호 변경 완료
        changePswdCompModal.show();
    }
    
    if (c === 'changePswdFail') { //비밀번호 변경 실패
        changePswdFailModal.show();
    }
    
    if (c === 'newPswd') { //비밀번호 재설정 링크
        newPswdModal.show();
    }
    
    if (c === 'postEnroll') { //인터뷰 등록
        postEnrollModal.show();
    }
    
    if (c === 'postUpdate') { //인터뷰 수정
        postUpdateModal.show();
    }
    
    if (c === 'postDelete') { //인터뷰 삭제
        postDeleteModal.show();
    }
    
    if (c === 'postDelcomp') { //인터뷰 삭제 완료
        postDelcompModal.show();
    }
    
    if (c === 'signComp') { //회원가입 완료
        signCompModal.show();
    }

}
export function callcommon() {


    console.log(document.querySelector('#wrtPeriod'));
        // document.querySelector('#wrtPeriod').daterangepicker({
        //     'locale': {
        //         'format': 'YYYY-MM-DD',
        //         'separator': ' ~ ',
        //         'applyLabel': '확인',
        //         'cancelLabel': '취소',
        //         'fromLabel': 'From',
        //         'toLabel': 'To',
        //         'customRangeLabel': 'Custom',
        //         'weekLabel': 'W',
        //         'daysOfWeek': ['일', '월', '화', '수', '목', '금', '토'],
        //         'monthNames': ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
        //     },
        //     'drops': 'auto'
        // }, function(start, end, label) {
        //     console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        // });


}
