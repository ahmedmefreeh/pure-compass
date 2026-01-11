import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const BackButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();

  // In RTL, back arrow should point right (→), in LTR it should point left (←)
  const ArrowIcon = isRTL ? ArrowRight : ArrowLeft;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="container-custom pb-2 pt-2 flex">
      <div className={`flex ${isRTL ? "justify-end" : "justify-start"}`}>
        <Button
          onClick={handleBack}
          variant="ghost"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowIcon className="w-4 h-4" />
          {t("common.back")}
        </Button>
      </div>
    </motion.div>
  );
};

export default BackButton;
