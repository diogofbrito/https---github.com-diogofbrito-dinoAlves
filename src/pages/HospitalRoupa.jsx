import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

export function HospitalRoupa() {
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const position = window.scrollY;
			setScrollTop(position);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const blurAmount = scrollTop / 20;
	const blurStyle = {
		filter: `blur(${blurAmount}px)`,
		WebkitFilter: `blur(${blurAmount}px)`,
		MozFilter: `blur(${blurAmount}px)`,
	};

	return (
		<>
			<Helmet>
				<title>DINO ALVES | HOSPITAL DA ROUPA </title>
				<meta name='description' content='Hospital da Roupa: Transformação de peças antigas em peças novas.' />
				<meta name='keywords' content='hospital da roupa, roupa, roupa nova, roupa antiga, peças antigas, peças novas, transformação, sos dino alves' />
			</Helmet>
			<div className=' w-screen h-screen fixed top-0 -z-10' style={blurStyle}>
				<div className='flex w-full h-full justify-center items-center' id='home__active'>
					<video autoPlay loop muted className='w-8/12'>
						<source src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' type='video/mp4' />
					</video>
				</div>
			</div>
			<div className='container-default'>
				<div className='flex flex-col w-full justify-center items-center'>
					<div className='blury w-4/6'>
						<img src='../assets/images/sos_logo.webp' alt='Hospital da Roupa Logo' />

						<p>
							Aqui não se fazem arranjos como numa costureira tradicional. A ideia é outra: recuperar peças antigas, transformando-as em peças novas. Uma saia ou umas calças podem dar origem a um top,
							ou vice-versa. A partir de um acto criativo, a roupa pode ser radicalmente transformada numa peça diferente. <br></br>A reciclagem de roupa ou a criação por medida já não são novidade.
							Já toda a gente reconstruiu uma peça de roupa de que não gosta, que está fora de moda, que ficou manchada ou tem algum problema de conservação.<br></br>O factor novidade do Hospital da
							Roupa, e a mais-valia deste conceito, é o de oferecer aos clientes os serviços do atelier de um criador, com a sua linguagem estética e com o ADN da sua marca, transformando peças
							antigas em peças de autor. Depois de terem passado pelo Hospital da Roupa, ganham uma nova etiqueta – SOS Dino Alves –, que é colocada junto da etiqueta original.
							<br></br>
							SOS significa, neste caso, Serviços Operação Surpresa e é de certa forma uma maneira de fazer nascer uma segunda marca do universo Dino Alves, mais acessível e comercial. Uma colecção
							infinita, sem estação definida, porque as peças vão sendo criadas conforme a regularidade que os clientes recorrem a este serviço.
						</p>

						<div className='pt-8'>
							<h2>Como funciona?</h2>
							<p className='pt-8'>
								O primeiro contacto é estabelecido através de telefone, por e-mail, ou ainda através das redes sociais: instagram - Hospital da Roupa ou instagram - Dino Alves.
								<br />
								Um elemento da equipa do Atelier Dino Alves recebe os dados e marca o dia e a hora para a entrega e “internamento” das peças de roupa. Pode ser também tratado por envio CTT ou outra
								transportadora. O serviço funciona por marcação, uma vez que poderá não haver disponibilidade para um atendimento imediato.
								<br />
								No momento do “internamento” é preenchida uma ficha que identifica a(s) peça(s) e o cliente e onde constam os seus contactos e algumas observações que possam ser úteis na criação da
								nova peça. No entanto, é importante sublinhar que o conceito deste Serviço Operação Supresa implica que o cliente não saiba previamente em que é que se transformará a velha peça de
								roupa. Mas poderá saber se assim o entender.
								<br />
								Passados alguns dias, conforme o volume de trabalho existente, o cliente será informado sobre o orçamento aproximado. Esse orçamento terá sempre uma margem de erro de 10€ (dez euros),
								pois só o desenrolar do processo permitirá concluir com precisão se foi preciso investir mais tempo e materiais do que os inicialmente previstos.
								<br />
								Por fim, os clientes serão contactados para levantar a(s) peça(s) e proceder ao pagamento.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
