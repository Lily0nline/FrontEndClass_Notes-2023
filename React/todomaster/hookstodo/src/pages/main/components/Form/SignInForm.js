import React from "react";
import { Form } from "./form.style";
import FormInput from "../../../../components/Input";
import TDButton from "../../../../components/Button";

const SignInForm = () => {
  const formArrays = [
    {
      name: "email",
      label: "이메일",
    },
    {
      name: "password",
      label: "비밀번호",
    },
  ];

  const onClickSginInBtn = () => {
    // ?
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
      <TDButton variant={"primary"} size={"full"} onClick={onClickSginInBtn}>
        로그인
      </TDButton>
    </Form>
  );
};
export default SignInForm;
