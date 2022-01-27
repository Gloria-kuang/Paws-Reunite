import React, { useState, useEffect } from "react";
import ReportCard from "../../components/ReportCard/ReportCard";
import Filter from "../../components/Filter/Filter";
import "./SearchPetPage.scss";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  orderBy
} from "firebase/firestore";
import Button from "react-bootstrap/Button";
import ReportCardModal from "../../components/ReportCardModal/ReportCardModal";

function SearchPetPage() {
  const [reportList, setReportList] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    getData();
  }, []);

  //get report data from firebase
  const db = getFirestore();
  const getData = async () => {
    const q = query(collection(db, "pet-reports"), orderBy("date"));
    const querySnapshot = await getDocs(q);
    const reportListOld = querySnapshot.docs.map((doc) => {
      const reportId = doc.id;
      const reportData = doc.data();
      return { reportId, reportData };
    });
    const reportList = reportListOld.reverse();
    setReportList(reportList);
  };

  if (reportList === null) {
    return (
      <main className="search-page">
        <Filter />
        <div className="search-list">loading...</div>
      </main>
    );
  }
  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <main className="search-page">
        <ReportCardModal show={modalShow} onHide={() => setModalShow(false)} />
        <Filter />
        <div className="search-list">
          <h2 className="search-list__header">Lost and Found Pets</h2>
          <div className="search-list__container">
            {reportList.map((report) => {
              return (
                <ReportCard
                  reportData={report.reportData}
                  reportId={report.reportId}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default SearchPetPage;
