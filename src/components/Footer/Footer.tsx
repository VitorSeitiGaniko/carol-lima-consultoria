import React from 'react'
import Form from '../form/Form';

const Footer = () => {
  const [showForm, setShowForm] = React.useState(false);
  const URL = 'https://wa.me/5511993905235?text=Ol%C3%A1!%20Tenho%20d%C3%BAvidas%20sobre%20seus%20servi%C3%A7os.'

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='lg:px-96 sm:py-32 bg-[#FFFFFF] w-screen flex flex-col items-center justify-center text-white relative pt-16 pb-32'>
      <section className='flex flex-col items-center justify-center'>
        <h2 className='font-[Classy_Vogue] text-black text-4xl'>Precisa de ajuda?</h2>
        <p className='italic text-black'>Entre em contato comigo</p>

        <button onClick={() => setShowForm(true)} className='cursor-pointer border-none rounded-xl bg-[#08B52D] text-base font-bold px-12 py-3 mt-8 cursor-pointer'>CHAMAR NO WHATSAPP</button>
      </section>

      <section className='bg-[#D9D9D9] w-screen flex items-center sm:justify-around justify-between text-black font-medium absolute bottom-0 py-4'>
        <span className='sm:text-left text-center'>CAROL LIMA® 2025. Todos os direitos reservados.</span>
        <button onClick={backToTop} className='sm:text-left text-center cursor-pointer'>VOLTAR PARA O TOPO</button>
      </section>

      {showForm && (
        <Form setShowForm={setShowForm} link={URL} />
      )}
    </div>
  )
}

export default Footer