import { fireEvent, render, screen } from '@testing-library/react'
import Post from '..'

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<Post />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })
    test('Deve adicionar "estudar react" na lista', () => {
    render(<Post />);

    const textarea = screen.getByTestId('campo-tarefa');
    const submitButton = screen.getByTestId('btn-cadastrar');
    const commentList = screen.getByTestId('lista-completa');

    // Primeiro comentário
    fireEvent.change(textarea, { target: { value: 'Comentário 1' } });
    fireEvent.click(submitButton);

    // Segundo comentário
    fireEvent.change(textarea, { target: { value: 'Comentário 2' } });
    fireEvent.click(submitButton);

    const comments = screen.getAllByTestId('campo-lista');

    expect(comments).toHaveLength(2);
    expect(comments[0]).toHaveTextContent('Comentário 1');
    expect(comments[1]).toHaveTextContent('Comentário 2');

    // Snapshot do container completo
    expect(commentList).toMatchSnapshot();
});
})