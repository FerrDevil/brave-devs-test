import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import GlobalHead from "../public/document";
import Modal from "react-modal";
import InputMask from "react-input-mask";

interface IOps {
  name: string;
  img: string;
  size: Array<number>;
  href: string;
}

const operatorsList: Array<IOps> = [
  { name: "Мегафон", img: "/megafon.png", size: [350, 350], href: "мегафон" },
  { name: "МТС", img: "/mts.png", size: [350, 350], href: "МТС" },
  { name: "Билайн", img: "/beeline.png", size: [350, 350], href: "билайн" },
];

const Operators = () => {
  const [operators, setOperators] = useState(operatorsList);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [filePath, setFilePath] = useState("");
  const [href, setHref] = useState("");
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const OnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const OnChangeFilePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilePath(e.target.value);
  };

  const OnChangeHref = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHref(e.target.value);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addOpModal = () => {
    const newop = {
      name: name ? name : "Default",
      img: filePath ? filePath : "/default.png",
      size: [350, 350],
      href: href ? href : "default",
    };
    setOperators((prev) => [...prev, newop]);
    setIsOpen(!modalIsOpen);
  };

  return (
    <OpsFlex>
      {operators.map((i) => (
        <Operator key={i.name} operator={i} />
      ))}
      <AddNewOp onClick={openModal}>
        <AddNewOpImage>
          <Image
            layout="responsive"
            src="/plus.png"
            alt="plus"
            width={350}
            height={350}
          />
        </AddNewOpImage>
      </AddNewOp>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={modalStyles}
        ariaHideApp={false}
      >
        <ModalBody>
          <ModalHeader>
            <h3>Окно изменения операторов</h3>
            <ModalHeaderButton onClick={closeModal}>✖</ModalHeaderButton>
          </ModalHeader>
          <Form>
            <Input type="text" onChange={OnChangeName} placeholder={"Название оператора"} />
            <Input type="text" onChange={OnChangeFilePath}placeholder="Путь к файлу" />
            <Input type="text" onChange={OnChangeHref}placeholder="Ссылка на страницу оплаты" />
            <SubmitButton onClick={addOpModal}> Добавить </SubmitButton>
          </Form>
        </ModalBody>
      </Modal>
    </OpsFlex>
  );
};

const Operator = ({ operator }: any) => {
  const router = useRouter();
  return (
    <OperatorItem
      onClick={() => router.push({ pathname: "/operators/" + operator.href })}
      key={operator.name}
    >
      <h3>{operator.name}</h3>
      <OperatorCard>
        <Image
          layout="responsive"
          src={operator.img}
          alt={operator.img.split(".")[0]}
          width={operator.size[0]}
          height={operator.size[1]}
        />
      </OperatorCard>
    </OperatorItem>
  );
};

export default function Page() {
  return (
    <Container>
      <GlobalHead title="Mobile Operators Terminal" />
      <Main>
        <h1>Mobile Ops</h1>
        <Hint>Нажмите на логотип для пополнения</Hint>
        <Operators />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-family: "Arial", monospace;
  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`;

const Main = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const AddNewOp = styled.div`
  padding: 5%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-bottom: 5%;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 20%;
  width: 300px;
  height: 300px;
  :hover {
    border-color: rgb(0, 152, 95);
    color: rgb(0, 152, 95);
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 5%;
    width: 200px;
    height: 200px;
  }
  @media only screen and (max-width: 1000px) {
    width: 200px;
    height: 200px;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-bottom: 5%;
  }
`;
const AddNewOpImage = styled.div`
  width: 100%;
  height: 100%;
  padding: 20%;
  @media only screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
    padding: 20% 0 0 20%;
  }
  @media only screen and (max-width: 1000px) {
    width: 80%;
    height: 80%;
    padding: 20% 0 0 20%;
  }
`;
const OpsFlex = styled.div`
  margin-top: 3%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  @media only screen and (max-width: 600px) {
    margin-top: 5%;
    flex-direction: column;
  }
`;

const OperatorItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5% 2.5% 5%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-bottom: 5%;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 20%;
  width: 300px;
  height: 300px;
  :hover {
    border-color: rgb(0, 152, 95);
    color: rgb(0, 152, 95);
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 5%;
    width: 200px;
    height: 200px;
  }
  @media only screen and (max-width: 1000px) {
    width: 200px;
    height: 200px;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-bottom: 5%;
  }
`;
const OperatorCard = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 600px) {
    margin-top: -10%;
    width: 80%;
    height: 80%;
    padding: 5%;
  }
`;
const Hint = styled.div`
  @media only screen and (max-width: 600px) {
    margin-bottom: 5%;
    font-size: 12px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  height: 30px;
  width: 300px;
  margin-top: 20px;
  border-radius: 5px;
  text-align: center;
`;
const SubmitButton = styled.button`
  height: 30px;
  width: 300px;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 14px;
  :hover {
    border-color: rgb(0, 152, 95);
    background-color: rgb(0, 152, 95);
    color: white;
  }
`;
const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const ModalHeaderButton = styled.a`
  margin-left: 10px;
  :hover {
    color: rgb(0, 152, 95);
  }
`;
const ModalBody = styled.div`
  display: grid;
  align-items: center;
  max-width: 100%;
`;
