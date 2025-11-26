
import { ONG } from "../../database/tables";

async function Usuarios() {

    const usuarios = await Usuario.findAll();

    return (
        <div>
            <h1>Usuários Cadastrados</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Nome de usuário</th>
                        <th>E-mail</th>
                        <th>Endereço</th>
                        <th>CPF</th>
                        <th>Idade</th>
                        <th>Sexo</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        usuarios.map(function (usuario) {

                            return (

                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.nome_usuario}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.endereco}</td>
                                    <td>{usuario.cpf}</td>
                                    <td>{usuario.idade}</td>
                                    <td>{usuario.sexo}</td>
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