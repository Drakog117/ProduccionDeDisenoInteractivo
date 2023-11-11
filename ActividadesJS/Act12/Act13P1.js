class Estudiante {
    constructor(studentName,  studentAge, isEnrolled ) {
      this.studentName = studentName;
      this. studentAge =  studentAge;
      this.isEnrolled  = isEnrolled ;
    }
  
    averageGrade() {
      const calificaciones = [this.gradeMath, this.gradeScience, this.gradeLanguage];
      return calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0) / calificaciones.length;
    }
  
    attendancePercentage() {
      return this.attendedClasses / this.totalClasses * 100;
    }
  }
  
  const estudiante = new Estudiante("Jesus Valencia", 22, true);
  
  estudiante.gradeMath = 80;
  estudiante.gradeScience = 90;
  estudiante.gradeLanguage = 75;
  estudiante.totalClasses = 30;
  estudiante.attendedClasses = 25;
  
  console.log("Nombre:", estudiante.studentName);
  console.log("Edad:", estudiante. studentAge);
  console.log("Inscrito :", estudiante.isEnrolled );
  
  console.log("Calificaciones:");
  console.log("Matemáticas:", estudiante.gradeMath);
  console.log("Ciencias:", estudiante.gradeScience);
  console.log("Lenguaje:", estudiante.gradeLanguage);
  console.log("Promedio:", estudiante.averageGrade());
  
  console.log("Clases totales:", estudiante.totalClasses);
  console.log("Clases asistidas:", estudiante.attendedClasses);
  console.log("Porcentaje de asistencia:", estudiante.attendancePercentage());
  