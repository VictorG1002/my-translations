import { useTheme } from 'next-themes';


export default function useColorMode() {
  const { theme, setTheme } = useTheme();

  return [theme, setTheme];
};

