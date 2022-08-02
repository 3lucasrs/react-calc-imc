export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  yourImc?: number;
};

export const levels: Level[] = [
  { title: "Magreza", color: "#697A80", icon: "down", imc: [0, 18.40] },
  { title: "Normal", color: "#0EAD69", icon: "up", imc: [18.50, 24.90] },
  { title: "Sobrepeso", color: "#E2B039", icon: "down", imc: [25.00, 29.90] },
  { title: "Obesidade", color: "#C3423F", icon: "down", imc: [30.00, 99] },
];

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for (const i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let levelCopy = {...levels[i]};
      levelCopy.yourImc = parseFloat(imc.toFixed(1));
      return levelCopy;
    } 
  }
  return null;
};
