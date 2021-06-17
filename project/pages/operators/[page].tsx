import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import styled from "styled-components";
import InputMask from "react-input-mask";
import GlobalHead from "../_document";

const capitalize = (word: string) => word[0].toUpperCase() + word.substring(1);

const Popup = ({ success }: any) => (
  <StyledPopup
    height={!success ? "40px" : "80px"}
    color={!success ? "green" : "red"}
  >
    <StyledPopupText padding={!success ? "10px 0 0 0" : "0"}>
      {!success ? (
        "Операция проведена успешно!"
      ) : (
        <p>
          Произошла неполадка.<p>Повторите ещё раз.</p>
        </p>
      )}
    </StyledPopupText>
  </StyledPopup>
);

const Payment = () => {
  const [phone, setPhone] = useState("");
  const [sum, setSum] = useState("");
  const [error, setError] = useState({ phone: "", sum: "" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onChangeSum = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      (+e.target.value > 0 && +e.target.value <= 1000) ||
      e.target.value === ""
    ) {
      setSum(e.target.value);
    }
  };

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isValidPhone = phone.length === 16;

    setError({
      sum: !sum ? "Введите сумму" : "",
      phone: !isValidPhone ? "Введите корректный номер" : "",
    });

    if (!sum || phone.length < 16) return;

    setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsError(false);
        setIsSuccess(true);
        setTimeout(() => {
          Router.push("/");
        }, 3000);
      } else {
        setIsError(true);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);
      }
    }, 2000);
  };

  const router = useRouter();
  const name = router?.query?.page as string;

  return (
    <Container>
      <GlobalHead title={!name ? "" : name && capitalize(name)} />

      <Main>
        <h1>{!name ? <></> : <div>{name && capitalize(name)}</div>}</h1>
        <Form>
          <InputMask
            mask="+7 999 999 99 99"
            maskChar=""
            disabled={false}
            value={phone}
            onChange={onChangePhone}
          >
            {() => <Input type="tel" placeholder={"Номер телефона"} />}
          </InputMask>
          <Error>{error.phone}</Error>
          <Input
            value={sum}
            onChange={onChangeSum}
            type="number"
            placeholder="Введите сумму пополнения(1-1000 руб)"
          />
          <Error>{error.sum}</Error>
          <SubmitButton type="button" onClick={onClickButton}>
            Оплатить
          </SubmitButton>
          {isSuccess && <Popup success={isError} />}
        </Form>
      </Main>
    </Container>
  );
};
const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Arial", monospace;
`;
const Main = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  height: 30px;
  width: 300px;
  margin-top: 5%;
  border-radius: 5px;
  text-align: center;
`;
const SubmitButton = styled.button`
  height: 30px;
  width: 300px;
  margin-top: 5%;
  border-radius: 10px;
  font-size: 14px;
  :hover {
    border-color: rgb(0, 152, 95);
    background-color: rgb(0, 152, 95);
    color: white;
  }
`;
const Error = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  color: red;
  font-size: 12px;
`;
interface IStyledPopup {
  color?: string
  height?: string
}
const StyledPopup = styled.div<IStyledPopup>`
  margin-top: 5%;
  width: 300px;
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  border: 2px solid black;
  color: white;
  border-radius: 15px;
`;
interface IStyledPopupText {
  padding?: string
  
}
const StyledPopupText = styled.div<IStyledPopupText>`
  font-size: 14px;
  text-align: center;
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default Payment;
