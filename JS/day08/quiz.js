

//lotto

/*
output ->  1st, 2nd, 3rd, 4th, 5th, 미당첨 -> 경우에 따라서 console.log
                                        ------ 분기점

            맞춘 숫자의 갯수
            정답, 사용자 입력 값
            로또 7 자리 ---- 숫자가 들어간 길이가 7인 배열
            보너스 숫자 - 마지막 자리 


input - 정답, 입력 값 ----> [?,?,?,?,?,?,?]
                        ----- 수동, 자동
                                    ---랜덤생성
    
 배열에 겹치지 않은 1-45의 랜덤 숫자로 이루어진 요소

 #1 create an array with the length of 7 numbers, create an empty array
 #2 create random numbers : 1-45 
 #3 repeat til length of 7
 #4 dont allow the same numbers to appear
*/

function generatedLottoNumber(){
    const lottoNumbers = [];
    //for, while 

    //for(;lottoNumbers.length < 7;){
    //}

    while(lottoNumbers.length < 7){

        if(!lottoNumbers.includes(randomNumber)){
        lottoNumbers.push(randomNumber)}
    }
}