class Tabelas {
   init (conexao){
      this.conexao = conexao;
      this.criarTabelaUsuario();
   }

   criarTabelaUsuario (){
      const sql = `
      CREATE TABLE IF NOT EXISTS USUARIOS (
	    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      NOME VARCHAR (60) NOT NULL,
      EMAIL VARCHAR (75) NOT NULL,
      SENHA VARCHAR (15) NOT NULL
      );
        `;
      this.conexao.query (sql, (error)=> {
          if (error) {
            console.log ("Erro ao tentar criar a tabela Usuario", error )
          } else {
            console.log ("Tabela Usuario criada com sucesso!")
          }
      });
   }
}

module.exports = new Tabelas();
