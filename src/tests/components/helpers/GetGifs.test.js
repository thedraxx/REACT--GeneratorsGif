import { getGifs } from "../../../helpers/getGifs"

describe('Pruebas con GetGifs Fetch', () => {
    
    test('Debe de traer 20 elementos', async () => {
        
       const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(20);

    })
    

    test('Que pasa si no mando nada', async () => {
        
       const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
})
