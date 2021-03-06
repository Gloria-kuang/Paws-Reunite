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
import ReportCardModal from "../../components/ReportCardModal/ReportCardModal";
import moment from "moment";

function SearchPetPage() {
  const [reportList, setReportList] = useState(null);
  const [displayList, setDisplayList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null);

  //get report data from firebase
  const db = getFirestore();

  useEffect(() => {
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
    getData();
  }, [db]);

  const getFilterData = async (e) => {
    e.stopPropagation();
    e.preventDefault();

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
    if (e.target.address.value !== undefined) {
      temp = temp.filter((report) => {
        const address = report.reportData.address.toLowerCase();
        return address.includes(e.target.address.value.toLowerCase());
      });
    }
    if (e.target.date.value !== "All") {
      temp = temp.filter((report) => {
        const reportDate = moment(report.reportData.date);
        const timeDiff = Number(e.target.date.value);
        return moment().diff(reportDate, "days") <= timeDiff;
      });
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
                  key={report.reportId}
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
