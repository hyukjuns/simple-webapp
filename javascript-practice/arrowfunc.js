'use strinct';

let ask = (question,yes,no) => {
    if (confirm(question)){
        return yes();
    }else{
        return no();
    }
}
ask(
    "동의하십니까?",
    () => { alert("동의하셨습니다."); },
    () => { alert("취소 버튼을 누르셨습니다."); }
);