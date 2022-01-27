import React, { useState, useEffect } from "react";
import ReportCard from "../../components/ReportCard/ReportCard";
import Filter from "../../components/Filter/Filter";
import "./SearchPetPage.scss";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function SearchPetPage() {
  const [reportList, setReportList] = useState(null);

  useEffect(() => {
    getData();
    setReportList({ reportList });
  }, []);

  const db = getFirestore();
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "pet-reports"));
    const reportList = querySnapshot.docs.map((doc) => {
      const reportId = doc.id;
      const reportData = doc.data();
      return { reportId, reportData };
    });
    console.log("reposrList", reportList);
  };

  if (reportList === null) {
    return (
      <main className="search-page">
        <Filter />
        <div className="search-list">
          <h2 className="search-list__header">Lost and Found Pets</h2>
          <div className="search-list__container">loading...</div>
        </div>
      </main>
    );
  }
  return (
    <main className="search-page">
      <Filter />
      <div className="search-list">
        <h2 className="search-list__header">Lost and Found Pets</h2>
        <div className="search-list__container">
          <ReportCard reportList={reportList} />
        </div>
      </div>
    </main>
  );
}

export default SearchPetPage;
