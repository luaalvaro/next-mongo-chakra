import { connectDatabase, tokenIsValid } from '../../server/functions';

export default async (req, res) => {

    if (req.method !== "POST") {
        return res.status(200).json({ message: 'Sorry, this method type is not accepted' })
    }

    let database = null;

    try {
        // Conexão com o MongoDB
        database = await connectDatabase();
    } catch (error) {
        return res.status(200).json({ message: 'Please, try again. Not possible connect to database' })
    }

    // Método POST reconhecido
    // Verificar se o token é válido

    const result = tokenIsValid(req.body.token)

    res.status(200).json({ status: result, message: 'Sucess', data: [{ name: 'Luã Álvaro' }] })
}