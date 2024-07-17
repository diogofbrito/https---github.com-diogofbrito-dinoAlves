import React, { useState } from 'react';
import { CustomCursor } from '../components/CustomCursor.jsx';
import DinoAlves from '../assets/images/DinoAlves.webp';

export function Sobre() {
	const [view, setView] = useState('marca');
	const handleMouseEnter = () => {
		document.dispatchEvent(new CustomEvent('cursor-hover', { detail: true }));
	};

	const handleMouseLeave = () => {
		document.dispatchEvent(new CustomEvent('cursor-hover', { detail: false }));
	};

	const handleClick = option => {
		setView(option);
	};

	return (
		<>
			<CustomCursor logoSrc={DinoAlves} />
			<div className='container-default'>
				<div className='flex justify-center gap-14 mb-8 '>
					<button className={`text-5xl tracking-[-0.15rem]  hover:bg-black hover:blur-md ${view === 'marca' ? '' : 'blur-custom'}`} onClick={() => handleClick('marca')}>
						MARCA
					</button>
					<button className={`text-5xl tracking-[-0.15rem]  hover:bg-black hover:blur-md ${view === 'criador' ? '' : 'blur-custom'}`} onClick={() => handleClick('criador')}>
						CRIADOR
					</button>
				</div>

				<div className='flex flex-col w-full justify-center items-center'>
					<div className='w-4/6 '>
						<p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
							{view === 'marca' ? (
								<>
									A marca Dino Alves surgiu em 1997, durante a ModaLisboa – Lisboa Fashion Week. No entanto, o seu criador, com o mesmo nome, já havia participado e apresentado vários desfiles e
									eventos de moda desde 1994.
									<br />
									Foi apenas em 2006 que a marca foi oficialmente registada. Inicialmente, as peças criadas eram principalmente peças customizadas, adquiridas em feiras e lojas de segunda mão, ou em
									lojas antigas prestes a fechar, que o criador descobria e não resistia a transformar para torná-las suas.
									<br />
									Com o passar dos anos, a marca evoluiu e surgiu a necessidade de criar peças de raiz, alinhadas com os conceitos de cada coleção, embora mantendo sempre o gosto pelo upcycling.
									<br /> <br />
									O público-alvo da marca são pessoas que procuram destacar-se, usando peças autorais, sempre com caráter e atitude. Com peças predominantemente exclusivas e únicas, a marca
									ocasionalmente inclui algumas mais comerciais, abordando um estilo mais streetwear, que combinadas em desfiles e misturadas com o styling característico do criador, permanecem fiéis
									ao ADN que sempre nos habituou.
									<br />
									Ao longo do tempo, a marca expandiu para incluir calçado, acessórios e bijuterias. Apresenta-se regularmente na semana de moda de Lisboa - ModaLisboa, com coleções sazonais femininas
									e masculinas, sendo considerada pela opinião pública e especializada como uma das mais ousadas e “arty” do panorama da moda nacional.
									<br /> <br />
									Também tem sido apresentada no estrangeiro, em cidades como Madrid, Barcelona, St-Etienne (França), Berlim, Fortaleza (Brasil), Macau, S. Vicente (Cabo Verde) e São Tomé. Sem loja
									própria, a marca vende-se no Atelier do criador, ocasionalmente em Pop-Up Stores, em algumas plataformas online e em lojas multimarcas.
								</>
							) : (
								<>
									O <i>enfant-terrible</i> da moda portuguesa nasceu em Anadia. Formado em pintura pela Escola Superior Artística do Porto e com um curso de fotografia pelo INEF, ele estabeleceu sua
									base em Lisboa a partir de 1991, onde moldou uma carreira distinta como estilista e figurinista.
									<br />
									Após uma breve passagem pela Cinemateca Portuguesa, ele fez sua estreia nas Manobras de Maio de 1994. Em 1995, retornou ao mesmo evento, porém em sua edição de Inverno, reservada
									apenas para um seleto grupo de participantes.
									<br />
									Foi nesse período que recebeu o convite da renomada estilista Ana Salazar para conceber a mise-en-scène de seus desfiles na próxima edição da ModaLisboa, bem como em mais três
									desfiles nas edições subsequentes.
									<br /> <br />
									Após sua brilhante performance como criativo nos desfiles de Ana Salazar, a ModaLisboa o convidou a participar individualmente. Assim, ele deu início a suas regulares apresentações
									na ModaLisboa, onde continuou a exibir suas coleções sob seu próprio nome.
									<br />
									Desde então, ele tem marcado presença em inúmeros eventos de moda em Portugal e no exterior, incluindo cidades como St. Etienne (França), Madrid, Barcelona (Espanha), Berlim
									(Alemanha), Luanda (Angola), São Tomé (São Tomé e Príncipe), Fortaleza (Brasil), São Vicente (Cabo Verde) e Macau (China).
									<br />
									Também se aventurou como stylist para diversas revistas, como Fora De Série, Zoot e Dif, bem como para marcas, programas de televisão e campanhas publicitárias. Além disso, colaborou
									com o icónico Lux Frágil atuando como stylist em diversas festas e desenvolvendo os uniformes para a equipa.
									<br />
									A sua contribuição para o teatro é igualmente notável, tendo criado figurinos para diversas peças, colaborando com renomados encenadores como Lúcia Sigalho, Mónica Calle, João
									Grosso, Maria Emília Correia, Fernando Heitor, entre outros. Destaca-se sua criação para espetáculos como "Vermelho" de John Logan (2011), "Cabaret Alemão" de Luísa Costa Gomes
									(2014) e "Cimbelino" de William Shakespeare (2016).
									<br />
									Na televisão, ele deixou sua marca como stylist em programas de humor e através da imagem do apresentador Herman José em programas como "Chamar a Música" e "Roda da Sorte". Ele
									também foi responsável pelo styling dos representantes de Portugal no Festival Eurovisão da Canção durante dois anos consecutivos, além de ter vestido a intérprete vencedora do
									Festival RTP da Canção 2015.
									<br /> <br />
									Seus projetos mais recentes incluem a criação de figurinos para diversas peças de teatro, musicais e cinema, consolidando sua posição como um dos mais renomados e versáteis
									figurinistas do panorama cultural português.
								</>
							)}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
