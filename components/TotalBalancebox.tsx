import { formatAmount } from '@/lib/utils'
import DoughnutChart from './DoughnutChart'

const TotalBalancebox = ({
    accounts = [], totalBanks, totalCurrentBalance

}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnutChart accounts={accounts}/> 

        </div>

        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                Bank Accounts: {totalBanks}

            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Dinheiro total na conta
                                    
                </p>

                <p className='total-balance-amount flex-center gap-2'>
                    {/* utility function */}
                    {formatAmount(totalCurrentBalance)}

                </p>

                
            </div>


        </div>

    </section>
  )
}

export default TotalBalancebox