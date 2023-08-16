import React from 'react';

type HeaderProps = {
  header: string;
};

type CounterState = {
  value: number;
  name?: string;
};

//https://www.w3schools.com/react/react_lifecycle.asp
//https://www.freecodecamp.org/news/react-component-lifecycle-methods/
//https://www.youtube.com/watch?v=UkN-d7fan5E&list=PLqYFXd9GTRVUE1mKTvVAPqtVzLbRTnm_L&index=2
export default class Header extends React.Component<HeaderProps, CounterState> {
  state: CounterState = {
    // id: 1,
    value: 0,
    name: undefined,
  };

  //listener

  constructor(props: HeaderProps) {
    super(props);

    this.state = { value: 100, name: 'michel' };
  }

  // static getDerivedStateFromProps() {}
  // componentDidMount() {}

  shouldComponentUpdate(nextProps: HeaderProps, nextState: CounterState) {
    // Only re-render if the favoriteFood state has changed
    // Validações que retornam um boolean, se o componente sofre um re-render ou não.
    console.log('Enter Here', nextState);
    //recebe props atualizadas e estados atualizados
    return this.state.value !== nextState.value;
  }

  //
  //
  //
  getSnapshotBeforeUpdate(prevProps: HeaderProps, prevState: CounterState) {
    console.log('Before the update, the favorite was ' + prevState.value);

    return null;
  }

  // lidar com alteraçòes no componentes, alteração em effects na tela.
  //
  componentDidUpdate(prevProps: HeaderProps, prevState: CounterState) {
    //valor antigo em prevProps
    //valor atual em this.props
    //validações após alterações
    //
    console.log('Enter Here', this.state);
  }

  // componentWillUpdate() {
  //   console.log('Enter Here', this.state);
  // }

  componentWillMount() {
    //valores presentes antes da tela ser exeibida em tela

    //recomendado para fazer listeners e inicialização de sdks
    //listeners
    console.log('Enter Here', this.state);
  }

  componentWillUnmount() {
    //retirar listener
    //retirar banco de dados
    console.log('Enter Here', this.state);
  }

  //acontece após o primeiro render da tela
  componentDidMount() {
    // Acontece sempre que já está montado
    // chamada a API's
    // Chamadas assincronas
    // Chamada ao Redux
    // Chamada dos metodos

    // Como se fosse um "fetchData"

    // SetIsLoading como true
    setTimeout(() => {
      this.setState({ value: 102 });
    }, 1000);
  }

  increment = () => {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  };

  render() {
    const { header } = this.props;
    const { value } = this.state;

    return (
      <div>
        <h1>{header}</h1>
        <p>{value}</p>

        <button id='increment' onClick={this.increment}>
          Clique Aqui
        </button>
      </div>
    );
  }
}
