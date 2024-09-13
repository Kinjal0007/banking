import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";


const Home = () => {

  const loggedIn={firstName: 'Mr Wick'};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || 'Guest' }
                subtext="Access and manage your account and transactions"
                />

                <TotalBalanceBox
                 accounts={[]}
                 totalBanks={1}
                 totalCurrentBalance={20000}
                />
            </header>
        </div>
    </section>
  )

}

export default Home