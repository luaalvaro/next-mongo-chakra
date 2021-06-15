import { connectToDatabase } from '../../util/mongodb';
import { tokenIsValid } from '../../server/functions';

export default async (req, res) => {

    if (req.method !== "POST") {
        return res.status(200).json({ message: 'Sorry, this method type is not accepted' })
    }

    const { database } = connectToDatabase();

    // Método POST reconhecido
    // Verificar se o token é válido

    const result = tokenIsValid(req.body.token)

    res.status(200).json({ status: result, message: '', data: [] })
}