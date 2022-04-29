import React from 'react'
import { Button } from 'react-native'

export default props => {

    function executar() {
        console.warn('Exec botao 01!!!')
    }

    return(
    <>
        <Button
            title="botao 01"
            onPress={executar}
        />
        <Button
            title="botao 02"
            onPress={function(){
                console.warn('Exec botao 02!!!')
            }}
        />
        <Button
            title="botao 03"
            onPress={() => console.warn('Exec botao 03!!!')}
        />
    </>

    )
}