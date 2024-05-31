import HeaderBox from "@/components/HeaderBox"
import TotalBalancebox from "@/components/TotalBalancebox";
// import React from 'react'

//arrow function
const Home = () => {
    const loggedIn = { firstName: 'Usuário'};

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

        </div>

    </section>
  )
}

export default Home