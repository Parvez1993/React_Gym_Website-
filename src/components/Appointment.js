import React from "react";
import styled from "styled-components";

function Appointment() {
  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <Wrapper>
        <div className="heading">
          <h1>Make Appointment</h1>
          <p>Lets Roll ASAP</p>
        </div>

        <form class="form">
          <div className="main">
            <div className="left">
              <div>
                <input type="text" name="" class="name" placeholder="name" />
              </div>
              <div>
                <input
                  type="number"
                  name=""
                  class="phone"
                  placeholder="phone"
                />
              </div>
            </div>
            <div className="right">
              <input
                type="text"
                name=""
                class="message"
                placeholder="message"
              />
            </div>
          </div>
          <div className="checkbox">
            <div>
              <input
                type="checkbox"
                id="confirm"
                name="confirm"
                value="confirm"
                onClick={() => {
                  setChecked(!checked);
                }}
              ></input>
            </div>
            <div>
              <label for="confirm" style={{ color: "white" }}>
                I agree that my submitted data is being collected and stored.
              </label>
            </div>
          </div>
          <div className="button__submit">
            <button
              type="submit"
              className={`${checked ? "submit checked" : "submit"}`}
              name="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../images/appointment/running.jpg") !important;
  background-size: cover;
  background-position: center;
  background-color: #fff;
  height: 80vh;
  padding: 40px;
  height: 60vh;
  @media only screen and (min-width: 300px) and (max-width: 771.9px) {
    width: 100vw;
    height: 100vh;
  }
  .heading {
    text-align: center;
    line-height: 5rem;
    color: var(--font-color);
  }
  .form {
    .main {
      justify-content: center;
      align-items: center;
      @media only screen and (min-width: 300px) and (max-width: 771.9px) {
        flex-direction: column;
      }

      input {
        border-radius: 5px;
        padding: 20px;
        width: 400px;
        margin: 10px 20px;
        border: none;
        background-color: white;
        &:focus {
          outline: 1px solid var(--font-color4);
        }
      }

      .message {
        height: 10rem;
        margin: 20px 0;
      }
    }
    .checkbox {
      display: flex;
      justify-content: center;
      column-gap: 10px;
    }
    .button__submit {
      display: block;
      text-align: center;
      margin: 20px 0;
      .submit {
        padding: 20px;
        width: 200px;
        border-radius: 10px;
        color: var(--font-color3);
        border: 1px solid var(--font-color4);
      }
      .submit.checked {
        background: var(--bg3);
        color: var(--font-color);
        font-size: var(--p);
        border: none;
      }
    }
  }
`;
export default Appointment;
