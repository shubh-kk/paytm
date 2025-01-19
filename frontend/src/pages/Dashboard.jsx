import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"

export function Dashboard() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getBalance();
  }, [])

  async function getBalance() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setBalance(response.data.balance)
    } catch (error) {
      console.log("Error while fetching balance", error);
    }
  }
  return <div>
    <Appbar />
    <div className="m-8">

      <Balance value={balance} />
      <Users />
    </div>
  </div>

}
