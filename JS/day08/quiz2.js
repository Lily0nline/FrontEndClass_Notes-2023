//로또 당첨 함수를 quiz2로 import, require(참조)하여
//원하는 갯수 만큼 로또 7자리 번호를 생성하고 등수 맞추기
//다차원 배열, 순희


const lottoService = require('./quiz')

const generatedLottoNumberArray = (count) =>{
    return Array.from({length: count}, () => lottoService.generatedLottoNumber())
}
