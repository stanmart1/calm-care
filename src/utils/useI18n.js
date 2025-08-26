import { useTranslation } from 'react-i18next';

export const useI18n = () => {
  const { t } = useTranslation();
  return { t };
};

export default useI18n;