import { fazerLogin } from '../src/login.js';
import assert from 'node:assert';

describe('Testes da função de Login', () => {
    it('TC01 - Deve realizar login quando email e senha informados correspondem a usuário cadastrado', () => {
        assert.equal(fazerLogin('diana.prince@themiscira.com', 'Wonder@987'), 'Login realizado com sucesso.');
    });

    it('TC02 - Deve retornar mensagem de renovaçao de credencial quando credenciais informadas estão espiradas', () => {
        assert.equal(fazerLogin('leia.organa@rebellion.com', 'Force@321'), 'Renove suas credenciais.');
    });

    it('TC03 - Deve retornar mensagem de credenciais inválidas quando não é encontrado usuário com o email informado', () => {
        assert.equal(fazerLogin('naoexisteuser@test.com', 'Spider@654'), 'Credenciais incorretas.');
    });

    it('TC04 - Deve retornar mensagem de credenciais inválidas quando senha incorreta é informada para usuário existente', () => {
        assert.equal(fazerLogin('bruce.wayne@wayneenterprises.com', 'Superman'), 'Credenciais incorretas.');
    });

    it('TC05 - Deve retornar mensagem de credenciais inválidas quando não é encontrado usuário com as credenciais informadas', () => {
        assert.equal(fazerLogin('naoexisteuser02@test.com', 'naoExisteSenha'), 'Credenciais incorretas.');
    });

    const cenariosCredenciaisFaltantes = [
        { email: '', senha: '', cenario: 'Nenhuma credencial informada' },
        { email: '', senha: 'SuperSenha', cenario: 'Somente email não informado' },
        { email: 'emaildeteste@email.com', senha: '', cenario: 'Somente senha não informada' }
    ];

    cenariosCredenciaisFaltantes.forEach(({ email, senha, cenario }) => {
        it(`TC06 - Deve retornar erro quando credenciais não são corretamente informadas - Cenário: ${cenario}`, () => {
            assert.throws(
                function () { fazerLogin(email, senha) },
                { message: 'Informe suas credenciais.' }
            );
        });
    });

    const exemplosCenariosEmailInvalido = [
        { email: '@teste.com', senha: 'SuperSenha', cenario: 'Email sem texto antes do @' },
        { email: 'teste@.com', senha: 'SuperSenha', cenario: 'Email sem texto entre @ e .' },
        { email: 'teste@teste.', senha: 'SuperSenha', cenario: 'Email sem texto após o .' },
        { email: 'testeteste.com', senha: 'SuperSenha', cenario: 'Email sem @' },       
        { email: 'teste@testecom', senha: 'SuperSenha', cenario: 'Email sem . após @' },
        { email: 'testetestecom', senha: 'SuperSenha', cenario: 'Email sem @ e sem .' }
    ];

    exemplosCenariosEmailInvalido.forEach(({ email, senha, cenario }) => {
        it(`TC07 - Deve retornar erro quando email informado é inválido - Cenário: ${cenario} `, () => {
            assert.throws(
                function() { fazerLogin(email, senha) },
                { message: 'Informe email válido.' }
            );
        });
    });

});