import { fireEvent, render, screen } from '@testing-library/react'
import Post from '..'

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post />)
        
        const textarea = screen.getByTestId('comment-textarea');
        const submitButton = screen.getByTestId('comment-submit-button');
        const commentList = screen.getByTestId('comment-list');

        // Primeiro comentário
        fireEvent.change(textarea, { target: { value: 'Comentário 1' } });
        fireEvent.click(submitButton);

        // Segundo comentário
        fireEvent.change(textarea, { target: { value: 'Comentário 2' } });
        fireEvent.click(submitButton);

        // Verifica se os comentários foram adicionados à lista
        const comments = screen.getAllByTestId('comment-item');
        expect(comments).toHaveLength(2);
        expect(comments[0]).toHaveTextContent('Comentário 1');
        expect(comments[1]).toHaveTextContent('Comentário 2');
        expect(commentList).toMatchSnapshot(); // Opcional: compara com um snapshot
    })
    

})