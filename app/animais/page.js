import { Animal } from "../../database/tables";

async function Animais() {

    const animais = await Animal.findAll();

    return (
        <div>
            <h1>Animais para adoção</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Espécie</th>
                        <th>Raça</th>
                        <th>Sexo</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        animais.map(function (animal) {

                            return (

                                <tr key={animal.id}>
                                    <td>{animal.id}</td>
                                    <td>{animal.nome}</td>
                                    <td>{animal.especie}</td>
                                    <td>{animal.raca}</td>
                                    <td>{animal.sexo}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>

    );

}

export default Animais;