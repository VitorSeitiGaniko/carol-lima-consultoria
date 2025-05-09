import Icone from '../../../assets/iconAffirmative.svg';
import IconLocalization from '../../../assets/iconLocalization.svg';

const Show = () => {
  return (
    <div className='xl:p-0 bg-[#000000] w-screen xl:h-screen flex flex-col items-center justify-center text-white relative px-8 py-12'>
      <h2 className='flex flex-col items-center'>
        <span className='font-[Classy_Vogue] text-4xl'>EU TE MOSTRO</span>
        <span className='sm:text-left text-center text-xl'>ONDE ESTÃO AS VENDAS QUE VOCÊ NÃO ESTÁ VENDO</span>
      </h2>

      <hr className='sm:w-[70%] md:w-[70%] lg:w-[40%] border-t border-white my-4' />

      <section className='mt-11'>
        <p className='font-semibold lg:text-left text-center'>
            <span>Imagine se você pudesse enxergar exatamente onde está perdendo dinheiro — </span>
            <span className='italic'>e corrigir isso rapidamente.</span>
        </p>
      </section>

      <section className='sm:w-[70%] md:w-[70%] lg:w-[50%] sm:text-center mt-9 text-left w-[100%]'>
        <p>Com meu método, você vai:</p>
      </section>

      <section className='sm:w-[70%] md:w-[70%] lg:w-[50%] flex flex-col gap-6 justify-center mt-8'>
        <div className='grid grid-cols-[36px_1fr] gap-3'>
          <i>
            <img src={Icone} className='h-[24px] w-[24px]'/>
          </i>
          <span>Já vende, mas não sabe exatamente onde está perdendo dinheiro</span>
        </div>

        <div className='grid grid-cols-[36px_1fr] gap-3'>
          <i>
            <img src={Icone} className='h-[24px] w-[24px]'/>
          </i>
          <span>Não entende como as pessoas navegam, onde abandonam o carrinho ou quais conteúdos realmente engajam</span>
        </div>

        <div className='grid grid-cols-[36px_1fr] gap-3'>
          <i>
            <img src={Icone} className='h-[24px] w-[24px]'/>
          </i>
          <span>Sente que  seus anúncios não atingem as pessoas certas</span>
        </div>

        <div className='grid grid-cols-[36px_1fr] gap-3'>
          <i>
            <img src={Icone} className='h-[24px] w-[24px]'/>
          </i>
          <span>Vê sua taxa de conversão não crescendo, mesmo com tráfego pago</span>
        </div>
      </section>

      <i className='hidden sm:block absolute sm:bottom-[10%] sm:left-[-6%] lg:bottom-[20%] lg:left-[10%] rotate-335'>
        <img src={IconLocalization} className='h-[151px] w-[151px]'/>
      </i>
    </div>
  )
}

export default Show