import React, { useState, useEffect } from "react";
import ReportCard from "../../components/ReportCard/ReportCard";
import Filter from "../../components/Filter/Filter";
import "./SearchPetPage.scss";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  orderBy,
  where
} from "firebase/firestore";
import ReportCardModal from "../../components/ReportCardModal/ReportCardModal";

function SearchPetPage() {
  const [reportList, setReportList] = useState(null);
  const [displayList, setDisplayList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  // Filter

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
    setDisplayList(reportList);
  };

  const getFilterData = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    // const q = query(
    //   collection(db, "pet-reports"),
    //   where("status", "==", e.target.status.value),
    //   where("type", "==", e.target.type.value),
    //   where("sex", "==", e.target.sex.value)
    // );
    // const querySnapshot = await getDocs(q);
    // const reportListOld = querySnapshot.docs.map((doc) => {
    //   const reportId = doc.id;
    //   const reportData = doc.data();
    //   return { reportId, reportData };
    // });
    // const reportList = reportListOld.reverse();
    let temp = [...reportList];
    if (e.target.status.value !== "All") {
      temp = temp.filter(
        (report) => report.reportData.status === e.target.status.value
      );
    }
    if (e.target.type.value !== "All") {
      temp = temp.filter(
        (report) => report.reportData.type === e.target.type.value
      );
    }
    if (e.target.sex.value !== "All") {
      temp = temp.filter(
        (report) => report.reportData.sex === e.target.sex.value
      );
    }

    setDisplayList(temp);
  };

  if (displayList === null) {
    return (
      <main className="search-page">
        <Filter />
        <div className="search-list">loading...</div>
      </main>
    );
  }
  return (
    <div>
      <main className="search-page">
        {modalData && (
          <ReportCardModal
            modalData={modalData}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        )}
        <Filter getFilterData={getFilterData} />
        <div className="search-list">
          <h2 className="search-list__header">Lost and Found Pets</h2>
          <div className="search-list__container">
            {displayList.map((report) => {
              return (
                <ReportCard
                  reportData={report.reportData}
                  reportId={report.reportId}
                  onViewClick={() => {
                    setModalData(report.reportData);
                    setModalShow(true);
                  }}
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
