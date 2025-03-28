const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  /*
  Questão 1: Complete a função customerInfo() para que seu retorno seja: 
  'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.
  */
  const customerInfo = (fullOrder) => {
    const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
    const costumerName = fullOrder.name;
    const phoneNumber = fullOrder.phoneNumber;
    const street = fullOrder.address.street;
    const addressNumber = fullOrder.address.number;
    const apartment = fullOrder.address.apartment;
  
    return `Olá, ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${phoneNumber}, ${street}, Número: ${addressNumber}, AP: ${apartment}.`;
  }
  
  console.log(customerInfo(order));
 
  /* Questão 2: Complete a função orderModifier() para que seu retorno seja: 
  'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.*/ 
  
  const orderModifier = (fullOrder) => {
    fullOrder.name = 'Luiz Silva';
    fullOrder.payment.total = 50;
  
    // Pega todos os nomes de pizzas em um array e junto os valores com uma vírgula mais um espaço. join(', ')
    const pizzas = Object.keys(fullOrder.order.pizza).join(', ');
  
    // Retorna a string com o resultado
return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é R$${fullOrder.payment.total},00.`;
  }
  
  console.log(orderModifier(order));