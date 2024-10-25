import { conn } from "../db.js";

export const getQueries = async (req, res) => {
    try {
        const [rows] = await conn.execute("SELECT * FROM queries");
        return res.json(rows);
    } catch (err){
        console.error('No se pudo obtener datos.', err);
        return res.status(500).json({message: "Internal server error."})
    }
};

export const createQuery = async (req, res) => {
    const data = req.body;

    try {
        const rows = await conn.execute(
            'INSERT INTO queries(query) VALUES (?)',
            [data.query]
        );
    
        const [result] = await conn.execute(
            'SELECT * FROM queries WHERE id = ?',
            [rows[0].insertId]
        );

        return res.json(result[0]);
    } catch (err) {
        console.error('Error insertando datos', err);

        if (err?.errno === 1062) {
            return res.status(409).json({message: "Query already exists."})
        }

        return res.status(500).json({message: "Internal server error."});
    }
};
