import { User } from "lucide-react";
import RegisterForm from "../../components/organism/RegisterForm";
import AuthTemplate from "../../components/template/AuthTemplate";

const PageRegister = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-paper">
      <AuthTemplate
        Icon={User}
        textContentHeading="Make space for more."
        textContentDeskripsi="Start your second brain in one calm place."
        tinggiCard="w-96 md:w-120 md:h-190"
        styleIcon="bg-purple"
      >
        <RegisterForm />
      </AuthTemplate>
    </div>
  );
};

export default PageRegister;
