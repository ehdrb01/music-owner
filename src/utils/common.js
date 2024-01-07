
/**리스트페이지 카테고리 선택**/
$('.cate_lst li').on('click',function(){

    $('.cate_all').removeClass('on');

    if($(this).hasClass('on') === true){
        $(this).removeClass('on');
    }else{
        $(this).addClass('on');
    }
})

$('.cate_all').on('click',function(){
    $('.cate_lst li').removeClass('on');
    $(this).addClass('on');
})


/**마이페이지 탭**/
$('#mypage .tab li').on('click',function(){
    let myTabIdx = $(this).index();

    $('#mypage .tab li').removeClass('on');
    $(this).addClass('on');

    $('#mypage .my_box').removeClass('active');
    $('#mypage .my_box').eq(myTabIdx).addClass('active');
})


/**뷰페이지 공유하기 주소 복사**/
function clip(){
    var url = '';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("링크가 복사되었습니다. 필요하신 곳에 붙여넣기 하세요!")
};


/** 뷰페이지 문의하기 **/
$('.qa_box2 .btn_area .update_btn').on('click',function(){
    $(this).parents('.btn_area').siblings('.cont').hide();
    $(this).parents('.btn_area').siblings('textarea').show();
    $(this).hide();
    $(this).siblings('.ok_btn').show();
})

$('.qa_box2 .btn_area .ok_btn').on('click',function(){
    $(this).parents('.btn_area').siblings('.cont').show();
    $(this).parents('.btn_area').siblings('textarea').hide();
    $(this).hide();
    $(this).siblings('.update_btn').show();
})


/**글쓰기 첨부 이미지 미리보기**/
function readURL(input) {
    $('#preview').show();
    $('#preview').parents('.box').css('border','0');
    $('#preview').parents('.box').find('.txt').hide();

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('preview').src = "";
    }
}

/**글쓰기 모집기간 & 인터뷰일자**/
$('#wrtPeriod').daterangepicker({
    "locale": {
        "format": "YYYY-MM-DD",
        "separator": " ~ ",
        "applyLabel": "확인",
        "cancelLabel": "취소",
        "fromLabel": "From",
        "toLabel": "To",
        "customRangeLabel": "Custom",
        "weekLabel": "W",
        "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
        "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    },
    "drops": "auto"
}, function (start, end, label) {
    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
});

$('#wrtDate').daterangepicker({
    singleDatePicker: true,
    "locale": {
        "format": "YYYY-MM-DD",
        "separator": " ~ ",
        "applyLabel": "확인",
        "cancelLabel": "취소",
        "fromLabel": "From",
        "toLabel": "To",
        "customRangeLabel": "Custom",
        "weekLabel": "W",
        "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
        "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    },
    "drops": "auto"
}, function (start, end, label) {
    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
});


/**글쓰기 모집인원 & 인터뷰 지역 슬라이드**/
$('#wr_person').on('click',function(){
    $(this).siblings('.lst').slideDown();

    let ww = $(window).width();

    if(ww < 821){
        $(this).siblings('.lst_bg').show();
    }
})

$('#wr_area').on('click',function(){
    $(this).siblings('.lst').slideDown();

    let ww = $(window).width();

    if(ww < 821){
        $(this).siblings('.lst_bg').show();
    }
})

$('#write .lst li').on('click',function(){
    $('#write .lst li').removeClass('on');
    $(this).addClass('on');
    $(this).parents().siblings('.lst_bg').hide();
})

function personInput( statusItem ) {
   var strText = $(statusItem).text();

   $("#wr_person").val(strText);
   $("#wr_person").siblings('.lst').hide();
}

function areaInput( statusItem ) {
   var strText = $(statusItem).text();

   $("#wr_area").val(strText);
   $("#wr_area").siblings('.lst').hide();
}

$('html').click(function(e){
	if($(e.target).parents('.wrt_num').length < 1 ){
        $("#wr_person").siblings('.lst').hide();
        $("#wr_area").siblings('.lst').hide();
    }
});

// 반응형 인터뷰지역 & 모집인원 위치 변경
resonsiveWidth();

function resonsiveWidth() {
    let ww = $(window).width();

    $(window).on('resize', function () {
        ww = $(window).width();

        if (ww < 821) {
            moLoca();
        } else {
            pcLoca();
        }
    });

    if (ww < 821) {
        moLoca();
    } else {
        pcLoca();
    }
}

function moLoca() {
    let wrtPersonWrap = $('.wrt_num_date');
    let wrtRegionWrap = $('.wrt_num_region');
    let wrtPerson = $('.wrt_person');
    let wrtRegion = $('.wrt_region');

    wrtRegion.prependTo(wrtPersonWrap);
    wrtPerson.prependTo(wrtRegionWrap);
}

function pcLoca() {
    let wrtPersonWrap = $('.wrt_num_date');
    let wrtRegionWrap = $('.wrt_num_region');
    let wrtPerson = $('.wrt_person');
    let wrtRegion = $('.wrt_region');

    wrtRegion.prependTo(wrtRegionWrap);
    wrtPerson.prependTo(wrtPersonWrap);
}


/** 모달창 **/
let modalWrap = $('.modal_wrap');
let modalBox = $('.modal_box');

const viewApplyModal = $('#viewApplyModal'); //상세페이지 지원&문의하기
const changePswdModal = $('#changePswdModal'); //비밀번호 변경
const changePswdCompModal = $('#changePswdCompModal'); //비밀번호 변경 완료
const changePswdFailModal = $('#changePswdFailModal'); //비밀번호 변경 실패
const newPswdModal = $('#newPswdModal'); //비밀번호 재설정 링크
const postEnrollModal = $('#postEnrollModal'); //인터뷰 등록
const postUpdateModal = $('#postUpdateModal'); //인터뷰 수정
const postDeleteModal = $('#postDeleteModal'); //인터뷰 삭제
const postDelcompModal = $('#postDelcompModal'); //인터뷰 삭제 완료
const signCompModal = $('#signCompModal'); //회원가입 완료

function modalOpen(c){

    modalWrap.hide();
    modalBox.hide();

    modalWrap.show();

    if(c === 'viewApply'){ //뷰페이지 지원&문의하기
        viewApplyModal.show();
    }

    if(c === 'changePswd'){ //비밀번호 변경
        changePswdModal.show();
    }

    if(c === 'changePswdComp'){ //비밀번호 변경 완료
        changePswdCompModal.show();
    }

    if(c === 'changePswdFail'){ //비밀번호 변경 실패
        changePswdFailModal.show();
    }

    if(c === 'newPswd'){ //비밀번호 재설정 링크
        newPswdModal.show();
    }

    if(c === 'postEnroll'){ //인터뷰 등록
        postEnrollModal.show();
    }

    if(c === 'postUpdate'){ //인터뷰 수정
        postUpdateModal.show();
    }

    if(c === 'postDelete'){ //인터뷰 삭제
        postDeleteModal.show();
    }

    if(c === 'postDelcomp'){ //인터뷰 삭제 완료
        postDelcompModal.show();
    }

    if(c === 'signComp'){ //회원가입 완료
        signCompModal.show();
    }

}

function modalClose(){
    modalWrap.hide();
    modalBox.hide();
}
