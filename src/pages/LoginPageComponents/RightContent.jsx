import React from "react";
import ReactDOM from "react-dom";
import Input from "../../components/Input";
import CTA from '../../components/CTA';
import Logo from "../../components/Logo";
import { Checkbox } from "@mui/material";

function handleLogin()
{

}

export default function RightContent() {
  return (
    <div className="box-border h-full w-full bg-white px-[100px] pt-[72px]">
      {/* introduction */}
      <div className="font-[Montserrat] leading-tight w-full">
        <Logo/>
        <p className="text-(--color-text-desc) font-medium">
          Welcome back! Please sign in to continue
        </p>
      </div>

      {/* input */}
      <form className="mt-10 space-y-4" onSubmit={handleLogin}>
        <Input title="Email Address" placeholder="example@gmail.com" isEmail={true} isRequired={true} name="email" />
        <Input title="Password" placeholder="••••••••" isPassword={true} isRequired={true} name="password"/>

        <div className="flex items-center text-(--color-primary) font-medium -mt-2">
            <Checkbox/>
            <p className="text-(--color-text)">Remember me</p>
            <a className="ml-auto">Forgot password?</a>
        </div>

        {/* btn */}
        <div className="mt-4">
          <CTA title='Login' type="submit"/>
          <p className="text-(--color-text) mt-4 text-center">Don't have an account? <a href="/" className="text-(--color-primary) font-medium">Sign Up</a></p>
          <div className="flex mt-6 items-center">
              <div className="flex-2 border border-(--color-text-desc) h-px"/>
              <p className="flex-1 text-(--color-text) text-center text-[18px]"> OR </p>
              <div className="flex-2 border border-(--color-text-desc) h-px"/>
          </div>

          <div className="mt-6">
              <CTA title="Continue with Google" backgroundColor="White" color="#403D3D" border="true" icon="google"/>
          </div>
        </div>
      </form>

    </div>
  );
}
