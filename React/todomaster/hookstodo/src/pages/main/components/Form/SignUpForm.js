import React from "react";
import FormInput from "../../../../components/Input";
import TDButton from "../../../../components/Button";
import { Form } from "./form.style";

const SignUpForm = ({ setSignFormState }) => {
  const formArrays = [
    {
      name: "email",
      label: "이메일",
    },
    {
      name: "password",
      label: "비밀번호",
    },
    {
      name: "password-confim",
      label: "비밀번호 확인",
    },
  ];

  const onClickSignUpBtn = () => {
    alert("환영합니다!");
    setSignFormState("SIGN-IN");
  };

  return (
    <Form>
      {formArrays.map(({ label, name }) => (
        <FormInput
          label={label}
          placeholder={name}
          containerStyle={{
            width: "100%",
          }}
        />
      ))}
      <TDButton variant={"primary"} size={"full"} onClick={onClickSignUpBtn}>
        회원가입
      </TDButton>
    </Form>
  );
};
export default SignUpForm;
