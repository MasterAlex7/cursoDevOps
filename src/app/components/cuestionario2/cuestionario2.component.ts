import { Component } from '@angular/core';
import { ModelPregunta } from '../model-pregunta';

@Component({
  selector: 'app-cuestionario2',
  templateUrl: './cuestionario2.component.html',
  styleUrls: ['./cuestionario2.component.css']
})
export class Cuestionario2Component {
  respuestaCorrecta: number = 0;
  preguntas: ModelPregunta[] = [
      {
      enunciado: '¿Cuál es uno de los beneficios clave de la implementación de Infraestructura como Código (IaC)?',
      opciones: [
        'Mayor complejidad en la gestión de recursos.',
        'Dependencia de interfaces gráficas para la configuración.',
        'Automatización de procesos como aprovisionamiento y configuración.',
        'Reducción de la flexibilidad en la gestión de la infraestructura.'
        ], 
      respuestaCorrecta: 'Automatización de procesos como aprovisionamiento y configuración.'
      },
      {
      enunciado: '¿Cuál de las siguientes herramientas utiliza un lenguaje declarativo para describir recursos y proveedores en la nube en el contexto de la infraestructura como código (IaC)?',
      opciones: [
        'Ansible.',
        'AWS CloudFormation.',
        'Chef.',
        'Terraform.'
        ], 
      respuestaCorrecta: 'Terraform.'
      },
      {
      enunciado: '¿Cuál de las siguientes herramientas es agnóstica de la plataforma y utiliza scripts YAML para definir y gestionar la infraestructura como código en un entorno DevOps?',
      opciones: [
        'Terraform.',
        'AWS CloudFormation.',
        'Ansible.',
        'Azure Resource Manager (ARM).'
        ], 
      respuestaCorrecta: 'Ansible.'
      },
      {
      enunciado: '¿Cuál es uno de los beneficios del monitoreo continuo en un entorno DevOps en términos de retroalimentación inmediata?',
      opciones: [
        'Identificación de cuellos de botella.',
        'Detección temprana de problemas.',
        'Gestión proactiva de la infraestructura.',
        'Optimización del rendimiento.'
        ], 
      respuestaCorrecta: 'Detección temprana de problemas.'
      },
      {
      enunciado: '  ¿Cuál de las siguientes herramientas es conocida por proporcionar información detallada sobre el rendimiento de las aplicaciones, incluyendo monitoreo de rendimiento de aplicaciones, supervisión de infraestructura y capacidades de análisis de registros en un entorno DevOps?',
      opciones: [
        'Prometheus.',
        'Grafana.',
        'Datadog.',
        'New Relic.'
        ], 
      respuestaCorrecta: 'New Relic.'
      },
      {
      enunciado: '¿Cuál es uno de los propósitos del análisis de logs en un entorno DevOps para mejorar el rendimiento y la confiabilidad?',
      opciones: [
        'Identificar métricas clave.',
        'Establecer objetivos claros.',
        'Buscar patrones y correlaciones en eventos, errores y actividades.',
        'Realizar análisis de rendimiento para identificar cuellos de botella.'
        ], 
      respuestaCorrecta: 'Buscar patrones y correlaciones en eventos, errores y actividades.'
      },
      {
      enunciado: '¿Cuál de las siguientes prácticas y herramientas se centra en realizar pruebas dinámicas de seguridad para identificar vulnerabilidades en aplicaciones en ejecución en un entorno DevOps?',
      opciones: [
        'Análisis de Código Estático (SAST) con SonarQube.',
        'Pruebas de Penetración con Metasploit.',
        'Escaneo de Dependencias (SCA) con OWASP Dependency-Check.',
        'Análisis Dinámico de Seguridad (DAST) con OWASP ZAP.'
        ], 
      respuestaCorrecta: 'Análisis Dinámico de Seguridad (DAST) con OWASP ZAP.'
      },
    ]

    calificar() {
      this.respuestaCorrecta = this.preguntas.filter(
        pregunta => pregunta.respuestaCorrecta === pregunta.respuestaUsuario
      ).length;

    }
}
