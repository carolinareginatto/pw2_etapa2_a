const{Sequelize} = require ('sequelize')
const sequelize = new Sequelize('thoughts','root','123456', {
    host:'localhost',
    dialect:'mysql'
}); //construtor de classe - referencias por parametro

try{
    sequelize.authenticate()
    console.info('CONECTAMOS AO SERVIÇO DE DADOS.')
}
catch(error){
    console.error('NÃO CONECTAMOS AO SERVIÇO DE DADOS =>', error)
}//dialogo de tentativa e erro

module.exports = sequelize
//ORM = objeto relacionado a modelo