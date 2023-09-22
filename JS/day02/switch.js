let month = 2;
//switch는 값, if는 t/f의 조건식
//switch는 분기가 많이 생성되는 것이 아니라면 자주 사용하지 않습니다. 가독성이 좋지 않기 때문입니다
//단 분기가 여러게인 경우는 if 보다는 switch가 가독성아 더 좋은 편
switch (month){
    case 1:
        console.log("Jan");
    case 2:
        console.log("Feb");
        break; //탈출문, 대신하여 return을 사용할 수 도 있음, 그러나 단순 종료를 위해서는 break을 사용.
    case 3:
        console.log("Mar");
    case 4:
        console.log("Apr");
    default:
        console.log("Wrong input")
}