

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

    //new set()
    while(lottoNumbers.length < 7){
        //1-45
        const randomNumber = Math.floor(Math.random () * 45 + 1) // adding + 1 to not include 0 if you want to add 0 change 45 to 46 (* 46)
        

        if(!lottoNumbers.includes(randomNumber)){
         lottoNumbers.push(randomNumber)
        }
    }
    return lottoNumbers
}

function lottery (userNumbers){
    let rank;
    let winningCount = 0;
    let winningNumberArray = [2, 5, 12, 17, 6, ,21, 11]
    let bonusNumber = userNumbers.pop()
    // pop -> 원본 배열의 마지막 제거
    //반환 값 => 제거한 값

    /*
    [?,?,?,?,?,?] -userNumbers
    winningNumbersArray

    userNumbers의 각 요소가 winningNumbersArray에 포함되어 있는지 확인
    배열의 요소가 다른 배열의 요소에 포함되어 있는지

    순회 -> forEach, for..of
    포함되어있는지 검사 -> includes 
    */

    /*winningCount = userNumbers.reduce((sum, el) => {
        if(winningNumberArray.includes(el)){
            sum++
        }
    }, 0)*/

    for(let number of userNumbers){
        if(winningNumberArray.includes(number)){
            winningCount++
        }
    }

    switch(winningCount){
        case 6:
            rank = 1;
            break;
        case 5:
            if(winningNumberArray.includes(bonusNumber)){
                rank = 2;
            }else{
                rank = 3;
            }
            break;
            case 4:
                rank = 4;
                break;
            case 3:
                rank = 5;
                break;
            default:
                rank = 'Try again next time';
                break;
    }
    console.log(rank)
}

const userNumbers = generatedLottoNumber()
lottery(userNumbers)

module.exports = {
    lottery,
    generatedLottoNumber
}