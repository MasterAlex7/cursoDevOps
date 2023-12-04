import { Component } from '@angular/core';
import { ModelPregunta } from '../model-pregunta';

@Component({
  selector: 'app-cuestionario1',
  templateUrl: './cuestionario1.component.html',
  styleUrls: ['./cuestionario1.component.css']
})
export class Cuestionario1Component {
  respuestaCorrecta: number = 0;
  preguntas: ModelPregunta[] = [
      {
      enunciado: '¿Cuál es uno de los principales objetivos de DevOps?',
      opciones: [
        'Aumentar la brecha entre desarrollo y operaciones.',
        'Desacelerar la entrega de software.',
        'Mejorar la colaboración y comunicación entre equipos.',
        'Limitar la responsabilidad a un solo equipo.'
        ], 
      respuestaCorrecta: 'Mejorar la colaboración y comunicación entre equipos.'
      },
      {
      enunciado: '¿Cuál de las siguientes etapas de la evolución de DevOps se centra en la integración de la seguridad a lo largo del ciclo de vida de desarrollo y despliegue?',
      opciones: [
        'Automatización y Herramientas.',
        'Cultura y Colaboración.',
        'Orquestación y Escalabilidad.',
        'DevSecOps.'
        ], 
      respuestaCorrecta: 'DevSecOps.'
      },
      {
      enunciado: '¿Qué desafío de seguridad en un entorno DevOps se relaciona con la posibilidad de que la velocidad del desarrollo supere la capacidad de los equipos de seguridad para evaluar y mitigar riesgos?',
      opciones: [
        'Gestión de Identidades y Accesos.',
        'Configuración Segura y Gestión de Secretos.',
        'Cambio de Velocidad vs. Seguridad.',
        'Integración Continua/Entrega Continua (CI/CD) Insegura.'
        ], 
      respuestaCorrecta: 'Cambio de Velocidad vs. Seguridad.'
      },
      {
      enunciado: '¿Por qué es importante verificar la comunidad de usuarios y el soporte al seleccionar herramientas para un entorno DevOps?',
      opciones: [
        'Porque una comunidad activa indica una herramienta obsoleta.',
        'Porque una comunidad activa suele ser indicativo de una herramienta robusta y bien mantenida.',
        'Porque la comunidad no tiene impacto en la eficiencia de las herramientas.',
        'Porque las herramientas sin soporte siempre son más eficientes.'
        ], 
      respuestaCorrecta: 'Porque una comunidad activa suele ser indicativo de una herramienta robusta y bien mantenida.'
      },
      {
      enunciado: ' ¿Cuál es la responsabilidad principal del Ingeniero de Calidad (Quality Engineer) en un entorno DevOps?',
      opciones: [
        'Desarrollar código de alta calidad.',
        'Mantener y administrar la infraestructura y los entornos de producción.',
        'Implementar y mantener prácticas de pruebas continuas.',
        'Definir la visión del producto y establecer objetivos claros.'
        ], 
      respuestaCorrecta: 'Implementar y mantener prácticas de pruebas continuas.'
      },
      {
      enunciado: '¿Qué práctica fomenta la creación de equipos multifuncionales que incluyan miembros de desarrollo, operaciones y QA en un entorno DevOps?',
      opciones: [
        'Cultura de Colaboración.',
        'Equipos Multifuncionales.',
        'Sesiones de Planificación Conjunta.',
        'Automatización de Procesos.'
        ], 
      respuestaCorrecta: 'Equipos Multifuncionales.'
      },
      {
      enunciado: '¿Por qué es importante formar equipos ágiles multifuncionales y autoorganizados en la implementación de prácticas ágiles en el desarrollo de software?',
      opciones: [
        'Para establecer una jerarquía clara en el equipo.',
        'Para reducir la flexibilidad en la toma de decisiones.',
        'Para garantizar una distribución efectiva de responsabilidades.',
        'Para limitar la colaboración entre los miembros del equipo.'
        ], 
      respuestaCorrecta: 'Para garantizar una distribución efectiva de responsabilidades.'
      },
    ]

    calificar() {
      this.respuestaCorrecta = this.preguntas.filter(
        pregunta => pregunta.respuestaCorrecta === pregunta.respuestaUsuario
      ).length;

    }
}
