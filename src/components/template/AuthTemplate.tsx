import { Shield, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";

type TypeAuthTemplate = {
  Icon: LucideIcon;
  children: React.ReactNode;
  textContentHeading: string;
  textContentDeskripsi: string;
  tinggiCard: string;
  styleIcon: string;
};

const AuthTemplate = (props: TypeAuthTemplate) => {
  const {
    children,
    Icon,
    textContentHeading,
    textContentDeskripsi,
    tinggiCard,
    styleIcon
  } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 20 }}
      transition={{ duration: 1, ease: "anticipate" }}
      className="flex flex-col items-center justify-center gap-6"
    >
      <h2 className="font-fredoka text-xl md:text-2xl">
        <span className="bg-pink px-2 text-2xl md:text-3xl ring-2 ring-black">
          N
        </span>{" "}
        EXUS
      </h2>
      <div
        className={`flex flex-col items-center bg-white ${tinggiCard} py-10 space-y-5 justify-between ring-2 ring-black shadow-black relative`}
      >
        <div className="flex flex-col justify-center items-center space-y-2 px-10 text-center">
          <span className={`px-2 py-2  ${styleIcon}  ring-2 ring-black`}>
            <Icon size={26} />
          </span>
          <h1 className="font-fredoka text-3xl text-center font-bold">
            {textContentHeading}
          </h1>
          <p className="text-md font-medium text-ink/50">
            {textContentDeskripsi}
          </p>
        </div>
        {children}
      </div>
      <div className="flex flex-row space-x-1">
        <Shield className="text-gray-400" />
        <span className="font-fredoka text-gray-400">
          Your data is private by default.
        </span>
      </div>
    </motion.div>
  );
};

export default AuthTemplate;
