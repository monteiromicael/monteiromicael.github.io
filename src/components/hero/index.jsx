import { Container } from './styles';
import pessoa from '../../png/pessoa.png'


function Hero() {
  return (
    <Container>
      <div>
        <img src={pessoa} alt="minha foto" />
        <ul className='recepcion'>
          <li className='seja'>Seja</li>
          <li className='bem'>Bem Vindo!</li>
        </ul>
      </div>
    </Container>
  );
};

export default Hero;
