import { connectDatabase, tokenIsValid } from '../../server/functions';

export default async (req, res) => {

    if (req.method !== "POST") {
        return res.status(200).json({ message: 'Sorry, this method type is not accepted' })
    }

    // Método POST reconhecido
    // Verificar se o token é válido

    const result = tokenIsValid(req.body.token)

    if (!result) {
        return res.status(200).json({ message: 'Sorry, this token is not valid' })
    }

    // Token válido

    const db = await connectDatabase()

    if (!db) {
        return res.status(200).json({ message: 'Sorry, Database connection error' })
    }

    // Conexão com o banco de dados estabelecida com sucesso

    const data = await db
        .collection('index')
        .find({})
        .toArray()

    // Processamento da Request Finalizado
    // Devolvendo a resposta final de sucesso

    res.status(200).json({ status: 1, message: 'Sucess', data })
}