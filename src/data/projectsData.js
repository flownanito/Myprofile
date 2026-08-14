import gestorReservaHotel from '../assets/gestorReservaHotel.png';
import distanciaEnfoque from '../assets/distanciaEnfoque.png';
import desatascosBenito from '../assets/desatascosBenito.png';
import simuladorCasino from '../assets/simuladorCasino.png';
import paintMvc from '../assets/paintMvc.png';
import neonOrb from '../assets/neonOrb.png';
import menuRestaurantes from '../assets/menuRestaurantes.png';
import gestorInventario from '../assets/gestorInventario.png';
import concesionario from '../assets/concesionario.png';

export const CATEGORIES = [
    { id: 'all', label: 'Todas las Obras' },
    { id: 'hardware', label: 'Hardware & Sensores' },
    { id: 'systems', label: 'Sistemas & Cloud' },
    { id: 'interfaces', label: 'Interfaces & Web' },
    { id: 'simulation', label: 'Simulación & Física' }
];

export const PROJECTS_DATA = [
    {
        id: 'distancia-enfoque-cinematografico',
        number: '01',
        title: 'Distancia de Enfoque Cinematográfico',
        shortTag: 'Hardware + Mobile IoT',
        category: 'hardware',
        tagline: 'Instrumento de calibración óptica de alta precisión para rodajes y pruebas de cámara.',
        summary: 'Herramienta integral de ingeniería para agilizar las pruebas ópticas en cartas de enfoque cinematográfico, calculando con precisión milimétrica la distancia focal y profundidad de campo mediante sensores LiDAR/ultrasonidos y una interfaz Flutter reactiva.',
        challenge: 'En la industria cinematográfica, la calibración de objetivos y cartas de foco requiere mediciones exactas y repetibles en tiempo récord. El método analógico tradicional es lento y propenso a errores humanos de paralaje.',
        architecture: 'Arquitectura híbrida que conecta un microcontrolador Arduino con telemetría LiDAR vía protocolo serial/Bluetooth hacia una aplicación móvil en Flutter. El procesado matemático de profundidad de campo y círculo de confusión se ejecuta en tiempo real en el cliente móvil.',
        impact: 'Reducción del 70% en el tiempo de preparación en pruebas de cámara de cine y fiabilidad milimétrica en mediciones críticas.',
        tech: ['Flutter', 'Dart', 'Arduino', 'C++', 'LiDAR Sensors', 'Serial Protocol', 'Mobile UX'],
        image: distanciaEnfoque,
        year: '2026',
        featured: true,
        stats: [
            { label: 'Precisión', value: '±1.5 mm' },
            { label: 'Tiempo Calibración', value: '-70%' },
            { label: 'Latencia Sensor', value: '< 25ms' }
        ],
        github: 'https://github.com/flownanito',
        liveDemo: null
    },
    {
        id: 'gestor-reservas-hotel',
        number: '02',
        title: 'Hospitality Engine & Gestión Hotelera',
        shortTag: 'Cloud Enterprise Platform',
        category: 'systems',
        tagline: 'Arquitectura Full Stack para operaciones hoteleras, asignación dinámica de habitaciones y control de estancia.',
        summary: 'Plataforma integral de gestión de reservas hoteleras diseñada para automatizar el flujo completo de check-in, check-out, disponibilidad en tiempo real, facturación y gestión de inventario de habitaciones.',
        challenge: 'Manejar la concurrencia de reservas simultáneas evitando sobreventa (overbooking), garantizando transaccionalidad ACID y ofreciendo un panel de administración ultra rápido y sin fricciones.',
        architecture: 'Backend robusto con Java 17 y Spring Boot bajo arquitectura de capas limpias (Clean Architecture). Base de datos PostgreSQL con transacciones aisladas y pooling optimizado. Frontend en React desacoplado que consume APIs RESTful tipadas. Todo containerizado con Docker para despliegues reproducibles.',
        impact: 'Control de inventario en tiempo real con 0 inconsistencias de reserva y tiempos de respuesta de API inferiores a 40ms.',
        tech: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST API', 'Hibernate JPA', 'Tailored CSS'],
        image: gestorReservaHotel,
        year: '2025',
        featured: true,
        stats: [
            { label: 'Respuesta API', value: '< 40ms' },
            { label: 'Integridad Datos', value: '100% ACID' },
            { label: 'Despliegue', value: 'Dockerizado' }
        ],
        github: 'https://github.com/flownanito',
        liveDemo: null
    },
    {
        id: 'simulador-casino-multihilo',
        number: '03',
        title: 'Casino Concurrency Engine',
        shortTag: 'High Performance & Multithreading',
        category: 'simulation',
        tagline: 'Motor de simulación multihilo con algoritmos de sincronización y distribución probabilística en tiempo real.',
        summary: 'Sistema de simulación determinista y probabilística en Java donde múltiples hilos autónomos representan jugadores concurrentes con diferentes estrategias de apuestas, gestionando contención de recursos y consistencia de banca.',
        challenge: 'Evitar condiciones de carrera (race conditions), deadlocks e inanición (starvation) entre decenas de hilos compitiendo por recursos compartidos a alta velocidad.',
        architecture: 'Implementación de primitivas avanzadas de concurrencia en Java (Locks, Semáforos, Atomic variables, Concurrent Collections y ThreadPools). Modelo de monitorización de eventos en tiempo real para análisis estadístico de retorno (RTP).',
        impact: 'Ejecución fluida de miles de iteraciones concurrentes por segundo sin bloqueos mutuos ni corrupción de memoria.',
        tech: ['Java', 'Multithreading', 'Concurrency Locks', 'Memory Barriers', 'Data Structures', 'Statistical Analysis'],
        image: simuladorCasino,
        year: '2025',
        featured: true,
        stats: [
            { label: 'Hilos Concurrentes', value: '100+' },
            { label: 'Deadlocks', value: '0' },
            { label: 'Throughput', value: '10k op/s' }
        ],
        github: 'https://github.com/flownanito',
        liveDemo: null
    },
    {
        id: 'neon-orb-pgl',
        number: '04',
        title: 'Neon Orb: Kinetic Physics Engine',
        shortTag: 'Interactive Computing & Game Mechanics',
        category: 'simulation',
        tagline: 'Arcade cinético con simulación física 2D, cinemática vectorial y renderizado de partículas reactivas.',
        summary: 'Experiencia interactiva en tiempo real desarrollada en C# y Unity que implementa mecánicas avanzadas de rebote elástico, gravedad modular y partículas de iluminación dinámica.',
        challenge: 'Lograr una respuesta de entrada instantánea con tasa de refresco a 60 FPS estables, asegurando que las colisiones físicas mantengan precisión angular en trayectorias de alta velocidad.',
        architecture: 'Arquitectura desacoplada en Unity basada en componentes y Scriptable Objects. Gestión de memoria con Object Pooling para partículas e impactos, minimizando el impacto del recolector de basura (GC).',
        impact: 'Rendimiento estable a 60 FPS sostenidos con feedback háptico y visual inmersivo.',
        tech: ['C#', 'Unity', '2D Physics Engine', 'Object Pooling', 'Vector Math', 'Particle Systems'],
        image: neonOrb,
        year: '2025',
        featured: true,
        stats: [
            { label: 'Frame Rate', value: '60 FPS Lock' },
            { label: 'GC Spikes', value: '0 ms' },
            { label: 'Física', value: 'Vectorial 2D' }
        ],
        github: 'https://github.com/flownanito',
        liveDemo: null
    },
    {
        id: 'desatascos-benito',
        number: '05',
        title: 'Desatascos Benito: Business Digital Hub',
        shortTag: 'Commercial Web Platform',
        category: 'interfaces',
        tagline: 'Plataforma web comercial orientada a conversión de clientes, cotización y gestión de emergencias 24/7.',
        summary: 'Aplicación web para una empresa de servicios industriales de fontanería y saneamiento, optimizada para conversión directa de leads, cálculo de presupuestos dinámicos y navegación táctil rápida.',
        challenge: 'Diseñar un flujo de usuario donde una persona en situación de avería urgente pueda solicitar asistencia o presupuesto en menos de 15 segundos desde su teléfono móvil.',
        architecture: 'Frontend en React optimizado para carga instantánea (Core Web Vitals verdes), formulario con validaciones instantáneas y conexión a sistemas de mensajería y correo.',
        impact: 'Incremento en la tasa de contacto móvil y carga inicial en menos de 0.8 segundos.',
        tech: ['React', 'JavaScript ESNext', 'HTML5', 'CSS Architecture', 'Conversion UX', 'Mobile First'],
        image: desatascosBenito,
        year: '2025',
        featured: false,
        stats: [
            { label: 'Carga LCP', value: '0.8s' },
            { label: 'Mobile UX', value: '100/100' }
        ],
        github: 'https://github.com/flownanito',
        liveDemo: null
    },
    {
        id: 'menu-restaurantes-dad',
        number: '06',
        title: 'Restaurant Interactive OS & Orders',
        shortTag: 'Interactive UI & Point of Sale',
        category: 'interfaces',
        tagline: 'Carta digital interactiva con personalización de platos, control de alérgenos y cesta dinámica.',
        summary: 'Aplicación de menú y pedidos interactivos para restauración, diseñada para agilizar el servicio en mesa mediante filtrado inteligente, navegación visual y sincronización de comanda.',
        challenge: 'Garantizar una experiencia intuitiva para cualquier perfil de usuario, con filtros multi-criterio rápidos y visualización clara de suplementos e información nutricional.',
        architecture: 'Arquitectura modular en JavaScript vainilla con gestión de estado reactiva ligera, componentes desacoplados y animaciones CSS de alto rendimiento.',
        impact: 'Navegación fluida a 60 FPS con actualización de comanda reactiva en tiempo real.',
        tech: ['JavaScript', 'HTML5', 'CSS Grid/Flexbox', 'State Management', 'UI Design'],
        image: menuRestaurantes,
        year: '2025',
        featured: false,
        stats: [
            { label: 'Interactividad', value: 'Instant' },
            { label: 'Accesibilidad', value: 'A11y Ready' }
        ],
        github: 'https://github.com/flownanito',
        liveDemo: null
    },
    {
        id: 'gestor-inventario-aed',
        number: '07',
        title: 'Inventory & Data Persistence Engine',
        shortTag: 'Database Engineering',
        category: 'systems',
        tagline: 'Sistema de control de stock y persistencia relacional con validación de transacciones y auditoría.',
        summary: 'Herramienta empresarial de control de inventario desarrollada en Java con persistencia de base de datos relacional, enfocada en trazabilidad de existencias, control de almacén y reportes.',
        challenge: 'Diseñar un esquema de datos relacional normalizado con integridad referencial estricta y consultas optimizadas para informes de stock.',
        architecture: 'Patrón DAO (Data Access Object) desacoplado de la capa de lógica de negocio, con conexión segura vía JDBC y transacciones controladas.',
        impact: 'Cero discrepancias de inventario en pruebas de carga transaccional.',
        tech: ['Java', 'MySQL', 'JDBC', 'DAO Pattern', 'Relational Design', 'SQL Optimization'],
        image: gestorInventario,
        year: '2025',
        featured: false,
        stats: [
            { label: 'Normalización', value: '3FN' },
            { label: 'Consistencia', value: '100%' }
        ],
        github: 'https://github.com/flownanito',
        liveDemo: null
    },
    {
        id: 'concesionario-aed',
        number: '08',
        title: 'Auto Dealer Fleet Management',
        shortTag: 'Enterprise Database System',
        category: 'systems',
        tagline: 'Plataforma de gestión de flota de vehículos, ventas, expedientes y control de clientes.',
        summary: 'Aplicación de escritorio y gestión de bases de datos para concesionarios de vehículos, administrando catálogo, expedientes de venta, tasaciones y contratos.',
        challenge: 'Coordinar relaciones complejas entre modelos de coches, opciones de equipamiento, comerciales y compradores con validaciones empresariales rigurosas.',
        architecture: 'Capa de persistencia relacional con procedimientos almacenados, vistas de consulta optimizadas y lógica de negocio modular en Java.',
        impact: 'Gestión centralizada de flota con consultas complejas resueltas en milisegundos.',
        tech: ['Java', 'MySQL', 'Relational Modeling', 'Business Logic', 'SQL'],
        image: concesionario,
        year: '2025',
        featured: false,
        stats: [
            { label: 'Relaciones SQL', value: 'Optimizadas' },
            { label: 'Manejo Flota', value: 'Escalable' }
        ],
        github: 'https://github.com/flownanito',
        liveDemo: null
    },
    {
        id: 'paint-mvc',
        number: '09',
        title: 'Paint MVC: Canvas & Architecture Engine',
        shortTag: 'Software Architecture & Patterns',
        category: 'interfaces',
        tagline: 'Entorno de dibujo vectorial y rasterizado con patrón estricto Modelo-Vista-Controlador y Command Pattern.',
        summary: 'Aplicación de ilustración gráfica desarrollada en Java aplicando patrones de diseño de software avanzados para gestión de herramientas, paleta, capas y soporte de deshacer/rehacer (Undo/Redo).',
        challenge: 'Implementar un historial infinito de acciones y manipulación de gráficos sin acoplar los eventos de interfaz gráfica con el estado del lienzo.',
        architecture: 'Implementación pura de MVC y Command Pattern con observadores para renderizado eficiente del buffer gráfico.',
        impact: 'Arquitectura extensible que permite añadir nuevas herramientas gráficas sin modificar el núcleo de renderizado.',
        tech: ['Java', 'MVC Pattern', 'Command Pattern', 'Canvas Graphics', 'Event-Driven'],
        image: paintMvc,
        year: '2024',
        featured: false,
        stats: [
            { label: 'Patrón', value: 'Pure MVC' },
            { label: 'Historial', value: 'Command Undo' }
        ],
        github: 'https://github.com/flownanito',
        liveDemo: null
    }
];
