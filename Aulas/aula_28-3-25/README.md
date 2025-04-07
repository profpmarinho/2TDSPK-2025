# Objetivo da aula:
PaperProvider, BottomNag, Badge, Context
Testes

#Pre req

npm install --save-dev jest @testing-library/react-native @testing-library/jest-native


# App de Pizza - Fase 2
Adicionar uma Navegacao BottomBar e Badge de controle de quantidade de itens no carrinho.
Poder remover itens do carrinho
Preparar o Profile

Desafio para casa:
Adicionar um contador de pizza para adicionar e remover direto do carrinho.


# App de Pizza: Testes Unitarios

Criar um teste unitário para o CartProvider:  
Crie um arquivo de teste, por exemplo, CartProvider.test.js:
import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { CartProvider, useCart } from './CartProvider';

describe('CartProvider', () => {
it('should add item to cart', () => {
const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({ id: 1, name: 'Item 1' });
    });

    expect(result.current.cartItems).toEqual([{ id: 1, name: 'Item 1', quantity: 1, observations: '' }]);
});

it('should remove item from cart', () => {
const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({ id: 1, name: 'Item 1' });
      result.current.removeFromCart(1);
    });

    expect(result.current.cartItems).toEqual([]);
});

it('should update item observations', () => {
const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({ id: 1, name: 'Item 1' });
      result.current.updateObservations(1, 'New observation');
    });

    expect(result.current.cartItems[0].observations).toBe('New observation');
});
});


# App de Pizza - testes de Interface

Configurar o ambiente de testes de interface:  
Certifique-se de ter o @testing-library/react-native instalado. Se não estiver, instale-o com o comando:
npm install --save-dev @testing-library/react-native
Criar um teste de interface para um componente:  
Crie um arquivo de teste, por exemplo, CartComponent.test.js:
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CartProvider } from './CartProvider';
import CartComponent from './CartComponent'; // Supondo que você tenha um componente CartComponent

describe('CartComponent', () => {
it('should render cart items', () => {
const { getByText } = render(
<CartProvider>
<CartComponent />
</CartProvider>
);

    expect(getByText('Cart is empty')).toBeTruthy();
});

it('should add item to cart when button is pressed', () => {
const { getByText } = render(
<CartProvider>
<CartComponent />
</CartProvider>
);

    fireEvent.press(getByText('Add Item'));

    expect(getByText('Item 1')).toBeTruthy();
});
});


## Orientações para os Alunos

### Configuração do Ambiente:  

Ensine os alunos a configurar o ambiente de testes com Jest e @testing-library/react-native.

### Escrita de Testes Unitários:  

Mostre como criar testes unitários para funções e hooks, utilizando renderHook e act do @testing-library/react-hooks.

### Escrita de Testes de Interface:  

Demonstre como criar testes de interface para componentes, utilizando render e fireEvent do @testing-library/react-native.

### Execução dos Testes:  

Ensine como executar os testes com o comando:
npm test

### Análise dos Resultados:  

Mostre como interpretar os resultados dos testes e corrigir possíveis falhas.