import React, { useRef, useEffect } from "react";
import "./evenimente.css";
import useWindowDimensions from "../../api/hooks/useWindowDimensions";

import CardEveniment from "../../components/cards/cardEveniment";
import Button1 from "../../components/buttons/button1";

import useEvenimente from "../../api/hooks/axios/evenimente";

function EvenimentePage() {
  const { height } = useWindowDimensions();
  useEffect(() => window.scrollTo(0, 0), []);
  const evenimenteContent = useRef(null);

  const data = useEvenimente();

  return (
    <div id="evenimente">
      <div className="calendar-container">
        <div id="calendar">
          <iframe
            title="google-calendar"
            className="google-calendar"
            src={`https://calendar.google.com/calendar/embed?height=${
              height * 0.94
            }&wkst=1&bgcolor=%232596be&ctz=Europe%2FBucharest&showPrint=0&showTabs=0&showTz=0&title=Calendar%20de%20evenimente&src=c2VjcmV0YXJAb3NtY2x1ai5ybw&color=%23039BE5`}
            style={{ padding: "10px" }}
            height="100%"
            frameborder="0"
            scrolling="yes"
          ></iframe>
        </div>
        <Button1
          type="button"
          click={(e) => {
            evenimenteContent.current.scrollIntoView();
          }}
        >
          Vezi toate evenimentele »
        </Button1>
      </div>
      <div id="feed" className="main" ref={evenimenteContent}>
        <div className="content">
          {data?.map((eveniment, i) => (
            <CardEveniment
              img={eveniment?.img_path}
              title={eveniment?.name}
              description={eveniment?.description}
              href={eveniment?.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EvenimentePage;
