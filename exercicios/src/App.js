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

import UsuarioLogado from './componentes/usuarioLogado'
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
    
    <SafeAreaView style={style.App}> 
        < UsuarioLogado usuario={ {nome: 'Gui', email: 'gui@gui.com'} }/>
        < UsuarioLogado usuario={ {nome: 'Gui'} }/>
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
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})

