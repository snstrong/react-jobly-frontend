import JoblyApi from "./api";
import { useState, useEffect } from "react";

function CompanyDetail(handle) {
  const [company, setCompany] = useState(null);
  useEffect(() => {
    async function fetchData() {
      let res = await JoblyApi.getCompany(handle);
      setCompany(res);
    }
    fetchData();
  }, [setCompany]);
}
