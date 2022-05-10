import { Dimensions } from 'react-native'

//definindo tamamanhos padroes dos elementos visuais
//apesar de ser uma constante, os objetos de dentro de param podem ser ALTERADOS
//eles nao poderiam ser alterados caso houvesse um freeze
const params = {
    blockSize: 20,
    borderSize: 5,
    fontSize: 8,
    headerRatio: 0.15, //15% representa o cabecalho - 85% representa a area do jogo
    difficultLevel: 0.1, //percentual de minas na tela - 10%
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        //retornamos a largura dividida pelo o tamamho do bloco
        //floor - arredonda para baixo !
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount () {
        const height = Dimensions.get('window').height
        //queremos a altura, descontando a parte do head
        const boardHeight = height * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }

}

export default params