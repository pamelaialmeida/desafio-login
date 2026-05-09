import { usuarios } from './resources/usuarios.js';

/**
 * Função para realizar login.
 * @param {String} email 
 * @param {String} senha 
 * @returns 
 */
export function fazerLogin(email, senha) {
    if (!email || !senha) {
        throw new Error('Informe suas credenciais.');
    }

    const emailTratado = email.toLowerCase();

    if (!validarEmail(emailTratado)) {
        throw new Error('Informe email válido.');
    }

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === emailTratado) {
            if (usuarios[i].senha !== senha) {
                return 'Credenciais incorretas.';
            }

            if (usuarios[i].expirado) {
                return 'Renove suas credenciais.';
            }

            return 'Login realizado com sucesso.';            
        }
    }

    return 'Credenciais incorretas.';
}

/**
 * Função auxiliar para validar se email informado é válido.
 * Ex. email considerado válido: usuario@dominio.com 
 * @param {String} email 
 * @returns boolean - true se email for válido conforme padrão estabelecido pelo regex, false se não for.
 */
function validarEmail(email) {
    const formadoDeEmailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formadoDeEmailValido.test(email);
}