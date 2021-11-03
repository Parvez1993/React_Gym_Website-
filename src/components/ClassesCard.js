import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import ReactLoading from "react-loading";

export default function ClassesCard(props) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <ReactLoading type="balls" color="red" height={667} width={375} />
      ) : (
        <Wrapper>
          <Card
            className="card"
            style={{ width: "25rem", background: props.bg }}
          >
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Text>
                <div className="cardMain">
                  <div>
                    <h4>{props.heading}</h4>
                  </div>
                  <div>
                    <div class="vertical"></div>
                  </div>
                  <div>
                    <div>
                      <div className="mainText">
                        <FontAwesomeIcon icon={faCalendar} className="icon" />
                        <p>{props.days}</p>
                      </div>
                      <p>{props.time}</p>
                    </div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Wrapper>
      )}
    </div>
  );
}
const Wrapper = styled.div`
  .card {
    @media only screen and (min-width: 300px) and (max-width: 576.99px) {
      width: 300px !important;
      margin: 0 auto;
    }
  }

  .cardMain {
    display: flex;
    justify-content: center;
    column-gap: 10px;
    align-items: center;
    @media only screen and (min-width: 300px) and (max-width: 576.99px) {
      display: block;
      .vertical {
        display: none;
      }
    }
  }
  h4 {
    width: 150px;
    color: var(--font-color) !important;
  }
  p {
    color: var(--font-color) !important;
  }

  .vertical {
    width: 5px;
    height: 100px;
    background: var(--font-color);
  }
  .mainText {
    display: flex;
    column-gap: 10px;
    color: var(--font-color);
  }
`;
