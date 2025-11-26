import { redirect } from 'next/navigation';

import { Animal } from "../../../database/tables";



async function saveAnimal(formData) {

    'use server';

    const dados = {

        nome: formData.get('nome'),
        especie: formData.get('especie'),
        raca: formData.get('raca'),
        sexo: formData.get('sexo')


    }

    await Animal.create(dados);
    redirect('/animais');

}

function TelaNovoAnimal() {
    return (
        <>
        <form action={saveAnimal}>
            
            <label htmlFor="nome">Nome</label><br/>
            <input type="text" name="nome"/> <br/>

            <label htmlFor="especie">Espécie</label><br/>
            <input type="text" name="especie"/> <br/>

            <label htmlFor="raca">Raça</label><br/>
            <input type="text" name="raca"/> <br/>

            <label htmlFor="sexo">Sexo</label><br/>
            <input type="text" name="sexo"/> <br/>

            <button>Cadastrar</button>
        </form>
        </>
    );
}

export default TelaNovoAnimal;