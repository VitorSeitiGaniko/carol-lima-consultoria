import CarolLima from '../../assets/CarolLima.png';
import IconAspas from '../../assets/IconAspas.svg';

const About = () => {
  return (
    <div className='sm:grid sm:grid-cols-2 xl:h-screen xl:p-0 bg-[#5B7A99] w-screen text-white flex flex-col-reverse items-center justify-center px-8 py-12'>
        <div className='sm:col-span-1 sm:w-[70%] sm:m-auto mx-auto mt-12'>
            <section>
                <span className='text-center block m-auto'>PRAZER,</span>
                <h2 className='font-[Classy_Vogue] text-center text-4xl mt-4'>CAROL LIMA</h2>
            </section>

            <section className='flex flex-col items-center justify-center gap-4 mt-9'>
                <p className='text-justify mt-4'>Especialista de Dados, com mais de 5 anos de experiência na área traduzindo o que os dados falam e tornando empresas lucrativas e estratégicas por meio de soluções de Business Intelligence e Trackeamento de Sites.</p>
                <p className='text-justify mt-4'>Minha trajetória profissional foi construída no mercado offline, onde tive a oportunidade de atuar diretamente com empresas que faturam bilhões anualmente — Banco Itaú e Banco BV — foi nesse ambiente de alta performance que desenvolvi minha expertise em análise estratégica de dados, interpretando e planejando métricas para tomada de decisão no negócio.</p>
                <p className='text-justify mt-4'>Acredito muito no potencial que a informação carrega, por este motivo carrego a missão de aculturar empresas a serem orientadas a dados, desenvolvendo soluções que sejam capazes de dar clareza e confiança sobre os próximos passos da sua organização de forma intuitiva e simples.</p>
            </section>
        </div>
        
        <div className='sm:col-span-1 m-auto'>
            <section className='sm:w-[80%] sm:m-0 m-auto flex flex-col items-center justify-center relative'>
                <img src={CarolLima} className='sm:w-[100%] md:w-[100%] lg:w-[80%] w-[80%]'/>
                <p className='text-end italic mt-11 z-10'>
                    <span className='block'>Os dados do seu negócio já falam.</span>
                    <span className='block'>Você só precisa saber ouvir.</span>
                </p>
                <i className=''>
                    <img src={IconAspas} className='absolute sm:w-[124px] w-[76px] sm:bottom-[-3%] bottom-[-1%] sm:left-[0%] left-[0%]'/>
                </i>
            </section>
        </div>
    </div>
    
  )
}

export default About