import { HeaderBox } from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { Lasso } from "lucide-react";
import React from "react";

const Home = () => {
    const loggedIn = { firstName: 'William', lastName: 'Shakespeare', email: 'contact@shakespeare.com' };

    return (
        <section className="home" >
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>

                RECENT TRANSACTIONS

            </div>

            <RightSideBar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.45 }, { currentBalance: 1250.00 }]}
            />

        </section>
    )
}

export default Home