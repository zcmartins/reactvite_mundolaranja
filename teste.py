import psycopg2
from psycoppipg2 import OperationalError

def testar_conexao(host, database, user, password):
    try:
        # Conectando ao banco de dados
        conn = psycopg2.connect(
            host=host,
            database=database,
            user=user,
            password=password
        )
        
        # Criando um cursor
        cursor = conn.cursor()
        
        # Executando uma consulta simples
        cursor.execute('SELECT version()')
        
        # Recuperando o resultado
        db_version = cursor.fetchone()
        print('Conexão bem-sucedida. Versão do PostgreSQL:', db_version)
        
        # Fechando cursor e conexão
        cursor.close()
        conn.close()
        
    except OperationalError as e:
        print(f'Erro durante a conexão: {e}')

# Substitua com suas credenciais e informações do banco de dados
host = 'localhost'
database = 'master'
user = 'postgres'
password = 'bd123'

# Testando a conexão
testar_conexao(host, database, user, password)
