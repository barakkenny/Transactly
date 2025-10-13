import Greetings from '../components/home/Greetings'
import FooterNav from '../components/shared/FooterNav'

const Home = () => {
  return (
    <section className='bg-[1f1f1f] h-[calc(100vh-5rem)] oveflow-hidden flex gap-3'>
      <div className='flex-[2] bg-red-600'>
        <Greetings />
      </div>
      <div className='flex-[2] bg-blue-600'></div>
      <FooterNav />
    </section>
  )
}

export default Home
