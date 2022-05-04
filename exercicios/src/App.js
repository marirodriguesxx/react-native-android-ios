import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

// function App(){
//     const jsx = <Text>Primeiro Componente</Text>
//     return jsx
// }

/*
const App = function (){
    const jsx = <Text>Primeiro Componente</Text>
    return jsx
}
*/

/*
export default =>{
    const jsx = <Text>Primeiro Componente</Text>
    return jsx
}
*/

/*
export default =>  return <Text>Primeiro Componente</Text>
*/

import Mega from './componentes/mega/Mega'
// import FlexboxV4 from './componentes/layout/FlexboxV4'
// import FlexboxV3 from './componentes/layout/FlexboxV3'
// import FlexboxV2 from './componentes/layout/FlexboxV2'
// import FlexboxV1  from './componentes/layout/FlexboxV1'
// import Quadrado from './componentes/layout/Quadrado'
// import DigiteSeuNome from './componentes/DigiteSeuNome'
// import ListaProdutosV2 from './componentes/produtos/listaProdutosV2'
// import ListaProdutos from './componentes/produtos/listaProdutos'
// import UsuarioLogado from './componentes/usuarioLogado'
// import Familia from './componentes/relacao/familia'
// import Membro from './componentes/relacao/membro'
// import ParImpar from './componentes/ParImpar'
// import Diferenciar from './componentes/diferenciar'
// import Contador from './componentes/contador'
// import Pai from './componentes/indireta/Pai'
// import ContadorV2 from './componentes/contador/contadorV2'
// import Pai from './componentes/direta/Pai'
// import Botao from './componentes/botao'
// import Titulo from './componentes/titulo'
// import MinMax  from './componentes/MinMax'
// import Aleat  from './componentes/aleatorio'
// import CompPadrao, {Comp1, Comp2} from './componentes/Multi'
// import Primeiro from './componentes/Primeiro'  

export default () => (
    //safeareaview tambem eh um flexbox :)
    <SafeAreaView style={style.App}>  
        {/* <FlexboxV3 /> */}
        <Mega qtd={12}/>
        {/* <FlexboxV4 />
         */}
        {/* <FlexboxV2 /> */}
        {/* <FlexboxV1 /> */}
        {/* <Quadrado />
        <Quadrado cor='#F00'/>
        <Quadrado cor='#090'/>
        <Quadrado cor='#009'/> */}
        {/* <DigiteSeuNome /> */}
        {/* <ListaProdutosV2 /> */}
        {/* < UsuarioLogado usuario={ {nome: 'Gui', email: 'gui@gui.com'} }/>
        < UsuarioLogado usuario={ {nome: 'Gui'} }/> */}
        {/* < Familia>
            <Membro nome = "Bia" sobrenome="Arruda" />
            <Membro nome = "Carlos" sobrenome="Arruda" />
        </Familia>  
        < Familia>
            <Membro nome = "Ana" sobrenome="Silva" />
            <Membro nome = "Julia" sobrenome="Silva" />
        </Familia>         */}
        {/* <ParImpar num={3}/> */}
        {/* <Diferenciar /> */}
        {/* <ContadorV2 /> */}
        {/* <Pai /> */}
        {/* <Pai /> */}
        {/* <Contador inicial={100} passo={10} />
        <Contador /> */}
        {/* <Botao /> */}
        {/* <Titulo principal="Cadastro Produto"
                secundario="Tela de Cadastro do Produto" /> */}
        {/* {<MinMax min={3} max={20}/>
        <Aleat min={1} max={94} /> 
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro>
        </Primeiro> } */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: { //propriedades do flexbox
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})

