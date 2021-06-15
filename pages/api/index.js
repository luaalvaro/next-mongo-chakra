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

    const db = await connectDatabase()

    if (!db) {
        return res.status(200).json({ message: 'Sorry, Database connection error' })
    }

    const data = await db
        .collection('index')
        .find({})
        .toArray()

    res.status(200).json({ status: 1, message: 'Sucess', data })
}