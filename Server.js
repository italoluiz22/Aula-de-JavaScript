const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const db = new sqlite3.Database("./database.db");

db.run(`
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT
)
`);

// LISTAR
app.get("/usuarios", (req, res) => {
    db.all("SELECT * FROM usuarios", [], (err, rows) => {
        if (err) return res.json(err);
        res.json(rows);
    });
});

// ADICIONAR
app.post("/usuarios", (req, res) => {
    const { nome, email } = req.body;

    db.run(
        "INSERT INTO usuarios(nome,email) VALUES (?,?)",
        [nome, email],
        function (err) {
            if (err) return res.json(err);
            res.json({ id: this.lastID });
        }
    );
});

// ATUALIZAR
app.put("/usuarios/:id", (req, res) => {
    const { nome, email } = req.body;
    const id = req.params.id;

    db.run(
        "UPDATE usuarios SET nome=?, email=? WHERE id=?",
        [nome, email, id],
        function (err) {
            if (err) return res.json(err);
            res.json({ atualizado: true });
        }
    );
});

// EXCLUIR
app.delete("/usuarios/:id", (req, res) => {
    const id = req.params.id;

    db.run("DELETE FROM usuarios WHERE id=?", [id], function (err) {
        if (err) return res.json(err);
        res.json({ deletado: true });
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});