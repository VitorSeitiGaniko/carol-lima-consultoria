import React from 'react'
import Icone from '../../../assets/iconAffirmative.svg';
import IconLocalization from '../../../assets/iconLocalization.svg';

const Show = () => {
  return (
    <div className='bg-[#000000] w-screen h-screen flex flex-col items-center justify-center text-white relative'>
      <h2 className='flex flex-col items-center'>
        <span className='font-[Classy_Vogue] text-4xl'>EU TE MOSTRO</span>
        <span className='text-3xl'>ONDE ESTÃO AS VENDAS QUE VOCÊ NÃO ESTÁ VENDO</span>
      </h2>

      <hr className='border-t border-white w-[30%] my-4' />

      <section className='mt-11'>
        <p className='font-semibold'>
            <span>Imagine se você pudesse enxergar exatamente onde está perdendo dinheiro — </span>
            <span className='italic'>e corrigir isso rapidamente.</span>
        </p>
      </section>

      <section className='mt-9 w-[50%]'>
        <p>Com meu método, você vai:</p>
      </section>

      <section className='flex flex-col gap-6 justify-center w-[44%] mt-8'>
        <div className='flex gap-3'>
          <i>
            <img src={Icone} className='h-[24px] w-[24px]'/>
          </i>
          <span>Já vende, mas não sabe exatamente onde está perdendo dinheiro</span>
        </div>

        <div className='flex gap-3'>
          <i>
            <img src={Icone} className='h-[24px] w-[24px]'/>
          </i>
          <span>Não entende como as pessoas navegam, onde abandonam o carrinho ou quais conteúdos realmente engajam</span>
        </div>

        <div className='flex gap-3'>
          <i>
            <img src={Icone} className='h-[24px] w-[24px]'/>
          </i>
          <span>Sente que  seus anúncios não atingem as pessoas certas</span>
        </div>

        <div className='flex gap-3'>
          <i>
            <img src={Icone} className='h-[24px] w-[24px]'/>
          </i>
          <span>Vê sua taxa de conversão não crescendo, mesmo com tráfego pago</span>
        </div>
      </section>

      <i className='absolute bottom-[20%] left-[10%] rotate-335'>
        <img src={IconLocalization} className='h-[151px] w-[151px]'/>
      </i>
    </div>
  )
}

export default Show