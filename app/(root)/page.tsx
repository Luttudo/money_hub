import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar";
import TotalBalancebox from "@/components/TotalBalancebox";

//arrow function
const Home = () => {
    const loggedIn = { firstName: 'João', lastName: 'Da Silva', email: 'joao@gmail.com' };

  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || "Convidado"}
                    subtext="Acesse sua conta!"
                    
                />

                <TotalBalancebox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                
                />


            </header>
            
            RECENT TRANSACTIONS
        </div>

        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 123.50 }, { currentBalance: 5000 }]}

        />

    </section>
  )
}

export default Home