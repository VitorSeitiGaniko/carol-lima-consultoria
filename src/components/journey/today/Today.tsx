import Icone from '../../../assets/iconNegative.svg';
import IconeWarning from '../../../assets/iconWarning.svg';

const Today = () => {
  return (
    <div className='xl:p-0 bg-[#813F1D] w-screen xl:h-screen flex flex-col items-center justify-center text-white px-8 py-12'>
      <h2 className='flex flex-col items-center'>
        <span className='font-[Classy_Vogue] text-4xl'>HOJE É</span>
        <span className='text-xl'>PROVÁVEL QUE VOCÊ...</span>
      </h2>

      <hr className='sm:w-[30%] border-t border-white my-4' />

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

      <section className='sm:w-[70%] md:w-[70%] lg:w-[50%] grid grid-cols-[52px_1fr] border border-white rounded-xl py-8 px-4 mt-14'>
        <i className='flex items-center'>
          <img src={IconeWarning} className='h-[34px] w-[38px]'/>
        </i>
        <div className='flex flex-col gap-3'>
          <p className='font-bold'>Todos esses sentimentos te fizeram acreditar que é necessário investir cada vez mais em tráfego e em criativos, ou que o problema está no time ou no algoritmo. </p>
          <p className='font-bold'>Mas existe um porquê atrás disso tudo...</p>
        </div>
      </section>
    </div>
  )
}

export default Today