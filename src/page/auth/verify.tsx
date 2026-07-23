import { Mail } from "lucide-react";
import AuthTemplate from "../../components/template/AuthTemplate";
import VerifyForm from "../../components/organism/VerifyForm";

const PageVerify = () => {
  return (
    <div className="flex min-h-screen bg-paper justify-center items-center">
      <AuthTemplate
        Icon={Mail}
        textContentHeading="Check your inbox."
        textContentDeskripsi="We sent a six-digit code to you@example.com. Enter it below to verify your space."
        tinggiCard="w-96 md:w-120 md:h-119"
        styleIcon="bg-green-300"
      >
        <VerifyForm />
      </AuthTemplate>
    </div>
  );
};

export default PageVerify;
