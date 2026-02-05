import { Skill, Project, Experience } from './types.ts';

export const SKILLS: Skill[] = [
  {
    id: 'robotics',
    category: 'Kinematics & Control',
    items: ['ROS2', 'Webots', 'Gazebo', 'D-H Parameters'],
    description: 'Autonomous protocol architecture and actuator path planning for unstructured environments.',
    icon: 'precision_manufacturing'
  },
  {
    id: 'ai-vision',
    category: 'Perception (AI & CV)',
    items: ['TensorFlow', 'Keras', 'OpenCV', 'LiDAR Fusion'],
    description: 'Neural net weights optimized for real-time edge deployment and obstacle detection.',
    icon: 'visibility'
  },
  {
    id: 'embedded',
    category: 'Physical Interface (HW)',
    items: ['C / C++', 'STM32', 'ARM Cortex', 'Bare-metal'],
    description: 'Low-latency hardware control and board-level architecture for rover mobility.',
    icon: 'settings_input_component'
  },
  {
    id: 'tools',
    category: 'Ops & Simulation',
    items: ['Git/GitHub', 'Linux CLI', 'Asyncio', 'Fusion 360'],
    description: 'CAD modeling, version-controlled firmware loops, and distributed simulation.',
    icon: 'architecture'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'alpha-mini',
    title: 'Alpha Mini Perception',
    subtitle: 'Humanoid Diagnostic 01',
    tech: ['Python SDK', 'Asyncio', 'OpenCV', 'Facial Recognition'],
    metric: '3 Units',
    metricLabel: 'MODULE SYNC',
    description: 'Orchestrated a humanoid robot architecture integrating vision-based attendance and voice interactivity.',
    image: 'https://picsum.photos/seed/robotic-cad1/800/450',
    relatedSkills: ['robotics', 'ai-vision', 'tools']
  },
  {
    id: 'cnn-classifier',
    title: 'Visual Logic Classifier',
    subtitle: 'Neural Weight Set V2',
    tech: ['TensorFlow', 'Keras', 'Adam Opt', 'Webots'],
    metric: '99.96%',
    metricLabel: 'CONFIDENCE LEVEL',
    description: 'Engineered a high-precision neural system for real-time object identification in dynamic test environments.',
    image: 'https://picsum.photos/seed/neural-view/800/450',
    relatedSkills: ['ai-vision', 'tools']
  },
  {
    id: 'surveillance-rover',
    title: 'Autonomous Scout Rover',
    subtitle: 'Embedded Unit: Mk-III',
    tech: ['STM32 Nucleo', 'C++', 'Mbed OS', 'PIR/Ultrasonic'],
    metric: '< 200ms',
    metricLabel: 'RESPONSE TIME',
    description: 'Developed a bare-metal control system on STM32 hardware implementing multi-sensor fusion for patrol logic.',
    image: 'https://picsum.photos/seed/rover-cad/800/450',
    relatedSkills: ['embedded', 'robotics']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Lead Integration Engineer',
    company: 'Humanoid Integration Team',
    range: 'CURRENT MISSION',
    branch: 'HUMANOID V2',
    action: 'Architected the asynchronous event-loop for the Alpha Mini robot, managing navigation and vision feedback concurrently.',
    tags: ['Python', 'Asyncio', 'ROS2']
  },
  {
    role: 'AI Model Optimization Spec',
    company: 'Robotics Perception Module',
    range: '1 YEAR ACTIVE',
    branch: 'NEURAL OPTIMIZATION',
    action: 'Optimized custom CNN architecture weights using Adam optimization for superior accuracy over baseline models.',
    tags: ['TensorFlow', 'CNN', 'Weights']
  },
  {
    role: 'Embedded Systems Architect',
    company: 'Autonomous Systems Unit',
    range: '2 YEARS ACTIVE',
    branch: 'STM32 BAREMETAL',
    action: 'Deployed sensor-fused navigation algorithms on STM32 hardware without RTOS for maximum resource efficiency.',
    tags: ['C++', 'STM32', 'Firmware']
  }
];