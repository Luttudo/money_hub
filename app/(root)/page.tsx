import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar";
import TotalBalancebox from "@/components/TotalBalancebox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

//arrow function
const Home = async () => {
    const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.name || "Convidado"}
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
            

        />

    </section>
  )
}

export default Home