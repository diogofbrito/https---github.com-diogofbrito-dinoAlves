import React, { useEffect } from 'react';
import './style.css';
import { TextoExpansivel } from '../../components/Extended/index.jsx';

export function Sobre() {
	useEffect(() => {
		const colors = [
			[250, 48, 51],
			[51, 245, 246],
			[250, 48, 51],
			[250, 48, 51],
			[51, 245, 246],
			[51, 245, 256],
		];

		let step = 0;
		const colorIndices = [0, 1, 2, 3];
		const gradientSpeed = 0.005;

		const updateGradient = () => {
			const gradient = document.getElementById('gradient');
			if (!gradient) return;

			const c0_0 = colors[colorIndices[0]];
			const c0_1 = colors[colorIndices[1]];
			const c1_0 = colors[colorIndices[2]];
			const c1_1 = colors[colorIndices[3]];

			const istep = 1 - step;
			let r1, g1, b1, r2, g2, b2, color1, color2;

			r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
			g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
			b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
			color1 = `rgb(${r1},${g1},${b1})`;

			r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
			g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
			b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
			color2 = `rgb(${r2},${g2},${b2})`;

			gradient.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

			step += gradientSpeed;
			if (step >= 1) {
				step %= 1;
				colorIndices[0] = colorIndices[1];
				colorIndices[2] = colorIndices[3];

				colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
				colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
			}
		};

		const interval = setInterval(updateGradient, 10);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
{/* 			<div id='gradient' className='gradient'></div>
 */}
				<div className='container-default'>
					<div className='about__wrapper'>
						<div className='flex__item'>
							<h1>A marca</h1>
							<br />
							<p>
								<TextoExpansivel
									textoInicial={
										<>
											A marca Dino Alves surgiu em 1997, durante a ModaLisboa – Lisboa Fashion Week. No entanto, o seu criador, com o mesmo nome, já havia participado e apresentado vários desfiles e
											eventos de moda desde 1994.
											<br /> <br />
											Foi apenas em 2006 que a marca foi oficialmente registada. Inicialmente, as peças criadas eram principalmente peças customizadas, adquiridas em feiras e lojas de segunda mão, ou
											em lojas antigas prestes a fechar, que o criador descobria e não resistia a transformar para torná-las suas.
											<br /> <br />
											Com o passar dos anos, a marca evoluiu e surgiu a necessidade de criar peças de raiz, alinhadas com os conceitos de cada coleção, embora mantendo sempre o gosto pelo upcycling.{' '}
										</>
									}
									textoExpandido={
										<>
											<br /> <br />
											O público-alvo da marca são pessoas que procuram destacar-se, usando peças autorais, sempre com caráter e atitude. Com peças predominantemente exclusivas e únicas, a marca
											ocasionalmente inclui algumas mais comerciais, abordando um estilo mais streetwear, que combinadas em desfiles e misturadas com o styling característico do criador, permanecem
											fiéis ao ADN que sempre nos habituou.
											<br /> <br />
											Ao longo do tempo, a marca expandiu para incluir calçado, acessórios e bijuterias. Apresenta-se regularmente na semana de moda de Lisboa - ModaLisboa, com coleções sazonais
											femininas e masculinas, sendo considerada pela opinião pública e especializada como uma das mais ousadas e “arty” do panorama da moda nacional.
											<br /> <br />
											Também tem sido apresentada no estrangeiro, em cidades como Madrid, Barcelona, St-Etienne (França), Berlim, Fortaleza (Brasil), Macau, S. Vicente (Cabo Verde) e São Tomé. Sem
											loja própria, a marca vende-se no Atelier do criador, ocasionalmente em Pop-Up Stores, em algumas plataformas online e em lojas multimarcas.
										</>
									}
								/>
							</p>
						</div>
						<div className='flex__item'>
							<h1>O Criador</h1>
							<br />
							<p>
								<TextoExpansivel
									textoInicial={
										<>
											O <i>enfant-terrible</i> da moda portuguesa nasceu em Anadia. Formado em pintura pela Escola Superior Artística do Porto e com um curso de fotografia pelo INEF, ele estabeleceu
											sua base em Lisboa a partir de 1991, onde moldou uma carreira distinta como estilista e figurinista.
											<br /> <br />
											Após uma breve passagem pela Cinemateca Portuguesa, ele fez sua estreia nas Manobras de Maio de 1994. Em 1995, retornou ao mesmo evento, porém em sua edição de Inverno, reservada
											apenas para um seleto grupo de participantes.
											<br /> <br />
											Foi nesse período que recebeu o convite da renomada estilista Ana Salazar para conceber a mise-en-scène de seus desfiles na próxima edição da ModaLisboa, bem como em mais três
											desfiles nas edições subsequentes.
										</>
									}
									textoExpandido={
										<>
											<br /> <br />
											Após sua brilhante performance como criativo nos desfiles de Ana Salazar, a ModaLisboa o convidou a participar individualmente. Assim, ele deu início a suas regulares
											apresentações na ModaLisboa, onde continuou a exibir suas coleções sob seu próprio nome. <br /> <br />
											Desde então, ele tem marcado presença em inúmeros eventos de moda em Portugal e no exterior, incluindo cidades como St. Etienne (França), Madrid, Barcelona (Espanha), Berlim
											(Alemanha), Luanda (Angola), São Tomé (São Tomé e Príncipe), Fortaleza (Brasil), São Vicente (Cabo Verde) e Macau (China). <br /> <br />
											Também se aventurou como stylist para diversas revistas, como Fora De Série, Zoot e Dif, bem como para marcas, programas de televisão e campanhas publicitárias. Além disso,
											colaborou com o icónico Lux Frágil atuando como stylist em diversas festas e desenvolvendo os uniformes para a equipa. <br /> <br />
											Sua contribuição para o teatro é igualmente notável, tendo criado figurinos para diversas peças, colaborando com renomados encenadores como Lúcia Sigalho, Mónica Calle, João
											Grosso, Maria Emília Correia, Fernando Heitor, entre outros. Destaca-se sua criação para espetáculos como "Vermelho" de John Logan (2011), "Cabaret Alemão" de Luísa Costa Gomes
											(2014) e "Cimbelino" de William Shakespeare (2016). <br /> <br />
											Na televisão, ele deixou sua marca como stylist em programas de humor e através da imagem do apresentador Herman José em programas como "Chamar a Música" e "Roda da Sorte". Ele
											também foi responsável pelo styling dos representantes de Portugal no Festival Eurovisão da Canção durante dois anos consecutivos, além de ter vestido a intérprete vencedora do
											Festival RTP da Canção 2015. <br /> <br />
											Seus projetos mais recentes incluem a criação de figurinos para diversas peças de teatro, musicais e cinema, consolidando sua posição como um dos mais renomados e versáteis
											figurinistas do panorama cultural português.
										</>
									}
								/>
							</p>
						</div>
					</div>
				</div>
		</>
	);
}
