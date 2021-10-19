import { ContainerTerminal } from './styles';


function Terminal() {
  return (
    <ContainerTerminal>
      <div className='terminal'>
        <div className='backgroundHeader'>
          <div className='header'>
            <span className='terminalHeader'>Windows PowerShell</span>
          </div>
        </div>
        <br/>
        <br />
        <span>
          <span className='azul'>portfolio</span> 
          <span> on </span> 
          <span className='master'>master ≡  +5 ~2 -3 |  +3 ~2</span> 
          <span> via </span>
          <span className='version'> 14.17.5</span>
          <br />
          <span className='ls'>ls</span>
        </span>
        <br />
        <br />
        <p className='textLs'>Mode                 LastWriteTime         Length Name<br />
        ----                 -------------         ------ ----  <br/>
        d-----        14/10/2021     12:14                apresentacao.txt
        </p>
        <span>
          <span className='azul'>portfolio</span> 
          <span> on </span> 
          <span className='master'>master ≡  +5 ~2 -3 |  +3 ~2</span> 
          <span> via </span>
          <span className='version'> 14.17.5</span>
          <br />
          <span className='ls'>cat apresentacao</span>
        </span>
        <p>Nome: Micael Ribeiro de Souza<br />
          Idade: 20<br />
          Cargo: Desenvolvedor Front-End<br />
          Cidade: Joinville<br />
          Objetivo: Busco uma oportunidade como<br />
          desenvolvedor front-end para<br />
          adquirir mais conhecimento e experiência na área.<br />
        </p>

      </div>
    </ContainerTerminal>
  );
};

export default Terminal;
