import DataTable from "./DataTable";
import { useEffect, useState } from "react";
import { getUsers1, getUsers2, getUsers3, getUsers4, getUsers5 } from "../api";

export default function Tables() {
  const [users1, setUsers1] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [users3, setUsers3] = useState([]);
  const [users4, setUsers4] = useState([]);
  const [users5, setUsers5] = useState([]);

  const fetchData = async () => {
    let response = await getUsers1();
    setUsers1(response);
    response = await getUsers2();
    setUsers2(response);
    response = await getUsers3();
    setUsers3(response);
    response = await getUsers4();
    setUsers4(response);
    response = await getUsers5();
    setUsers5(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <DataTable name="Users which have income lower than $5 USD and have a car of brand BMW or Mercedes" users={users1} />
      <DataTable name="Male Users which have phone price greater than 10,000" users={users2} />
      <DataTable name="Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name." users={users3} />
      <DataTable name="Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit" users={users4} />
      <DataTable name="Top 10 cities which have the highest number of users" users={users5} />
    </>
  );
}
