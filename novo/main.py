from flask import Flask, render_template, request, jsonify
import mysql.connector

app = Flask(__name__)

# Conectar ao banco de dados MySQL
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Bemvindo@digital",
    database="lista"
)

cursor = mydb.cursor()

# Página inicial
@app.route('/')
def index():
    return render_template('CRUD.html')

# Rota para criar um novo item
@app.route('/criar_item', methods=['POST'])
def criar_item():
    novo_item = {
        'item': request.form['item'],
        'quantidade': request.form['quantity'],
        'preco': request.form['price']
    }

    # Inserir novo item no banco de dados
    sql = "INSERT INTO itens (item, quantidade, preco) VALUES (%s, %s, %s)"
    val = (novo_item['item'], novo_item['quantidade'], novo_item['preco'])
    cursor.execute(sql, val)
    mydb.commit()

    return jsonify({'message': 'Item criado com sucesso'})

if __name__ == '__main__':
    app.run(debug=True)
