import Consultoria from '../../assets/consultoria.png';
import Dashboards from '../../assets/dashboards.png';
import Debriefing from '../../assets/debriefing.png';

const Service = () => {
  const URL01 = 'https://wa.me/5511993905235?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Consultoria%20ACELERA%20'
  const URL02 = 'https://wa.me/5511993905235?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Constru%C3%A7%C3%A3o%20de%20Dashboards%20Personalizados'
  const URL03 = 'https://wa.me/5511993905235?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Debriefing%20Estrat%C3%A9gico'
  
  return (
    <div className='xl:p-0 bg-[#813F1D] w-screen xl:h-screen flex flex-col items-center justify-center text-white relative px-8 py-12'>
      <section>
        <h2 className='text-center font-[Classy_Vogue] text-4xl'>CONHECA OUTROS SERVICOS</h2>
      </section>

      <section className='lg:flex-row  flex-col flex lg:w-[100%] xl:w-[80%] gap-10 p-9 '>
        <div className='flex flex-col items-center justify-around gap-4 border-none bg-black shadow-[8px_9px_4px_rgba(0,0,0,0.25)] p-6 flex-1'>
          <div className=''>
            <img src={Consultoria}/>
          </div>
          <h3 className='text-xl font-semibold'>
            <span>Consultoria </span>
            <span className='italic'>ACELERA</span>
          </h3>
          <p className='text-justify'>Sessões estratégias com o objetivo de traçar uma estratégia de dados para o seu negócio ou destravar algum ponto que necessite de apoio de um especialista</p>
          <a href={URL01} target="_blank">
            <button className='cursor-pointer border border-white rounded-xl font-extralight px-12 py-2'>CONHECER</button>
          </a>
        </div>

        <div className='flex flex-col items-center justify-around gap-4 border-none bg-black shadow-[8px_9px_4px_rgba(0,0,0,0.25)] p-6 flex-1'>
          <div className=''>
            <img src={Dashboards} className='w-[100%]'/>
          </div>
          <h3 className='text-xl font-semibold'>Construção de Dashboards</h3>
          <p className='text-justify'>Construção de um dashboard personalizado que potencialize as análises diárias do seu negócio</p>
          <a href={URL02} target="_blank">
            <button className='cursor-pointer border border-white rounded-xl font-extralight px-12 py-2'>CONHECER</button>
          </a>
        </div>

        <div className='flex flex-col items-center justify-around gap-4 border-none bg-black shadow-[8px_9px_4px_rgba(0,0,0,0.25)] p-6 flex-1'>
          <div className=''>
            <img src={Debriefing}/>
          </div>
          <h3 className='text-xl font-semibold'>Debriefing de Lançamentos</h3>
          <p className='text-justify'>Construção do Debriefing do seu lançamento, analisando quais estratégias e investimentos deram certo e o que não deu no ponto de vista de dados</p>
          <a href={URL03} target="_blank">
            <button className='cursor-pointer border border-white rounded-xl font-extralight px-12 py-2'>CONHECER</button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Service