import { formataBrasileiroParaDecimal, formataDecimalParaReal } from "../../../src/negocio/formatadores/moeda";


describe('Moeda', () => {
    describe('formataBrasileiroParaDecimal', () => {
        it('should be return 8.59 when the value is 8,59', ()=>
            {const resultado = formataBrasileiroParaDecimal('8,59');
            expect(resultado).toBe(8.59)
    }
    );
    
    })

    describe('formatataDecimalParaReal', () => {
        it('should be return R$ 8,59 when the value is 8.59', ()=>
            {const resultado =  formataDecimalParaReal(8.59)
            
                expect(resultado).toMatch(/R\$\s8,59/);
            }

    );
    
    })

});