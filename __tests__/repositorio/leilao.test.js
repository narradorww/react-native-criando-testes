import { obtemLeiloes } from "../../src/repositorio/leilao";
import apiLeiloes from '../../src/servicos/apiLeiloes'

jest.mock('../../src/servicos/apiLeiloes');

const mockLeiloes = [
    {
        id: 1,
        nome: 'Leilão',
        descricao: 'Descrição do Leilão'

    }
];

const mockRequisicao = (retorno)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                data: retorno
            })
        }, 200);
    })
}
const mockRequisicaoErro = ()=>{
    return new Promise((_, reject)=>{
        setTimeout(()=>{
            reject();
        }, 200);
    })
}

describe('repositorio/leilai', () => {
    describe('obtemLeiloes', () => {
        beforeEach(()=>{
            apiLeiloes.get.mockClear();
        });
        it('Should be return a list of auctions', async () => {
            apiLeiloes.get.mockImplementation(()=> mockRequisicao(mockLeiloes))
            const leiloes = await obtemLeiloes();
            expect(leiloes).toEqual(mockLeiloes)
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
        });
        it('Should be return a void list of auctions', async () => {
            apiLeiloes.get.mockImplementation(()=> mockRequisicaoErro(mockLeiloes))
            const leiloes = await obtemLeiloes();
            expect(leiloes).toEqual([])
        })
    })
})