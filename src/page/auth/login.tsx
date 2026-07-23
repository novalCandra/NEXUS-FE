import { Clock } from "lucide-react";
import LoginForm from "../../components/organism/LoginForm";
import AuthTemplate from "../../components/template/AuthTemplate";

const PageLogin = () => {
  return (

    <div className={`min-h-screen bg-paper flex justify-center items-center`}>
      <AuthTemplate
        Icon={Clock}
        textContentHeading="Welcome Back."
        textContentDeskripsi="Pick up where your thoughts left off."
        tinggiCard="w-96 md:w-120 md:h-120"
        styleIcon="bg-purple"
      >
        <LoginForm />
      </AuthTemplate>

    </div>
  );
};

export default PageLogin;
