function handleJoin(){
    const userId = document.querySelector("input[name=userId]").value;
    const userPw = document.querySelector("input[name=userPw]").value;
    const userPw2 = document.querySelector("input[name=userPw2]").value;
    const userNick = document.querySelector("input[name=userNick]").value;
    
    
    // id
    // 소문자 및 숫자 허용, 4~8글자
    const idOk = /^[a-z0-9].{4,8}$/.test(userId); 
    if(!idOk){
        alert("ID 확인바람")
        return false;
    }
    
    // pw
    // 숫자만 허용 4~8글자
    const pwOk1 = /^[0-9].{4,8}$/.test(userPw);
    const pwOk2 = userPw === userPw2
    const pwOk = pwOk1 && pwOk2;
    if(!pwOk){
        alert("PW 확인바람")
        return false;
    }
    
    // nick
    const nickOk = /^[가-힣].{2,4}$/.test(userNick);
    if(!nickOk){
        alert("NICK 확인바람")
        return false;
    }

}