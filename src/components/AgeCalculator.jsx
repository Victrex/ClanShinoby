/* eslint-disable react/prop-types */

const AgeCalculator = ({fechaNacimiento}) => {
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    
    let age = today.getFullYear() - birth.getFullYear();
    
    // Verificar si aún no se ha alcanzado el mes de nacimiento
    if (
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    
    return age;
  };
  
  const birthDate = fechaNacimiento;
  const age = calculateAge(birthDate);
  
  return (
    <>
      {age} años
    </>
  );
};

export default AgeCalculator;