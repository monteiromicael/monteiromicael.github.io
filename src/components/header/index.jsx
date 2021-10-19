import { Container } from './styles';
import github from '../../png/github.png'
import insta from '../../png/instagram.png'
import linkedin from '../../png/linkedin.png'


function Header() {
  return (
    <Container>
      <header>
        <ul className='text'>
          <li>
            <a href='/'>Sobre mim</a>
          </li>
          <li>
            <a href='/'>Portfolio</a>
          </li>
          <li>
            <a href='/'>FeedBack</a>
          </li>
            <div className='listlog'>
              <li><a href='/'><img src={github} alt="github" className='github'/></a></li>
              <li><a href='/'><img src={insta} alt="instagram" className='insta'/></a></li>
              <li><a href='/'><img src={linkedin} alt="linkedin" className='linkedin'/></a></li>
            </div>
        </ul>
        
      </header>   
    </Container>
  );
};

export default Header;
