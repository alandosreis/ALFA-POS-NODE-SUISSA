require('./../../../db/config.test');
const assert = require ('assert');
const Controller = require('./../controller');
describe('Pokemon Controller', () => {
    var msg1 = 'iniciar sem pokemon a listagem deve ser vazia'
    it('Deve retornar um array vazio', (done) => {
        describe(msg1, () => {
            var query = {}
            var callback = (err, data) => {
                assert.equal(null, err, 'Err nao é nulo')
                assert.notEqual(0, data.length, 'Lista veio vazia')
                done()
            }
            Controller.find(query,callback);
        })
    })
    describe('Create', () => {
        it('QUANDO CADASTRAR O RESULTADO DEVE SER O MESMO OBJETO ADICIONADO _id', ()=> {
            var mod = {         name: 'SUISSA',         attack: '9001',         defense: '8001'
        }
        var callback = (err, data) => {
         assert.equal('object', typeof data._id)
     }       Controller.create(mod,callback);
 })
    })
    describe('findOne', () => {
        it('DEVE RETORNAR A QUERT', (done) => {
            var query = {
                _id:'57b0dacd57a6b5111d7bba55'
            }
            var callback = (err, data) => {
                assert.equal(query._id, data._id, 'id deve ser igual')
                done()
            }
            Controller.findOne(query,callback);
        })
    })
    describe('remove', () => {
        it('DELETANDO', (done) => {
            var query = {
//ID IGUAIS
_id:'57b0dacec844b4221de01b4e'
}
var callback = (err, data) => {
    assert.equal(data.result.ok, 1, 'result.ok = 1')
    done()
}
Controller.remove(query,callback);
})
    })
    describe('update', () => {
        it('DEVE FAZER O UPDADTE', (done) => {
            var query = {
                _id:'57b0dacf6f2041331db66ebf'
            }
            var mod ={
                name:'alanreis'
            }
            var callback = (err, data) => {
                assert.equal(data.ok,1,' ok = 1');
                done()
            }
            Controller.update(query,mod,callback);
        })
    })

})