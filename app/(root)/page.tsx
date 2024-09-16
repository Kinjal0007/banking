import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {

  const loggedIn={firstName: 'Wick',lastName:"Maxtern",email:"mrwick@maxtern.com"};
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

            RECENT TRANSACTIONS
        </div>

        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 142.4},{currentBalance: 324.4}]}
        />
    </section>
  )

}

export default Home